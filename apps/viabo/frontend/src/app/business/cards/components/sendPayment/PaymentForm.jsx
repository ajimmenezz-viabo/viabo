import { FormProvider } from '@/shared/components/form'
import { useFormik } from 'formik'
import { Scrollbar } from '@/shared/components/scroll'
import { Input, Slider as MuiSlider, Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Send } from '@mui/icons-material'
import { useEffect, useState } from 'react'

const MIN_AMOUNT = 0
const MAX_AMOUNT = 2000
const STEP = 100

export function PaymentForm({ balance, setCurrentBalance, insufficient }) {
  const [autoWidth, setAutoWidth] = useState(24)

  const formik = useFormik({
    initialValues: {
      amount: 0
    },
    onSubmit: values => {}
  })

  const { errors, touched, isSubmitting, setFieldValue, values, setSubmitting } = formik

  const amount = values.amount

  const handleInputChange = event => {
    const value = event.target.value === '' ? '' : Number(event.target.value)
    setFieldValue('amount', value)
  }

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length
    setAutoWidth(getNumberLength * 22)
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

          <InputAmount onBlur={handleBlur} onChange={handleInputChange} autoWidth={autoWidth} amount={amount} />

          <MuiSlider
            value={typeof amount === 'number' ? amount : 0}
            valueLabelDisplay="auto"
            step={STEP}
            marks
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            onChange={handleSliderChange}
          />

          <Stack sx={{ pt: 3 }}>
            <LoadingButton
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

function InputAmount({ autoWidth, amount, onBlur, onChange, sx, ...other }) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={sx}>
      <Typography variant="h5">$</Typography>
      <Input
        disableUnderline
        value={amount}
        onChange={onChange}
        size={'small'}
        onBlur={onBlur}
        inputProps={{ step: STEP, min: MIN_AMOUNT, max: MAX_AMOUNT, type: 'number' }}
        sx={{
          typography: 'h3',
          '& input': {
            p: 0,
            textAlign: 'center',
            width: autoWidth,
            '&[type=number]': {
              MozAppearance: 'textfield',
              '&::-webkit-outer-spin-button': {
                margin: 0,
                WebkitAppearance: 'none'
              },
              '&::-webkit-inner-spin-button': {
                margin: 0,
                WebkitAppearance: 'none'
              }
            }
          }
        }}
        {...other}
      />
    </Stack>
  )
}
