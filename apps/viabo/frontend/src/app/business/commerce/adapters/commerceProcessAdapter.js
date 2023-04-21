export const CommerceProcessAdapter = process => {
  const {
    id,
    fiscalPersonType,
    taxName,
    tradeName,
    rfc,
    employees,
    branchOffices,
    paymentAPI,
    registerStep,
    legalRepresentative,
    services,
    pointSaleTerminal,
    documents
  } = process

  const serviceCard = services?.find(service => service.type === '2')
  const cardsNumber = serviceCard?.cardNumbers || 0
  const cardUse = serviceCard?.cardUse || ''
  const customCard = serviceCard?.personalized === '1' || false

  return {
    id,
    idUser: legalRepresentative,
    services,
    fiscalTypePerson: fiscalPersonType,
    fiscalName: taxName,
    rfc,
    commercialName: tradeName,
    employeesNumber: Number(employees),
    branchesNumber: Number(branchOffices),
    tpvsNumber: Number(pointSaleTerminal),
    apiRequired: Boolean(paymentAPI === '1'),
    cardsNumber: Number(cardsNumber),
    cardsUse: cardUse,
    customCardsRequired: customCard,
    files: documents,
    step: Number(registerStep)
  }
}
