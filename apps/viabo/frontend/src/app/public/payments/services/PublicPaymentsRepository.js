import { PaymentByCashAdapterResponseAdapter } from '../adapters'

import { CommerceAdapter } from '@/app/management/commerces/adapters'
import { getCryptInfo } from '@/shared/utils'

const commerceInfoMock = {
  id: 'da6524f0-c681-45c8-af4f-eaa78091225d',
  fatherId: '17ea6538-f2df-4700-9180-457fc0d4ed3c',
  legalRepresentative: '4fb43713-4a20-480e-b9b5-6fb2c822b65e',
  legalRepresentativeName: 'Ramses De Hoyos',
  legalRepresentativeEmail: 'mulsum@viabodemo.com',
  legalRepresentativePhone: '+52 55 5555 5555',
  legalRepresentativeRegister: '2023-07-04 14:12:47',
  legalRepresentativeLastSession: '2023-12-13 19:49:16',
  fiscalPersonType: '1',
  fiscalName: 'Mulsum',
  tradeName: 'Mulsum',
  rfc: '',
  postalAddress: 'Edificio Level A1509 Piso 15 Av Antea 1130 A1509 Jurica Tolimán, Querétaro, CP 76230, Querétaro',
  phoneNumbers: '+525611761814,555555555',
  logo: '',
  slug: 'test-demo',
  publicTerminal: 'f6a5dfdc-dd06-4c6b-8479-858b380a28ae',
  employees: '1',
  branchOffices: '1',
  pointSaleTerminal: '1',
  paymentApi: '1',
  register: '2023-07-04 14:12:47',
  type: '2',
  typeName: 'Informal',
  allowTransactions: '1',
  statusId: '3',
  statusName: 'Afiliado',
  registerStep: '3',
  services: [],
  documents: [],
  commissions: {
    SpeiInCarnet: '4.0',
    SpeiInMasterCard: '5.0',
    SpeiOutCarnet: '0.0',
    SpeiOutMasterCard: '0.0',
    Pay: '0.0',
    SharedTerminal: '5.0'
  },
  active: '1',
  terminals: [
    {
      id: 'f6a5dfdc-dd06-4c6b-8479-858b380a28ae',
      name: 'MULSUM-2557',
      type: '1'
    }
  ]
}

export const getCommerceInfoBySlug = async slug => {
  // const { data } = await axios.get(`/api/commerce/${slug}`)
  console.log('')
  return CommerceAdapter(commerceInfoMock)
}

export const payWithCashMethod = async payment => {
  console.log(payment)
  // const { data } = await axios.post(`/api/commerce/pay/cash`, payment)
  const data = {
    id: '1cd3a774-2b6b-4f8e-9559-5c726905350f',
    referenceNumber: '7543220'
  }

  const dataCrypt = getCryptInfo(data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PaymentByCashAdapterResponseAdapter(dataCrypt))
    }, 2000)
  })
}

export const payWithTerminalMethod = async payment => {
  console.log(payment)
  // const { data } = await axios.post(`/api/commerce/pay/terminal`, payment)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}
