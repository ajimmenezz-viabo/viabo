import { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { Add, ArrowForwardIos, Delete } from '@mui/icons-material'
import { Avatar, Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import { stringAvatar } from '@theme/utils'
import { FieldArray, useFormik } from 'formik'
import * as Yup from 'yup'

import { useCommerceDetailsCard } from '@/app/business/viabo-card/cards/store'
import { FormProvider, MaskedInput, RFSelect, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

function TransactionForm({ cards, setCurrentBalance, insufficient, isBinCard, onSuccess }) {
  const arrayHelpersRef = useRef(null)

  const crypto = window.crypto || window.msCrypto

  const array = new Uint32Array(1)

  const random = crypto.getRandomValues(array)[0]

  const [cardsToSelect, setCardsToSelect] = useState(cards)

  const selectedCards = useCommerceDetailsCard(state => state?.selectedCards)

  const RegisterSchema = Yup.object().shape({
    transactions: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required('La cantidad es requerida'),
        card: Yup.object().nullable().required('La tarjeta es requerida')
      })
    )
  })

  const formik = useFormik({
    initialValues: {
      transactions: (selectedCards?.length > 0 &&
        isBinCard &&
        selectedCards?.map(card => ({
          id: Math.random(),
          card: { value: card?.value, label: card?.label, ...card },
          amount: '',
          concept: ''
        }))) || [
        {
          id: random,
          card: null,
          amount: '',
          concept: ''
        }
      ]
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      if (insufficient) {
        return setSubmitting(false)
      }
      setSubmitting(false)
      return onSuccess(values)
    }
  })

  const { isSubmitting, setFieldValue, values, setSubmitting } = formik

  const loading = isSubmitting

  useEffect(() => {
    if (selectedCards && isBinCard) {
      const filterCards = selectedCards?.map(card => ({ ...card, isDisabled: true }))
      setCardsToSelect(filterCards)
    }
  }, [selectedCards, isBinCard])

  useEffect(() => {
    const totalAmount = values.transactions?.reduce((accumulator, currentObject) => {
      const amountValue = currentObject.amount.trim() !== '' ? parseFloat(currentObject.amount.replace(/,/g, '')) : 0

      if (!isNaN(amountValue)) {
        return accumulator + amountValue
      } else {
        return accumulator
      }
    }, 0)

    const currentBalance = totalAmount.toFixed(2)

    setCurrentBalance(currentBalance)
  }, [values.transactions])

  return (
    <>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Box sx={{ p: 3 }}>
            <Stack spacing={2} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} mb={3}>
              <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
                Transacciones:
              </Typography>
              <Stack spacing={2} justifyContent="flex-end" direction={{ xs: 'column', md: 'row' }} sx={{ width: 1 }} />
              {!isBinCard && (
                <Button
                  type="button"
                  size="small"
                  variant={'outlined'}
                  startIcon={<Add />}
                  disabled={loading}
                  onClick={() =>
                    arrayHelpersRef.current.push({
                      id: random,
                      card: null,
                      amount: '',
                      concept: ''
                    })
                  }
                  sx={{ flexShrink: 0 }}
                >
                  Nueva
                </Button>
              )}
            </Stack>

            <FieldArray
              name="transactions"
              render={arrayHelpers => {
                arrayHelpersRef.current = arrayHelpers
                return (
                  <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
                    {values?.transactions.map((item, index) => {
                      const card = `transactions[${index}].card`
                      const amount = `transactions[${index}].amount`
                      const concept = `transactions[${index}].concept`

                      return (
                        <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
                          {item?.card?.assignUser?.name && (
                            <Chip
                              avatar={<Avatar {...stringAvatar(item?.card?.assignUser?.name ?? '')} />}
                              label={item?.card?.assignUser?.name}
                            />
                          )}

                          <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={2}
                            sx={{ width: 1 }}
                            alignItems={'flex-start'}
                          >
                            <Typography variant={'overline'} color={'text.disabled'}>
                              {index + 1}
                            </Typography>
                            <RFSelect
                              name={card}
                              disabled={loading || isBinCard}
                              textFieldParams={{
                                placeholder: 'Seleccionar ...',
                                label: 'Tarjeta',
                                required: true,
                                size: 'small'
                              }}
                              options={cardsToSelect || []}
                              onChange={(e, value) => {
                                const filterCards = cardsToSelect?.map(card => {
                                  if (!value?.value && card.value === item?.card?.value) {
                                    return { ...card, isDisabled: false }
                                  }
                                  if (card.value === value?.value) {
                                    return { ...card, isDisabled: true }
                                  }

                                  if (card.value === item?.card?.value) {
                                    return { ...card, isDisabled: false }
                                  }
                                  return card
                                })

                                setCardsToSelect(filterCards)
                                setFieldValue(card, value)
                              }}
                              sx={{ width: { xs: 1, lg: 0.6 } }}
                            />
                            <RFTextField
                              sx={{ width: { xs: 1, lg: 0.4 } }}
                              size={'small'}
                              name={amount}
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
                                  value: item.amount,
                                  onAccept: value => {
                                    setFieldValue(amount, value)
                                  }
                                }
                              }}
                            />
                          </Stack>
                          <Stack sx={{ width: 1 }}>
                            <RFTextField
                              name={concept}
                              multiline
                              disabled={loading}
                              rows={2}
                              label={'Concepto'}
                              placeholder={'Transferencia ..'}
                            />
                          </Stack>
                          {index !== 0 && !isBinCard && (
                            <Button
                              size="small"
                              color="error"
                              disabled={loading}
                              startIcon={<Delete />}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Borrar
                            </Button>
                          )}
                        </Stack>
                      )
                    })}
                  </Stack>
                )
              }}
            />
            <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
            <Stack sx={{ pt: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                disabled={insufficient}
                fullWidth
                type="submit"
                startIcon={<ArrowForwardIos />}
              >
                Siguiente
              </Button>
            </Stack>
          </Box>
        </FormProvider>
      </Scrollbar>
    </>
  )
}

export default TransactionForm

TransactionForm.propTypes = {
  cards: PropTypes.any,
  insufficient: PropTypes.any,
  isBinCard: PropTypes.any,
  onSuccess: PropTypes.func,
  setCurrentBalance: PropTypes.func
}
