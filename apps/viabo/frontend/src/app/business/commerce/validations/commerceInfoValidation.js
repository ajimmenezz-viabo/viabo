import * as Yup from 'yup'
import { SERVICES_NAMES } from '@/app/business/commerce/services'

const commerceInfoSchema = Yup.object({
  fiscalName: Yup.string().required('El nombre fiscal es requerido'),
  rfc: Yup.string().required('El RFC es requerido'),
  commercialName: Yup.string().required('El nombre comercial es requerido'),
  employeesNumber: Yup.number()
    .min(1, 'Al menos debe exisitir un empleado')
    .required('El número de empleados es requerido'),
  branchesNumber: Yup.number()
    .min(1, 'Al menos debe existir una sucursal')
    .required('El número de sucursales es requerido'),
  tpvsNumber: Yup.number()
    .min(1, 'Al menos debe seleccionar una terminal punto de venta')
    .required('El número de terminales de punto de venta es requerido')
})

export const getCommerceValidationByService = resume => {
  const initial = {
    fiscalName: resume?.fiscalName || '',
    rfc: resume?.rfc || '',
    commercialName: resume?.commercialName || '',
    employeesNumber: resume?.employeesNumber || '',
    branchesNumber: resume?.branchesNumber || '',
    tpvsNumber: resume?.tpvsNumber || '',
    apiRequired: resume?.apiRequired || false,
    cardsUse: resume?.cardsUse || '',
    cardsNumber: resume?.cardsNumber || '',
    customCardsRequired: resume?.customCardsRequired || false
  }

  let schema = commerceInfoSchema
  const allInfoIsRequired = Boolean(resume?.services?.includes(SERVICES_NAMES.VIABO_CARD))
  if (allInfoIsRequired) {
    schema = {
      ...commerceInfoSchema,
      cardsUse: Yup.string().required('El uso de la tarjetas es requerido'),
      cardsNumber: Yup.number()
        .min(1, 'Al menos debe seleccionar una tarjeta')
        .required('El número de tarjetas es requerido')
    }
  }
  return {
    initialValues: initial,
    schema,
    allInfoIsRequired
  }
}
