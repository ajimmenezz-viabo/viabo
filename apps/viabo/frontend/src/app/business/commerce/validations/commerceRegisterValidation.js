import * as Yup from 'yup'

export const commerceRegisterValidation = () => {
  const registerValidation = Yup.object({
    name: Yup.string('Ingresa tu nombre').required('El nombre es requerido'),
    fullName: Yup.string('Ingresa tus apellidos').required('Los apellidos son requeridos'),
    email: Yup.string('Ingresa tu correo').email('Ingresa un correo valido').required('El correo es requerido'),
    password: Yup.string('Ingresa tu contraseña')
      .required('La contraseña es requerida')
      .matches(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
        'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('La confirmación de la contraseña es requerida')
  })

  return {
    schema: registerValidation,
    initialValues: {
      name: '',
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}
