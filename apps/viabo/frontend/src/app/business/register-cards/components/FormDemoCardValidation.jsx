import { Box, InputAdornment, Stack, Typography } from '@mui/material'
import { FormProvider, MaskedInput, RFTextField } from '@/shared/components/form'
import { CardMembershipTwoTone, CreditCard } from '@mui/icons-material'
import { Scrollbar } from '@/shared/components/scroll'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCardUserAssign } from '@/app/business/register-cards/store'
import { LoadingButton } from '@mui/lab'
import creditCard from '@/shared/assets/img/credit-card.svg'
import { useValidateDemoCard } from '@/app/business/register-cards/hooks'
import { CARD_ASSIGN_PROCESS_LIST } from '@/app/business/register-cards/services'
import { useEffect } from 'react'

export default function FormDemoCardValidation() {
  const setToken = useCardUserAssign(state => state.setToken)
  const setStep = useCardUserAssign(state => state.setStepAssignRegister)
  const setCard = useCardUserAssign(state => state.setCard)
  const resetState = useCardUserAssign(state => state.resetState)

  const { mutate: validateDemoCard, isLoading: validatingCard } = useValidateDemoCard()

  const CardSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .transform((value, originalValue) => originalValue.replace(/\s/g, ''))
      .min(8, 'Debe contener los últimos 8 dígitos')
      .required('El número de la tarjeta es requerido')
  })

  const formik = useFormik({
    initialValues: {
      cardNumber: ''
    },
    validationSchema: CardSchema,
    onSubmit: (values, { setSubmitting }) => {
      validateDemoCard(
        { cardNumber: values?.cardNumber?.replace(/\s+/g, '') },
        {
          onSuccess: data => {
            const { token, ...card } = data
            if (token) {
              setToken(token)
              setCard(card)
              setStep(CARD_ASSIGN_PROCESS_LIST.USER_REGISTER)
            }
            setSubmitting(false)
          },
          onError: () => {
            setSubmitting(false)
          }
        }
      )
    }
  })

  const { isSubmitting, values, setFieldValue, handleSubmit } = formik

  const loading = isSubmitting || validatingCard

  useEffect(() => {
    resetState()
  }, [])

  return (
    <Stack
      sx={{
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <Stack direction="column" width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Registrar Tarjeta
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Ingrese los 8 últimos dígitos de la tarjeta para iniciar con el proceso de asociación de la misma.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 4
          }}
        >
          <img className="animate__animated animate__pulse" src={creditCard} width="25%" alt="Sent Mail" />
        </Box>
      </Stack>

      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={2} p={3}>
            <RFTextField
              name={'cardNumber'}
              required={true}
              placeholder={'9717 8968'}
              fullWidth
              size={'small'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCard />
                  </InputAdornment>
                ),
                inputComponent: MaskedInput,
                inputProps: {
                  mask: '0000 0000',
                  value: values.cardNumber,
                  onAccept: value => {
                    setFieldValue('cardNumber', value)
                  }
                }
              }}
              disabled={loading}
            />
          </Stack>
        </FormProvider>
      </Scrollbar>

      <Stack spacing={3} px={3}>
        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={<CardMembershipTwoTone />}
        >
          Validar
        </LoadingButton>
      </Stack>
    </Stack>
  )
}
