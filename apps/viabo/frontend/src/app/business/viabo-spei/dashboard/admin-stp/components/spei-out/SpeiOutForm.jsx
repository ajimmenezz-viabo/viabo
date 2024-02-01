import { useEffect, useRef, useState } from 'react'

import { Add, ArrowForwardIos, Delete } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { createAvatar } from '@theme/utils'
import { FieldArray, getIn, useFormik } from 'formik'
import * as Yup from 'yup'

import { Avatar } from '@/shared/components/avatar'
import { FormProvider, MaskedInput, RFSelect, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const SpeiOutForm = ({ accounts, setCurrentBalance, insufficient, onSuccess, initialValues }) => {
  const arrayHelpersRef = useRef(null)

  const crypto = window.crypto || window.msCrypto

  const array = new Uint32Array(1)

  const random = crypto.getRandomValues(array)[0]

  const [accountsToSelect, setAccountsToSelect] = useState(accounts)

  const RegisterSchema = Yup.object().shape({
    transactions: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string()
          .test('maxAmount', 'Monto máximo de transferencia $50,000', function (value) {
            return parseFloat(value?.replace(/,/g, '')) <= 50000
          })
          .required('La cantidad es requerida'),
        account: Yup.object().nullable().required('La cuenta es requerida')
      })
    )
  })

  const formik = useFormik({
    initialValues: initialValues || {
      transactions: [
        {
          id: random,
          account: null,
          amount: ''
        }
      ],
      concept: ''
    },
    validateOnChange: false,
    validationSchema: RegisterSchema,
    onSubmit: values => {
      if (insufficient) {
        return setSubmitting(false)
      }
      setSubmitting(false)
      return onSuccess(values)
    }
  })

  const { isSubmitting, setFieldValue, values, setSubmitting, errors, touched } = formik

  const loading = isSubmitting

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
      <Stack p={3} pb={0} gap={1} flexDirection={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'}>
        <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
          Transacciones:
        </Typography>
        <Stack spacing={2} justifyContent="flex-end" direction={{ xs: 'column', md: 'row' }} sx={{ width: 1 }} />
        <Stack direction={'row'} spacing={1}>
          <Button
            type="button"
            size="small"
            variant={'outlined'}
            startIcon={<Add />}
            disabled={loading}
            onClick={() =>
              arrayHelpersRef.current.push({
                id: random,
                account: null,
                amount: '',
                concept: ''
              })
            }
            sx={{ flexShrink: 0 }}
          >
            Agregar
          </Button>
        </Stack>
      </Stack>

      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Box sx={{ p: 3 }}>
            <FieldArray
              name="transactions"
              render={arrayHelpers => {
                arrayHelpersRef.current = arrayHelpers
                return (
                  <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
                    {values?.transactions.map((item, index) => {
                      const account = `transactions[${index}].account`
                      const errorFieldAccount = getIn(errors, account)
                      const amount = `transactions[${index}].amount`

                      return (
                        <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
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
                              name={account}
                              disabled={loading}
                              textFieldParams={{
                                placeholder: 'Seleccionar ...',
                                label: 'Cuentas',
                                required: true,
                                size: 'small'
                              }}
                              options={accountsToSelect || []}
                              onChange={(e, value) => {
                                const filterAccounts = accountsToSelect?.map(account => {
                                  if (!value?.value && account.value === item?.account?.value) {
                                    return { ...account, isDisabled: false }
                                  }
                                  if (account.value === value?.value) {
                                    return { ...account, isDisabled: true }
                                  }

                                  if (account.value === item?.account?.value) {
                                    return { ...account, isDisabled: false }
                                  }
                                  return account
                                })

                                setAccountsToSelect(filterAccounts)
                                setFieldValue(account, value)
                              }}
                              renderOption={(props, option) => {
                                const avatar = createAvatar(option?.label)

                                return (
                                  <Box component="li" {...props}>
                                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                      <Avatar
                                        src={option.label !== '' ? option.label : ''}
                                        alt={option.label}
                                        color={avatar?.color}
                                        sx={{ width: 25, height: 25, fontSize: 12 }}
                                      >
                                        {avatar?.name}
                                      </Avatar>
                                      <span>{option.label}</span>
                                    </Stack>
                                  </Box>
                                )
                              }}
                              renderInput={params => {
                                const avatar = createAvatar(params?.inputProps?.value || '')

                                return (
                                  <TextField
                                    {...params}
                                    size="small"
                                    placeholder="Seleccionar ..."
                                    label={'Beneficiario'}
                                    inputProps={{
                                      ...params.inputProps
                                    }}
                                    error={Boolean(errorFieldAccount)}
                                    helperText={errorFieldAccount || ''}
                                    required
                                    InputProps={{
                                      ...params.InputProps,
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <Avatar
                                            src={''}
                                            alt={params.inputProps?.value || 'avatar'}
                                            color={avatar?.color}
                                            sx={{ width: 25, height: 25, fontSize: 12 }}
                                          >
                                            {avatar?.name !== 'undefined' ? avatar?.name : null}
                                          </Avatar>
                                        </InputAdornment>
                                      )
                                    }}
                                  />
                                )
                              }}
                              sx={{ width: { xs: 1, lg: 0.6 } }}
                            />
                            <RFTextField
                              sx={{ width: { xs: 1, lg: 0.4 } }}
                              size={'small'}
                              name={amount}
                              required={true}
                              label={'Monto'}
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
                                  scale: 2,
                                  value: item.amount,
                                  onAccept: value => {
                                    setFieldValue(amount, value)
                                  }
                                }
                              }}
                            />
                            {index !== 0 && (
                              <IconButton
                                size="small"
                                color="error"
                                title="Borrar"
                                disabled={loading}
                                onClick={() => {
                                  const filterAccounts = accountsToSelect?.map(account => {
                                    if (account.value === item?.account?.value) {
                                      return { ...account, isDisabled: false }
                                    }
                                    return account
                                  })

                                  setAccountsToSelect(filterAccounts)
                                  arrayHelpers.remove(index)
                                }}
                              >
                                <Delete />
                              </IconButton>
                            )}
                          </Stack>
                        </Stack>
                      )
                    })}
                  </Stack>
                )
              }}
            />
            <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
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

export default SpeiOutForm
