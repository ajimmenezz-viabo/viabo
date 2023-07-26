import { useState } from 'react'

import { Check, Email, Sms } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { LoadingButton } from '@mui/lab'
import { Button, Stack, Typography } from '@mui/material'
import { stringToColor } from '@theme/utils'
import { useFormik } from 'formik'
import { MuiChipsInput } from 'mui-chips-input'
import * as Yup from 'yup'

import { CreateFundingOrderAdapter } from '@/app/business/cards/adapters'
import { useCreateFundingOrder } from '@/app/business/cards/hooks'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { RightPanel } from '@/app/shared/components'
import { FormProvider, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'
import { copyToClipboard, fCurrency } from '@/shared/utils'

const MIN_AMOUNT = 0
const MAX_AMOUNT = 1000000
const STEP = 10

const SHARED_TYPES = {
  EMAIL: 'email',
  SMS: 'sms'
}

export function FundingOrder() {
  const openFundingOrder = useCommerceDetailsCard(state => state.openFundingOrder)
  const resetFundingOrder = useCommerceDetailsCard(state => state.resetFundingOrder)
  const fundingCard = useCommerceDetailsCard(state => state.fundingCard)

  const { mutate: fundingOrder, isLoading: isCreatingFundingOrder, data, isSuccess } = useCreateFundingOrder()

  const [step, setStep] = useState(1)
  const [sharedType, setSharedType] = useState(null)
  const [copied, setCopied] = useState(false)
  const [chipInputValue, setChipInputValue] = useState('')

  const SharedSchema = Yup.object().shape({
    emails: Yup.array()
      .of(Yup.string().email('Deben ser direcciones de correo válidos'))
      .min(1, 'Las correos son requeridos')
  })

  const formik = useFormik({
    initialValues: {
      amount: '',
      emails: []
    },
    validationSchema: SharedSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const data = CreateFundingOrderAdapter(values, fundingCard)
      fundingOrder(data, {
        onSuccess: () => {
          setSubmitting(false)
          setStep(3)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, values, touched, errors, setFieldValue, resetForm } = formik
  const { amount } = values
  const loading = isSubmitting || isCreatingFundingOrder

  const handleClose = () => {
    resetFundingOrder()
    resetForm()
    setStep(1)
  }

  const handleChipInputChange = value => {
    if (value.trim().length > 0 && value.includes(' ')) {
      const emailArray = value.trim().split(/[, ]+/)
      setFieldValue('emails', [...values.emails, ...emailArray])
      setChipInputValue('')
    } else {
      setChipInputValue(value)
    }
  }

  const handleBlur = event => {
    const value = event.target.value?.trim()
    if (value.length > 0) {
      setFieldValue('emails', [...values.emails, value])
      setChipInputValue('')
    }
  }

  return (
    <RightPanel open={openFundingOrder} handleClose={handleClose} title={'Orden de Fondeo'}>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={3} sx={{ p: 3 }}>
            {step === 1 && (
              <>
                <Stack spacing={3}>
                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                    Ingresa La Cantidad
                  </Typography>
                  <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'center'}>
                    <RFTextField
                      fullWidth
                      placeholder={'$0.00'}
                      name={'amount'}
                      type={'number'}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, step: STEP }}
                    />
                    <Typography variant="caption">MXN</Typography>
                  </Stack>
                </Stack>
                <Button
                  disabled={amount <= 0}
                  onClick={() => setStep(2)}
                  fullWidth
                  color={'primary'}
                  variant={'outlined'}
                >
                  Siguiente
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <Stack justifyContent={'center'} alignItems={'center'}>
                  <Typography variant="h3">{fCurrency(amount)}</Typography>
                </Stack>

                <MuiChipsInput
                  disableEdition
                  name={'emails'}
                  fullWidth
                  disabled={loading}
                  placeholder="Escribe los correos para compartir"
                  value={values?.emails || []}
                  helperText={touched.emails && errors.emails ? errors.emails : ''}
                  error={Boolean(touched.emails && errors.emails)}
                  onChange={value => {
                    setFieldValue('emails', value)
                  }}
                  renderChip={(Component, key, props) => (
                    <Component
                      {...props}
                      variant={'filled'}
                      sx={{
                        fontWeight: 'bolder',
                        backgroundColor: stringToColor(props?.label || ''),
                        color: 'white',
                        '& .MuiChip-deleteIcon': { color: 'white' }
                      }}
                      key={key}
                    />
                  )}
                  onBlur={handleBlur}
                  onInputChange={handleChipInputChange}
                  inputValue={chipInputValue}
                />

                <LoadingButton
                  variant="contained"
                  color="primary"
                  loading={loading}
                  disabled={amount <= 0}
                  fullWidth
                  type="submit"
                  onClick={() => {
                    setSharedType(SHARED_TYPES.EMAIL)
                  }}
                  startIcon={<Email />}
                >
                  Enviar Correo
                </LoadingButton>

                <LoadingButton
                  variant="contained"
                  color="secondary"
                  loading={loading}
                  disabled={true}
                  fullWidth
                  onClick={() => {
                    setSharedType(SHARED_TYPES.SMS)
                  }}
                  startIcon={<Sms />}
                >
                  Enviar SMS
                </LoadingButton>

                {!loading && (
                  <Button
                    onClick={() => {
                      setStep(1)
                    }}
                    fullWidth
                    type="submit"
                    variant="outlined"
                    color="primary"
                  >
                    Cancelar
                  </Button>
                )}
              </>
            )}

            {step === 3 && (
              <>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
                  <Typography variant="h3">{fCurrency(amount)}</Typography>
                  <Typography variant="h6">{`Orden de Fondeo: ${data?.reference}`}</Typography>
                </Stack>

                <Button
                  color={copied ? 'success' : 'inherit'}
                  startIcon={copied ? <Check sx={{ color: 'success' }} /> : <LinkIcon />}
                  onClick={() => {
                    setCopied(true)
                    copyToClipboard(`${window.location.host}/orden-fondeo/${data?.reference}`)
                    setTimeout(() => {
                      setCopied(false)
                    }, 1000)
                  }}
                  fullWidth
                >
                  Copiar Liga
                </Button>
              </>
            )}
          </Stack>
        </FormProvider>
      </Scrollbar>
    </RightPanel>
  )
}
