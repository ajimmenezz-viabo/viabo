import { useEffect, useMemo, useState } from 'react'

import { WarningAmberOutlined } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Link, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { MuiTelInput } from 'mui-tel-input'
import * as Yup from 'yup'

import { useUpdateUserInfo } from '../../hooks/useUpdateUserInfo'
import { useAssignUserCard } from '../../store'

import { FormProvider, RFTextField } from '@/shared/components/form'
import { ModalAlert } from '@/shared/components/modals'
import { Scrollbar } from '@/shared/components/scroll'
import { createAvatar } from '@/theme/utils'

const CardUserInfoForm = () => {
  const cardInfo = useAssignUserCard(state => state.cardInfo)
  const { mutate, isLoading } = useUpdateUserInfo()

  const [updatedName, setUpdatedName] = useState(cardInfo?.assignUser?.name || '')
  const [openAlertConfirm, setOpenAlertConfirm] = useState(false)

  const registerValidation = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    phone: Yup.string().test(
      'longitud',
      'El teléfono es muy corto',
      value => !(value && value.replace(/[\s+]/g, '').length < 10)
    )
  })

  const formik = useFormik({
    initialValues: {
      name: cardInfo?.assignUser?.name || '',
      phone: cardInfo?.assignUser?.phone || ''
    },
    enableReinitialize: true,
    validationSchema: registerValidation,
    onSubmit: (values, { setSubmitting }) => {
      mutate(values, {
        onSuccess: () => {
          setOpenAlertConfirm(false)
        },
        onError: error => {}
      })
      setSubmitting(false)
    }
  })

  const { values, setFieldValue, touched, errors, isSubmitting, handleSubmit } = formik

  const loading = isLoading || isSubmitting

  useEffect(() => {
    if (values.name) {
      setUpdatedName(values.name)
    } else {
      setUpdatedName(cardInfo?.assignUser?.name)
    }
  }, [values.name])

  const avatar = useMemo(() => createAvatar(updatedName), [updatedName])

  return (
    <>
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        <FormProvider formik={formik}>
          <Stack spacing={2} sx={{ p: 3 }}>
            <Stack spacing={0.5}>
              <Stack justifyContent={'center'} alignItems={'center'} spacing={1}>
                <Avatar
                  variant={'rounded'}
                  src={''}
                  color={'warning'}
                  alt={updatedName}
                  sx={{
                    backgroundColor: theme => theme.palette[avatar.color]?.main,
                    width: 80,
                    height: 80,
                    color: 'white'
                  }}
                >
                  {avatar.name}
                </Avatar>
                <Typography component={Link} href={`mailto:${cardInfo?.assignUser?.email}`} variant="body2">
                  {cardInfo?.assignUser?.email ?? '-'}
                </Typography>
                <Stack spacing={0.5} alignItems={'center'}>
                  <Typography paragraph variant="body2" fontStyle={'italic'} sx={{ color: 'text.disabled' }}>
                    Último Inicio de Sesión:
                  </Typography>

                  <Typography paragraph variant="body2" sx={{ color: 'text.disabled' }}>
                    {cardInfo?.assignUser?.lastLogged ?? '🚀'}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={0.5}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Nombre
              </Typography>
              <RFTextField name={'name'} required={true} placeholder={'Usuario'} disabled={loading} />
            </Stack>

            <Stack spacing={0.5}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Teléfono
              </Typography>
              <MuiTelInput
                name="phone"
                fullWidth
                langOfCountryName="es"
                preferredCountries={['MX', 'US']}
                continents={['NA', 'SA']}
                value={values.phone || '+52'}
                disabled={loading}
                onChange={(value, info) => {
                  setFieldValue('phone', value)
                }}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Stack>
            <Stack pt={2}>
              <LoadingButton
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                loading={isLoading}
                onClick={() => {
                  setOpenAlertConfirm(true)
                }}
              >
                Actualizar
              </LoadingButton>
            </Stack>
          </Stack>
        </FormProvider>
      </Scrollbar>
      {openAlertConfirm && (
        <ModalAlert
          title={'Actualizar Usuario'}
          typeAlert="warning"
          textButtonSuccess="Si, estoy de acuerdo"
          onClose={() => {
            setOpenAlertConfirm(false)
          }}
          open={openAlertConfirm}
          isSubmitting={false}
          description={
            <Stack spacing={2}>
              <Typography>¿Está seguro de actualizar la información de este usuario?'</Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <WarningAmberOutlined />
                <Stack>
                  <Typography variant={'caption'}>
                    Se enviara una notificación via correo electrónico con los cambios realizados
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          }
          onSuccess={() => {
            setOpenAlertConfirm(false)
            handleSubmit()
          }}
          fullWidth
          maxWidth="xs"
        />
      )}
    </>
  )
}

export default CardUserInfoForm
