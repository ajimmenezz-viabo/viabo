import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Avatar, Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { EmailOutlined, PhoneOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export const FormTradeRegister = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const registerValidation = Yup.object({
    name: Yup.string('Ingresa tu nombre').required('El nombre es requerido'),
    fullName: Yup.string('Ingresa tus apellidos').required('Los apellidos son requeridos'),
    email: Yup.string('Ingresa tu correo').email('Ingresa un correo valido').required('El correo es requerido'),
    password: Yup.string('Ingresa tu contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .required('La contraseña es requerida')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registerValidation,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Box
      sx={{
        minHeight: '600px',
        height: { xs: '100vh', sm: 'calc(100vh - 200px)' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        mx: 5,
        zIndex: 1
      }}
      className="animate__animated animate__fadeIn"
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon sx={{ color: 'text.primary' }} />
      </Avatar>
      <Typography component="h2">VIABO</Typography>

      <Box width={1} mt={3} component={'form'} onSubmit={formik.handleSubmit}>
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

            <TextField
              fullWidth
              name="phone"
              type="tel"
              label="Telefono"
              value={formik.values.phone}
              placeholder={'(+52) 55-55-55-55'}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlined />
                  </InputAdornment>
                )
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
    </Box>
  )
}
