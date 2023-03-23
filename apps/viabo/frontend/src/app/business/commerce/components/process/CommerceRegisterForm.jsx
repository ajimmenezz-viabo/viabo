import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { EmailOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { commerceRegisterValidation } from '@/app/business/commerce/validations'
import { PROCESS_LIST } from '@/app/business/commerce/services'
import { MuiTelInput } from 'mui-tel-input'

function CommerceRegisterForm({ store }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { schema, initialValues } = commerceRegisterValidation()
  const { setActualProcess, setLastProcess } = store

  // const { mutate, isError, isLoading } = useRegisterCommerce()

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2))
      setActualProcess(PROCESS_LIST.VALIDATION_REGISTER_CODE)
      setLastProcess({ info: values, name: PROCESS_LIST.REGISTER })
    }
  })

  return (
    <>
      <Stack direction={'column'} width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Registrar Comercio
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Ingrese la información para iniciar con el proceos de registro.
        </Typography>
      </Stack>

      <Box width={1} mt={4} component={'form'} onSubmit={formik.handleSubmit}>
        <Stack spacing={3} direction={'column'}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <TextField
              fullWidth
              name="name"
              label="Nombre(s)"
              autoComplete="on"
              autoFocus
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              name="fullName"
              label="Apellidos"
              value={formik.values.fullName}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              onChange={formik.handleChange}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Correo"
              placeholder={'usuario@dominio.com'}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                )
              }}
            />

            <MuiTelInput
              name="phone"
              fullWidth
              langOfCountryName="es"
              preferredCountries={['MX', 'US']}
              continents={['NA', 'SA']}
              value={formik.values.phone || '+52'}
              onChange={(value, info) => {
                formik.setFieldValue('phone', value)
              }}
            />
          </Stack>

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Contraseña"
            placeholder={'********'}
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: 1 }}>
                  <IconButton edge="end" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmar Contraseña"
            placeholder={'********'}
            type={showConfirmPassword ? 'text' : 'password'}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: 1 }}>
                  <IconButton edge="end" onClick={() => setShowConfirmPassword(prev => !prev)}>
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Registrar
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default CommerceRegisterForm
