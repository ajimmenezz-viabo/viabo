import PropTypes from 'prop-types'

import { LoadingButton } from '@mui/lab'
import { Box, Divider, InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CommerceCommissionsAdapter } from '../../adapters'
import { useUpdateCommerceCommissions } from '../../hooks'

import { DetailsCardLayout } from '@/app/management/commerces/components/details/DetailsCardLayout'
import { FormProvider, RFTextField } from '@/shared/components/form'
import { CarnetLogo, MasterCardLogo } from '@/shared/components/images'

Commissions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  expanded: PropTypes.string.isRequired,
  commerce: PropTypes.object.isRequired
}

const MIN_AMOUNT = 0
const MAX_AMOUNT = 100
const STEP = 0.1

export function Commissions({ handleChange, expanded, commerce }) {
  const { commissions } = commerce
  const { mutate, isLoading: isUpdatingCommissions } = useUpdateCommerceCommissions()

  const percentageValidation = Yup.number()
    .min(0, 'El valor minimo es 0')
    .max(100, 'El valor maximo es 100')
    .required('El valor es requerido')

  const registerValidation = Yup.object({
    speiInCarnet: percentageValidation,
    speiOutCarnet: percentageValidation,
    speiInMasterCard: percentageValidation,
    speiOutMasterCard: percentageValidation,
    viaboPay: percentageValidation
  })

  const formik = useFormik({
    initialValues: {
      speiInCarnet: commissions?.speiInCarnet || 0,
      speiOutCarnet: commissions?.speiOutCarnet || 0,
      speiInMasterCard: commissions?.speiInMasterCard || 0,
      speiOutMasterCard: commissions?.speiOutMasterCard || 0,
      viaboPay: commissions?.viaboPay || 0
    },
    validationSchema: registerValidation,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      const data = CommerceCommissionsAdapter(values, commerce?.id)
      mutate(data, {
        onSuccess: () => {
          setSubmitting(false)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting } = formik

  const isLoading = isSubmitting || isUpdatingCommissions

  return (
    <DetailsCardLayout
      headerText={'Comisiones'}
      handleChange={handleChange}
      expanded={expanded}
      expandedText={'commissions'}
      available={Boolean(commissions?.available)}
      showIfNotAvailable={true}
    >
      <FormProvider formik={formik}>
        <Stack mt={2} gap={3} flexDirection={'column'}>
          <Stack gap={2}>
            <Typography variant="subtitle2">SPEI</Typography>
            <Stack gap={3} flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} width={1}>
              <CarnetLogo />

              <Stack spacing={1} flexGrow={1}>
                <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Entrantes:
                </Typography>
                <RFTextField
                  name="speiInCarnet"
                  placeholder="0.0"
                  autoFocus
                  focused
                  size={'small'}
                  type="number"
                  required={true}
                  disabled={isLoading}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>
                  }}
                  inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
                />
              </Stack>

              <Stack spacing={1} flexGrow={1}>
                <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Salientes:
                </Typography>
                <RFTextField
                  name="speiOutCarnet"
                  placeholder="0"
                  type="number"
                  required={true}
                  size={'small'}
                  disabled={isLoading}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>
                  }}
                  inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
                />
              </Stack>
            </Stack>

            <Stack gap={3} flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'} width={1}>
              <MasterCardLogo />

              <Stack spacing={1} flexGrow={1}>
                <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Entrantes:
                </Typography>
                <RFTextField
                  name="speiInMasterCard"
                  placeholder="0"
                  required={true}
                  size={'small'}
                  type="number"
                  disabled={isLoading}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>
                  }}
                  inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
                />
              </Stack>

              <Stack spacing={1} flexGrow={1}>
                <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Salientes:
                </Typography>
                <RFTextField
                  name="speiOutMasterCard"
                  placeholder="0"
                  required={true}
                  type="number"
                  size={'small'}
                  disabled={isLoading}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">%</InputAdornment>
                  }}
                  inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Divider flexItem sx={{ borderStyle: 'dashed' }} />
          <Stack gap={2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="subtitle2">Viabo Pay</Typography>
            <RFTextField
              name="viaboPay"
              placeholder="0"
              size={'small'}
              type="number"
              required={true}
              disabled={isLoading}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment: <InputAdornment position="start">%</InputAdornment>
              }}
              inputProps={{ inputMode: 'numeric', min: MIN_AMOUNT, max: MAX_AMOUNT, step: STEP }}
            />
          </Stack>
          <Box display={'flex'} justifyContent={'center'}>
            <LoadingButton loading={isLoading} variant={'contained'} type="submit">
              Guardar
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </DetailsCardLayout>
  )
}
