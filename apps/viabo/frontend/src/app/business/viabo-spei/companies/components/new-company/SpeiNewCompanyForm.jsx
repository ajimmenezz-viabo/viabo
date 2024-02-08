import PropTypes from 'prop-types'

import { EmailOutlined, Phone } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { METHODS_NEW_COMPANY_USERS, SpeiNewCompanyAdapter } from '../../adapters'
import { useCreateNewSpeiCompany } from '../../hooks'

import { FormProvider, RFSelect, RFTextField } from '@/shared/components/form'

const SpeiNewCompanyForm = ({ adminCompanyUsers, onSuccess }) => {
  const { mutate, isLoading } = useCreateNewSpeiCompany()

  const ValidationSchema = Yup.object().shape({
    fiscalName: Yup.string().trim().required('Es necesario el nombre fiscal'),
    rfc: Yup.string().trim().required('Es necesario el rfc'),
    commercialName: Yup.string().trim().max(100, 'Máximo 100 caracteres'),
    adminUsers: Yup.array().when('method', {
      is: METHODS_NEW_COMPANY_USERS.ADMIN_USERS,
      then: schema => schema.min(1, 'Es necesario al menos un usuario administrador asignado a la empresa'),
      otherwise: schema => Yup.array()
    }),
    adminName: Yup.string()
      .trim()
      .when('method', {
        is: METHODS_NEW_COMPANY_USERS.NEW_ADMIN_USER,
        then: schema => schema.required('Es necesario el nombre del administrador'),
        otherwise: schema => Yup.string().trim()
      }),
    adminLastName: Yup.string()
      .trim()
      .when('method', {
        is: METHODS_NEW_COMPANY_USERS.NEW_ADMIN_USER,
        then: schema => schema.required('Es necesario los apellidos del administrador'),
        otherwise: schema => Yup.string().trim()
      }),
    adminEmail: Yup.string()
      .trim()
      .email('Ingrese un correo valido')
      .when('method', {
        is: METHODS_NEW_COMPANY_USERS.NEW_ADMIN_USER,
        then: schema => schema.required('Es necesario el correo del administrador'),
        otherwise: schema => Yup.string().trim().email('Ingrese un correo valido')
      }),
    adminPhone: Yup.string().trim()
  })

  const formik = useFormik({
    initialValues: {
      fiscalName: '',
      commercialName: '',
      rfc: '',
      method: METHODS_NEW_COMPANY_USERS.ADMIN_USERS,
      adminUsers: [],
      adminName: '',
      adminLastName: '',
      adminEmail: '',
      adminPhone: ''
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values, { setSubmitting, setFieldValue }) => {
      const company = SpeiNewCompanyAdapter(values)
      mutate(company, {
        onSuccess: () => {
          onSuccess()
          setSubmitting(false)
        },
        onError: () => {
          setSubmitting(false)
        }
      })
    }
  })

  const { isSubmitting, setFieldValue, values, setTouched } = formik

  const loading = isSubmitting || isLoading
  return (
    <FormProvider formik={formik}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre Fiscal
            <Box component={'span'} color={'error.main'} ml={0.5}>
              *
            </Box>
          </Typography>

          <RFTextField
            inputProps={{ maxLength: '18' }}
            required
            name={'fiscalName'}
            size={'small'}
            disabled={loading}
            placeholder={'Nombre Fiscal de la Empresa...'}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            RFC
            <Box component={'span'} color={'error.main'} ml={0.5}>
              *
            </Box>
          </Typography>

          <RFTextField required name={'rfc'} size={'small'} placeholder={'RFC de la Empresa...'} disabled={loading} />
        </Stack>

        <Stack spacing={1}>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            Nombre Comercial
          </Typography>

          <RFTextField
            name={'commercialName'}
            size={'small'}
            placeholder={'Nombre Comercial de la Empresa...'}
            disabled={loading}
          />
        </Stack>

        <Stack>
          <FormControl disabled={loading}>
            <FormLabel id="demo-row-radio-buttons-group-label">Seleccione al administrador de la empresa:</FormLabel>
            <RadioGroup
              value={values.method}
              onChange={e => {
                setFieldValue('method', e.target.value)
                setFieldValue('adminUsers', [])
                setFieldValue('adminName', '')
                setFieldValue('adminLastName', '')
                setFieldValue('adminEmail', '')
                setFieldValue('adminPhone', '')
                setTouched({}, false)
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={METHODS_NEW_COMPANY_USERS.ADMIN_USERS}
                control={<Radio />}
                label="Administrador de Empresa Existente"
              />
              <FormControlLabel
                value={METHODS_NEW_COMPANY_USERS.NEW_ADMIN_USER}
                control={<Radio />}
                label="Nuevo Administrador de Empresa"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        {values.method === METHODS_NEW_COMPANY_USERS.ADMIN_USERS ? (
          <Stack spacing={1}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Usuarios Administradores
              <Box component={'span'} color={'error.main'} ml={0.5}>
                *
              </Box>
            </Typography>

            <RFSelect
              multiple
              name={'adminUsers'}
              textFieldParams={{ placeholder: 'Seleccionar ...', size: 'small' }}
              options={adminCompanyUsers || []}
              disabled={loading}
            />
          </Stack>
        ) : (
          <>
            <Stack spacing={1}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Nombre (s)
                <Box component={'span'} color={'error.main'} ml={0.5}>
                  *
                </Box>
              </Typography>

              <RFTextField
                name={'adminName'}
                size={'small'}
                required
                placeholder={'Nombre Administrador de la Empresa...'}
                disabled={loading}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Apellido (s)
                <Box component={'span'} color={'error.main'} ml={0.5}>
                  *
                </Box>
              </Typography>

              <RFTextField
                name={'adminLastName'}
                size={'small'}
                required
                placeholder={'Apellidos del Administrador de la Empresa...'}
                disabled={loading}
              />
            </Stack>

            <Stack flexDirection={{ md: 'row' }} gap={2}>
              <Stack spacing={1} flex={1}>
                <Typography type={'email'} paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Correo
                  <Box component={'span'} color={'error.main'} ml={0.5}>
                    *
                  </Box>
                </Typography>

                <RFTextField
                  name={'adminEmail'}
                  size={'small'}
                  required
                  placeholder={'admin.company@domino.com...'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    )
                  }}
                  disabled={loading}
                />
              </Stack>

              <Stack spacing={1}>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Teléfono
                </Typography>
                <RFTextField
                  name={'adminPhone'}
                  type={'tel'}
                  size={'small'}
                  placeholder={'55 5555 5555'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    )
                  }}
                  disabled={loading}
                />
              </Stack>
            </Stack>
          </>
        )}

        <Stack sx={{ pt: 1 }}>
          <LoadingButton size={'large'} loading={loading} variant="contained" color="primary" fullWidth type="submit">
            Crear
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  )
}

SpeiNewCompanyForm.propTypes = {
  adminCompanyUsers: PropTypes.array,
  onSuccess: PropTypes.func
}

export default SpeiNewCompanyForm
