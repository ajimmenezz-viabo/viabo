import PropTypes from 'prop-types'

import { EmailOutlined, Phone } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { bankCatalogs } from '@/app/shared/_mock/banks'
import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const NewSpeiThirdAccountForm = ({ account }) => {
  const ValidationSchema = Yup.object().shape({
    clabe: Yup.string().trim().max(18, 'Máximo 18 caracteres').required('Es necesario la clabe'),
    name: Yup.string().trim().max(100, 'Máximo 100 caracteres').required('Es necesario el beneficiario'),
    rfc: Yup.string(),
    alias: Yup.string().trim().max(100, 'Máximo 100 caracteres'),
    bank: Yup.object().nullable().required('Es necesario el banco'),
    email: Yup.string().trim().email('Ingrese un correo valido'),
    phone: Yup.string().trim()
  })

  const formik = useFormik({
    initialValues: {
      clabe: account?.clabe || '',
      name: account?.name || '',
      alias: account?.alias || '',
      rfc: account?.rfc || '',
      bank: bankCatalogs?.find(bank => bank?.marca === account?.bank) || null,
      email: account?.email || '',
      phone: account?.phone || ''
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values, { setSubmitting, setFieldValue }) => {}
  })

  const { isSubmitting, setFieldValue, values } = formik

  const loading = isSubmitting
  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Cuenta CLABE
              <Box component={'span'} color={'error.main'} ml={0.5}>
                *
              </Box>
            </Typography>

            <RFTextField required name={'clabe'} size={'small'} disabled={loading} placeholder={'Clabe...'} />
          </Stack>

          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Beneficiario
              <Box component={'span'} color={'error.main'} ml={0.5}>
                *
              </Box>
            </Typography>

            <RFTextField
              required
              name={'name'}
              size={'small'}
              placeholder={'Nombre del titular de la cuenta...'}
              disabled={loading}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              RFC
            </Typography>

            <RFTextField name={'rfc'} size={'small'} placeholder={'RFC del beneficiario...'} disabled={loading} />
          </Stack>

          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Alias
            </Typography>

            <RFTextField name={'alias'} size={'small'} placeholder={'Alias de la cuenta...'} disabled={loading} />
          </Stack>

          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Banco
              <Box component={'span'} color={'error.main'} ml={0.5}>
                *
              </Box>
            </Typography>
            <RFSelect
              name={'bank'}
              disableClearable
              textFieldParams={{ placeholder: 'Seleccionar ...', required: true, size: 'small' }}
              options={bankCatalogs}
              disabled={loading}
            />
          </Stack>

          <Stack flexDirection={{ md: 'row' }} gap={2}>
            <Stack spacing={1} flex={1}>
              <Typography type={'email'} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Correo
              </Typography>

              <RFTextField
                name={'email'}
                size={'small'}
                placeholder={'beneficiario@domino.com...'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  )
                }}
                disabled={loading}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Teléfono
              </Typography>
              <RFTextField
                name={'phone'}
                type={'tel'}
                size={'small'}
                placeholder={'55 5555 5555'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  )
                }}
                disabled={loading}
              />
            </Stack>
          </Stack>

          <Stack sx={{ pt: 1 }}>
            <LoadingButton size={'large'} loading={loading} variant="contained" color="primary" fullWidth type="submit">
              Crear
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Scrollbar>
  )
}

NewSpeiThirdAccountForm.propTypes = {
  account: PropTypes.shape({
    alias: PropTypes.string,
    bank: PropTypes.any,
    clabe: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    rfc: PropTypes.string
  })
}

export default NewSpeiThirdAccountForm
