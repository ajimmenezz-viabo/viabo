import { PROCESS_LIST_STEPS } from '@/app/business/commerce/services'
import { fDateTime } from '@/shared/utils'

const CardAdapter = services => {
  const viaboCard = services?.find(service => service?.type === '2')

  if (viaboCard) {
    return {
      id: viaboCard?.id,
      type: viaboCard?.type,
      name: viaboCard?.name,
      cardNumbers: viaboCard?.cardNumbers,
      cardUse: viaboCard?.cardUse,
      customCardsRequired: viaboCard?.personalized === '1'
    }
  }
  return null
}

const DocumentsAdapter = documents =>
  documents?.map(document => {
    const { Id, Name, storePath } = document

    return {
      id: Id,
      name: Name,
      path: storePath
    }
  }) ?? []

export const ManagementCommercesAdapter = commerces =>
  commerces.map((commerce, index) => {
    const {
      id,
      legalRepresentative,
      legalRepresentativeName,
      legalRepresentativePhone,
      legalRepresentativeLastSession,
      legalRepresentativeEmail,
      taxName,
      fiscalPersonType,
      tradeName,
      rfc,
      employees,
      branchOffices,
      pointSaleTerminal,
      paymentApi,
      register,
      statusId,
      registerStep,
      statusName,
      services,
      documents
    } = commerce

    return {
      id,
      name: tradeName,
      account: {
        id: legalRepresentative,
        name: legalRepresentativeName,
        email: legalRepresentativeEmail,
        phone: legalRepresentativePhone,
        status: 'Activo',
        lastLogged:
          legalRepresentativeLastSession === '' ? 'No ha iniciado sesión' : fDateTime(legalRepresentativeLastSession),
        register: fDateTime(register) ?? ''
      },
      information: {
        available: taxName !== '',
        fiscalName: taxName,
        commercialName: tradeName,
        fiscalTypePerson: fiscalPersonType === '1' ? 'Moral' : 'Física',
        rfc,
        employeesNumber: employees,
        branchesNumber: branchOffices
      },
      services: {
        available: pointSaleTerminal !== '0',
        viaboCard: CardAdapter(services),
        tpvsNumber: pointSaleTerminal,
        apiRequired: paymentApi === '1'
      },
      status: {
        id: statusId,
        name: statusName,
        step: PROCESS_LIST_STEPS.find(step => step.step.toString() === registerStep)?.name ?? ''
      },
      documents: DocumentsAdapter(documents)
    }
  })
