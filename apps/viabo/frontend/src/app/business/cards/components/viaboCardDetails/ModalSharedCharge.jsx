import { Modal } from '@/shared/components/modals'
import { FormProvider } from '@/shared/components/form'
import { Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MuiChipsInput } from 'mui-chips-input'
import { useSharedChargeKeys } from '@/app/business/cards/hooks'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { SharedChargeKeysCardsAdapter } from '@/app/business/cards/adapters'

export function ModalSharedCharge({ open, onClose }) {
  const { mutate: shared, isLoading } = useSharedChargeKeys()

  const card = useCommerceDetailsCard(state => state.card)

  const SharedSchema = Yup.object().shape({
    emails: Yup.array()
      .of(Yup.string().email('Deben ser direcciones de correo válidos'))
      .min(1, 'Las correos son requeridos')
  })

  const formik = useFormik({
    initialValues: {
      emails: []
    },
    validationSchema: SharedSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const data = SharedChargeKeysCardsAdapter(card, values)
      shared(data, {
        onSuccess: () => {
          setSubmitting(false)
          onClose()
          resetForm()
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, handleSubmit, values, touched, errors, setFieldValue, resetForm } = formik
  const loading = isSubmitting || isLoading

  return (
    <Modal
      onClose={() => {
        onClose()
        resetForm()
      }}
      onSuccess={handleSubmit}
      isSubmitting={loading}
      fullWidth
      maxWidth="sm"
      scrollType="body"
      title={'Compartir'}
      textButtonSuccess="Enviar"
      open={open}
    >
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ py: 3 }}>
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
        </Stack>
      </FormProvider>
    </Modal>
  )
}
