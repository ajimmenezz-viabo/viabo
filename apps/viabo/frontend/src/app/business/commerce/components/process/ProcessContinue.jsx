import { Box, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { LoadingButton } from '@mui/lab'
import { EmailOutlined } from '@mui/icons-material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormSteps from '@/shared/assets/img/forms_steps.svg'
import { useFindCommerceToken, useSendValidationCode } from '@/app/business/commerce/hooks'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import PropTypes from 'prop-types'
import { propTypesStore } from '@/app/business/commerce/store'

ProcessContinue.propTypes = {
  store: PropTypes.shape(propTypesStore)
}
export default function ProcessContinue({ store }) {
  const { setToken, setActualProcess, setLastProcess } = store
  const { mutate: sendValidationCode, isLoading: isSendingCode } = useSendValidationCode()

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingresa un correo valido').required('El correo es requerido')
    }),
    onSubmit: values => {
      const email = values?.email
      refetch().then(result => {
        const { isError, data } = result
        if (isError) {
          setSubmitting(false)
        } else {
          setToken(data?.token)
          sendValidationCode(
            { email, token: data?.token },
            {
              onSuccess: () => {
                setActualProcess(PROCESS_LIST.VALIDATION_CODE)
                setLastProcess()
              },
              onError: () => {
                setSubmitting(false)
              }
            }
          )
        }
      })
    }
  })

  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    setSubmitting,
    getFieldProps,
    setFieldValue
  } = formik

  const { data, isError, refetch } = useFindCommerceToken(values?.email, {
    enabled: false
  })

  const loading = isSendingCode || isSubmitting

  return (
    <>
      <Stack direction="column" width={1} spacing={1}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" color="textPrimary" align="center">
            Continué con el proceso
          </Typography>
          <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
            Ingrese el correo electrónico con el que se hizo el registro para poder continuar con su proceso.
          </Typography>
        </motion.div>
      </Stack>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 4
          }}
        >
          <img src={FormSteps} width="40%" alt="fill forms" />
        </Box>
      </motion.div>
      <Box component={'form'} mt={3} onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Correo"
            placeholder={'usuario@dominio.com'}
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              )
            }}
          />
          <LoadingButton
            onClick={handleSubmit}
            loading={loading}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ textTransform: 'uppercase' }}
          >
            Continuar
          </LoadingButton>
        </Stack>
      </Box>
    </>
  )
}