import { useEffect, useState } from 'react'

import { Send } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'

import { FormProvider, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const MIN_AMOUNT = 0
const MAX_AMOUNT = 2000
const STEP = 100

export function PaymentForm({ balance, setCurrentBalance, insufficient, setShowQR }) {
  const [autoWidth, setAutoWidth] = useState(30)

  const formik = useFormik({
    initialValues: {
      amount: 0
    },
    onSubmit: values => {
      setTimeout(() => {
        setShowQR(true)
      }, 3000)
    }
  })

  const { errors, touched, isSubmitting, setFieldValue, values, setSubmitting } = formik

  const { amount } = values

  const handleInputChange = event => {
    const value = event.target.value === '' ? '' : Number(event.target.value)
    setFieldValue('amount', value)
  }

  const handleBlur = () => {
    if (amount < 0 || amount === '') {
      setFieldValue('amount', 0)
    } else if (amount > MAX_AMOUNT) {
      setFieldValue('amount', MAX_AMOUNT)
    }
  }

  useEffect(() => {
    const value = amount === '' ? 0 : amount
    setCurrentBalance(parseFloat(balance) - parseFloat(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Ingresa La Cantidad (Máximo ${MAX_AMOUNT}.00)
          </Typography>
          <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'center'}>
            <RFTextField
              fullWidth
              placeholder={'$0.00'}
              name={'amount'}
              type={'number'}
              onChange={handleInputChange}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
            />
            <Typography variant="caption">MXN</Typography>
          </Stack>

          <Stack sx={{ pt: 3 }}>
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              color="primary"
              disabled={amount === 0 || insufficient}
              fullWidth
              type="submit"
              startIcon={<Send />}
            >
              Enviar
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Scrollbar>
  )
}
