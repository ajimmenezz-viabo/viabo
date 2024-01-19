import PropTypes from 'prop-types'

import { LoadingButton } from '@mui/lab'
import { Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { NewCauseAdapter } from '../adapters'
import { useCreateNewCause } from '../hooks'

import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const NewCauseForm = ({ profiles, onSuccess }) => {
  const { mutate, isLoading } = useCreateNewCause()

  const ValidationSchema = Yup.object().shape({
    cause: Yup.string().trim().max(100, 'Máximo 100 caracteres').required('Es necesario la causa'),
    description: Yup.string().trim().max(250, 'Máximo 250 caracteres'),
    requesterProfile: Yup.object().nullable().required('Es necesario el perfil solicitante'),
    receptorProfile: Yup.object()
      .nullable()
      .required('Es necesario el perfil receptor')
      .test('not-equal', 'El perfil receptor no puede ser igual al perfil solicitante', function (value) {
        const { requesterProfile } = this.parent
        return !value || !requesterProfile || value.id !== requesterProfile.id
      })
      .test(
        'higher-level',
        'El perfil receptor debe tener un nivel más alto que el perfil solicitante',
        function (value) {
          const { requesterProfile } = this.parent
          return !value || (requesterProfile && value?.level > requesterProfile?.level)
        }
      ),
    color: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      cause: '',
      description: '',
      requesterProfile: null,
      receptorProfile: null,
      color: ''
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values, { setSubmitting, setFieldValue }) => {
      const cause = NewCauseAdapter(values)
      mutate(cause, {
        onSuccess: () => {
          setSubmitting(false)
          onSuccess()
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting } = formik

  const loading = isLoading || isSubmitting

  return (
    <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
      <FormProvider formik={formik}>
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Causa *
            </Typography>

            <RFTextField size={'small'} name={'cause'} placeholder={'Nueva causa...'} disabled={loading} />
          </Stack>

          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Descripción
            </Typography>

            <RFTextField
              size={'small'}
              name={'description'}
              multiline
              rows={2}
              disabled={loading}
              placeholder={'Descripción de la causa...'}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Perfil Solicitante *
            </Typography>
            <RFSelect
              size={'small'}
              name={'requesterProfile'}
              disabled={loading}
              options={profiles || []}
              textFieldParams={{
                placeholder: 'Seleccionar ...',
                size: 'small'
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Perfil Receptor *
            </Typography>
            <RFSelect
              size={'small'}
              name={'receptorProfile'}
              disabled={loading}
              options={profiles || []}
              textFieldParams={{
                placeholder: 'Seleccionar ...',
                size: 'small'
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography m={0} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Color
            </Typography>
            <RFTextField size={'small'} type="color" name="color" disabled={loading} />
          </Stack>

          <Stack sx={{ pt: 1 }}>
            <LoadingButton size={'large'} loading={loading} variant="contained" color="primary" fullWidth type="submit">
              Crear
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Scrollbar>
  )
}

NewCauseForm.propTypes = {
  onSuccess: PropTypes.func,
  profiles: PropTypes.array
}

export default NewCauseForm
