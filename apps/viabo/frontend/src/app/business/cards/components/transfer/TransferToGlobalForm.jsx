import { CreditCard, Send } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Chip, Stack } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CardTransactionsAdapter } from '@/app/business/cards/adapters'
import { useTransactionCard } from '@/app/business/cards/hooks'
import { FormProvider, MaskedInput, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

export function TransferToGlobalForm({
  balance,
  setCurrentBalance,
  insufficient,
  cardOriginId,
  setOpen,
  mainCard,
  setTransactionLoading
}) {
  const { transaction: transactionCard, isLoading: isSending } = useTransactionCard()

  const RegisterSchema = Yup.object().shape({
    amount: Yup.string().required('La cantidad es requerida')
  })

  const formik = useFormik({
    initialValues: {
      card: mainCard ? { label: mainCard?.label, value: mainCard?.id } : null,
      amount: '',
      concept: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (insufficient) {
        return setSubmitting(false)
      }
      const dataAdapted = CardTransactionsAdapter(cardOriginId, values, true)
      setTransactionLoading(true)
      transactionCard(dataAdapted, {
        onSuccess: () => {
          setSubmitting(false)
          setOpen(false)
          setTransactionLoading(false)
        },
        onError: () => {
          setSubmitting(false)
          setTransactionLoading(false)
        }
      })
    }
  })
  const { isSubmitting, setFieldValue, values } = formik

  const loading = isSubmitting || isSending

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack sx={{ p: 3 }} spacing={1}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ width: 1 }}
            alignItems={'flex-start'}
            justifyContent={'center'}
          >
            <Chip icon={<CreditCard />} label={mainCard?.cardNumberHidden} />
          </Stack>
          <Stack>
            <RFTextField
              sx={{ width: 1 }}
              size={'small'}
              name={'amount'}
              required={true}
              label={'Cantidad'}
              placeholder={'0.00'}
              disabled={loading}
              autoComplete={'off'}
              InputProps={{
                startAdornment: <span style={{ marginRight: '5px' }}>$</span>,
                inputComponent: MaskedInput,
                inputProps: {
                  mask: Number,
                  radix: '.',
                  thousandsSeparator: ',',
                  padFractionalZeros: true,
                  min: 0,
                  max: 50000,
                  scale: 2,
                  value: values.amount,
                  onAccept: value => {
                    setCurrentBalance(
                      (parseFloat(balance) - parseFloat(value === '' ? '0' : value.replace(/,/g, ''))).toFixed(2)
                    )
                    setFieldValue('amount', value)
                  }
                }
              }}
            />
          </Stack>
          <Stack sx={{ width: 1 }}>
            <RFTextField
              name={'concept'}
              multiline
              disabled={loading}
              rows={2}
              label={'Concepto'}
              placeholder={'Transferencia ..'}
            />
          </Stack>

          <Stack sx={{ px: 3, pt: 3 }}>
            <LoadingButton
              variant="contained"
              color="primary"
              loading={loading}
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
