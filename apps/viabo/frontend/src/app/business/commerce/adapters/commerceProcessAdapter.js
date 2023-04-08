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
    cardsNumber: 0,
    cardsUse: '',
    customCardsRequired: false,
    files: [],
    step: RegisterStep === 1 || RegisterStep === '' ? PROCESS_LIST.SERVICES_SELECTION : RegisterStep
  }
}
