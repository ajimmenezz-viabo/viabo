import { FormProvider, InputAmount } from '@/shared/components/form'
import { useFormik } from 'formik'
import { Scrollbar } from '@/shared/components/scroll'
import { Slider as MuiSlider, Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Send } from '@mui/icons-material'
import { useEffect, useState } from 'react'

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
    setAutoWidth(getNumberLength * 24)
  }

  const handleBlur = () => {
    if (amount < 0 || amount === '') {
      setFieldValue('amount', 0)
    } else if (amount > MAX_AMOUNT) {
      setFieldValue('amount', MAX_AMOUNT)
    }
  }

  const handleSliderChange = (event, newValue) => {
    setFieldValue('amount', newValue)
  }

  useEffect(() => {
    const value = amount === '' ? 0 : amount
    setCurrentBalance(parseFloat(balance) - parseFloat(value))
    if (amount) {
      handleAutoWidth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ p: 3 }}>
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

          <MuiSlider
            value={typeof amount === 'number' ? amount : 0}
            valueLabelDisplay="auto"
            step={STEP}
            marks
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            onChange={handleSliderChange}
            disabled={isSubmitting}
          />

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
