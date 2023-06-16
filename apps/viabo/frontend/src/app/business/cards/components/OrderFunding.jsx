import { RightPanel } from '@/app/shared/components'
import { Scrollbar } from '@/shared/components/scroll'
import { FormProvider, InputAmount } from '@/shared/components/form'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Stack, Typography } from '@mui/material'
import { MuiChipsInput } from 'mui-chips-input'
import { LoadingButton } from '@mui/lab'
import { Send } from '@mui/icons-material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const MIN_AMOUNT = 0
const MAX_AMOUNT = 1000000
const STEP = 100

export function OrderFunding() {
  const [autoWidth, setAutoWidth] = useState(20)
  const openFundingOrder = useCommerceDetailsCard(state => state.openFundingOrder)
  const resetFundingOrder = useCommerceDetailsCard(state => state.resetFundingOrder)

  const SharedSchema = Yup.object().shape({
    emails: Yup.array()
      .of(Yup.string().email('Deben ser direcciones de correo válidos'))
      .min(1, 'Las correos son requeridos')
  })

  const formik = useFormik({
    initialValues: {
      amount: 0,
      emails: []
    },
    validationSchema: SharedSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        toast.success('Se envio la orden de fondeo con éxito')
        setSubmitting(false)
        handleClose()
      }, 3000)
    }
  })

  const { isSubmitting, values, touched, errors, setFieldValue, resetForm } = formik
  const { amount } = values
  const loading = isSubmitting

  const handleInputClick = () => {
    if (amount === 0) {
      setFieldValue('amount', '')
    }
  }

  const handleInputChange = event => {
    const value = event.target.value === '' ? '' : Number(event.target.value)
    setFieldValue('amount', value)
  }

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length
    setAutoWidth(getNumberLength * 22)
  }

  const handleBlur = () => {
    if (amount < 0 || !amount) {
      setFieldValue('amount', 0)
    } else if (amount > MAX_AMOUNT) {
      setFieldValue('amount', MAX_AMOUNT)
    }
  }

  useEffect(() => {
    handleAutoWidth()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  const handleClose = () => {
    resetFundingOrder()
    resetForm()
  }

  return (
    <RightPanel open={openFundingOrder} handleClose={handleClose} title={'Orden de Fondeo'}>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                Ingresa Cantidad
              </Typography>
              <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'center'}>
                <InputAmount
                  disabled={isSubmitting}
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  autoWidth={autoWidth}
                  amount={amount}
                  step={STEP}
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                />
                <Typography variant="caption">MXN</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Correos Electronicos:
              </Typography>
              <MuiChipsInput
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
              />
            </Stack>
            <LoadingButton
              variant="contained"
              color="primary"
              loading={loading}
              disabled={amount <= 0}
              fullWidth
              type="submit"
              startIcon={<Send />}
            >
              Enviar
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Scrollbar>
    </RightPanel>
  )
}
