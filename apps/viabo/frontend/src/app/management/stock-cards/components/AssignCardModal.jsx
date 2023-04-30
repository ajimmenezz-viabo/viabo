import { useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Stack, Typography } from '@mui/material'
import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'
import { useGetQueryData } from '@/shared/hooks'
import { Modal } from '@/shared/components/modals'
import { CardNumber } from '@/app/shared/components/card'
import { useAssignCardStore } from '@/app/management/stock-cards/store'
import { MANAGEMENT_STOCK_CARDS_KEYS } from '@/app/management/stock-cards/adapters'
import { useAssignCards } from '@/app/management/stock-cards/hooks/useAssignCards'
import { AssignCardsAdapter } from '@/app/management/stock-cards/adapters/assignCardsAdapter'

export default function AssignCardModal() {
  const setOpenAssignCards = useAssignCardStore(state => state.setOpen)
  const setCard = useAssignCardStore(state => state.setCard)
  const card = useAssignCardStore(state => state.card)
  const commerces = useGetQueryData([MANAGEMENT_STOCK_CARDS_KEYS.AFFILIATED_COMMERCES_LIST]) || []
  const cardsList = useGetQueryData([MANAGEMENT_STOCK_CARDS_KEYS.STOCK_CARDS_LIST]) || []

  const { mutate: assign, isLoading: isAssigning } = useAssignCards()

  const schema = useMemo(() => {
    const initialSchema = {
      commerce: Yup.object().nullable().required('El comercio es requerido')
    }
    if (card) {
      return {
        ...initialSchema
      }
    }
    return {
      ...initialSchema,
      numberOfCards: Yup.number()
        .min(1, 'Al menos debe existir una tarjeta')
        .max(cardsList.length, `La cantidad maxima de tarjetas son: ${cardsList.length} `)
        .required('El número de tarjetas es requerido')
    }
  }, [card, cardsList])

  const initial = useMemo(() => {
    if (card) {
      return {
        cardId: card?.id,
        commerce: null
      }
    }
    return {
      numberOfCards: 1,
      commerce: null
    }
  }, [card])

  const formik = useFormik({
    initialValues: initial,
    validationSchema: Yup.object().shape(schema),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values)
      const assignData = AssignCardsAdapter(values)
      assign(assignData, {
        onSuccess: () => {
          setOpenAssignCards(false)
          setCard(null)
          setSubmitting(false)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, handleSubmit, resetForm } = formik

  const isLoading = isSubmitting || isAssigning
  return (
    <Modal
      onClose={() => {
        setOpenAssignCards(false)
        setCard(null)
      }}
      onSuccess={handleSubmit}
      isSubmitting={isLoading}
      fullWidth
      scrollType="body"
      title={!card ? 'Asignar Tarjetas' : 'Asignar Tarjeta'}
      textButtonSuccess="Guardar"
      open={true}
    >
      <FormProvider formik={formik}>
        <Stack spacing={3} sx={{ py: 3 }}>
          {!card ? (
            <Stack>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Número de tarjetas:
              </Typography>
              <RFTextField
                name={'numberOfCards'}
                placeholder={'1'}
                type={'number'}
                inputProps={{ inputMode: 'numeric', min: '1' }}
                disabled={isLoading}
              />
            </Stack>
          ) : (
            <CardNumber card={card} />
          )}
          <Stack>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Comercio:
            </Typography>
            <RFSelect
              name={'commerce'}
              textFieldParams={{ placeholder: 'Seleccionar ...', required: true }}
              options={commerces}
              disabled={isLoading}
            />
          </Stack>
        </Stack>
      </FormProvider>
    </Modal>
  )
}
