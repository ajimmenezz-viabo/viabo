import { PROCESS_LIST } from '@/app/business/commerce/services'

export const CommerceProcessAdapter = process => {
  const {
    Id,
    FiscalPersonType,
    TaxName,
    TradeName,
    RFC,
    Employees,
    BranchOffices,
    PaymentAPI,
    RegisterStep,
    LegalRepresentative,
    Services,
    PointSaleTerminal
  } = process

  const serviceCard = Services.find(service => service.type === '2')
  const cardsNumber = serviceCard?.cardNumbers || 0
  const cardUse = serviceCard?.cardUse || ''
  const customCard = serviceCard?.personalized === '1' || false

  return {
    id: Id,
    idUser: LegalRepresentative,
    services: Services,
    fiscalTypePerson: FiscalPersonType,
    fiscalName: TaxName,
    rfc: RFC,
    commercialName: TradeName,
    employeesNumber: Employees,
    branchesNumber: BranchOffices,
    tpvsNumber: PointSaleTerminal,
    apiRequired: Boolean(PaymentAPI === 1),
    cardsNumber: Number(cardsNumber),
    cardsUse: cardUse,
    customCardsRequired: customCard,
    files: [],
    step: RegisterStep === 1 || RegisterStep === '' ? PROCESS_LIST.SERVICES_SELECTION : RegisterStep
  }
}
