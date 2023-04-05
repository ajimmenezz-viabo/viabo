import { PROCESS_LIST } from '@/app/business/commerce/services'

export const CommerceProcessAdapter = process => {
  const { type, taxName, tradeName, rfc, employees, branchOffices, paymentApi, registerStep, register } = process
  return {
    services: [],
    fiscalTypePerson: type,
    fiscalName: taxName,
    rfc,
    commercialName: tradeName,
    employeesNumber: employees,
    branchesNumber: branchOffices,
    tpvsNumber: '',
    apiRequired: Boolean(paymentApi),
    cardsNumber: '',
    cardsUse: '',
    customCardsRequired: false,
    files: [],
    step: registerStep === '1' || registerStep === '' ? PROCESS_LIST.SERVICES_SELECTION : registerStep
  }
}
