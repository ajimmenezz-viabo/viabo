import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime } from '@/shared/utils'

const MOCK_DATA = [
  {
    id: '1cd3a774-2b6b-4f8e-9559-5c726905350f',
    referenceNumber: 7543220,
    cardId: '5a1341d8-db3a-4e4a-b065-408e3a0e1b3a',
    amount: '5000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800148120',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-06-23 12:00:20'
  },
  {
    id: '8afbf8e5-a797-4b98-9925-9c5db9dcafc1',
    referenceNumber: 7566896,
    cardId: '5a1341d8-db3a-4e4a-b065-408e3a0e1b3a',
    amount: '1000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800148120',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pendiente',
    conciliated: false,
    registerDate: '2023-06-23 18:34:56'
  },
  {
    id: 'e4786975-6e67-4b0c-9c89-c86664c0e9a5',
    referenceNumber: 8144618,
    cardId: '5a1341d8-db3a-4e4a-b065-408e3a0e1b3a',
    amount: '1000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800148120',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-06-30 11:03:38'
  },
  {
    id: '9642c4ac-15ff-4308-ad14-92e222515859',
    referenceNumber: 3365585,
    cardId: '36254614-95cf-4cfd-99c1-d4c2c2c74b9a',
    amount: '2000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800142579',
    payCash: '1410243100013',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-08-29 21:19:45'
  },
  {
    id: 'babc0bf2-dc6d-4007-85fe-127daf74691b',
    referenceNumber: 3365749,
    cardId: '36254614-95cf-4cfd-99c1-d4c2c2c74b9a',
    amount: '1500',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800142579',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-08-29 21:22:29'
  },
  {
    id: 'c505c1cb-b9d3-48b9-aa9b-85d6ceaa43ba',
    referenceNumber: 3365755,
    cardId: '36254614-95cf-4cfd-99c1-d4c2c2c74b9a',
    amount: '1500',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800142579',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-08-29 21:22:35'
  },
  {
    id: '17d4ffec-3f8e-4f6f-a2ab-0d98543e972b',
    referenceNumber: 3365825,
    cardId: '36254614-95cf-4cfd-99c1-d4c2c2c74b9a',
    amount: '2850',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800142579',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-08-29 21:23:45'
  },
  {
    id: '15b03c05-98c6-448a-a02d-31ae453e6915',
    referenceNumber: 3366083,
    cardId: '7c01883f-fdcb-43a2-a668-3cbf342c7a54',
    amount: '10',
    emails: 'fpalma@siccob.com.mx',
    spei: '646180300800148227',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pendiente',
    conciliated: false,
    registerDate: '2023-08-29 21:28:03'
  },
  {
    id: '4ab673e6-95df-45bb-852f-fdef5c92bb1a',
    referenceNumber: 3366993,
    cardId: '7c01883f-fdcb-43a2-a668-3cbf342c7a54',
    amount: '10',
    emails: 'fpalma@siccob.com.mx',
    spei: '646180300800148227',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pendiente',
    conciliated: false,
    registerDate: '2023-08-29 21:43:13'
  },
  {
    id: '399bfe15-e69b-4dcc-9744-00569582a001',
    referenceNumber: 8589299,
    cardId: '604b3d1d-6ba7-4a36-8190-ee37537e5db5',
    amount: '1000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800155663',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-07-05 14:34:59'
  },
  {
    id: '075ec129-57cd-4ce3-8a23-ce56087399b1',
    referenceNumber: 8668318,
    cardId: '604b3d1d-6ba7-4a36-8190-ee37537e5db5',
    amount: '200',
    emails: 'ajimmenezz@icloud.com',
    spei: '646180300800155663',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-07-06 12:31:58'
  },
  {
    id: '65623b92-22e5-458f-b4b3-d3e1bb5334fb',
    referenceNumber: 486151,
    cardId: '604b3d1d-6ba7-4a36-8190-ee37537e5db5',
    amount: '300',
    emails: 'ramses@viabo.com',
    spei: '646180300800155663',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pagada',
    conciliated: false,
    registerDate: '2023-07-27 13:29:11'
  },
  {
    id: '29bbc2f8-f1c5-4cfe-b0aa-74f088c8e831',
    referenceNumber: 1029725,
    cardId: '604b3d1d-6ba7-4a36-8190-ee37537e5db5',
    amount: '5000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800155663',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pagada',
    conciliated: false,
    registerDate: '2023-08-02 20:28:45'
  },
  {
    id: 'fdfedeaf-d769-4659-bfda-6bb51a6336dc',
    referenceNumber: 2203614,
    cardId: '604b3d1d-6ba7-4a36-8190-ee37537e5db5',
    amount: '1',
    emails: 'fpalma@siccob.com.mx',
    spei: '646180300800155663',
    payCash: '1410241800168',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-08-16 10:33:34'
  },
  {
    id: 'a06f4906-7f6f-4125-9ab7-e0fca4a37d88',
    referenceNumber: 8930625,
    cardId: 'f19f7530-5b38-40c2-89ca-282a68eea2e1',
    amount: '200',
    emails: 'ramses@itravel.mx',
    spei: '646180300800160344',
    payCash: '',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-07-09 13:23:45'
  },
  {
    id: 'eda1743f-bf15-4ef9-a0b0-b3e2414f2b81',
    referenceNumber: 394521,
    cardId: '8d2efcec-b8e8-488a-a0d2-4bbaf9df8b32',
    amount: '2000',
    emails: 'Vicvejarano@gmail.com',
    spei: '646180300800159698',
    payCash: '',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-07-26 12:02:01'
  },
  {
    id: 'ee3a3af5-c006-46a5-9da7-7d1d87ca39d8',
    referenceNumber: 4467819,
    cardId: '8d2efcec-b8e8-488a-a0d2-4bbaf9df8b32',
    amount: '1',
    emails: 'j94.osornio@gmail.com',
    spei: '646180300800159698',
    payCash: '1410244400016',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Pagada',
    conciliated: false,
    registerDate: '2023-09-11 15:30:19'
  },
  {
    id: 'd7531f57-82b8-4469-954b-9495ebb53b2f',
    referenceNumber: 393898,
    cardId: '7b3081d7-e4ea-4cea-aa9f-54c13e7eb3ef',
    amount: '1000',
    emails: 'vicbejarano@gmail.com',
    spei: '646180300800159711',
    payCash: '',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-07-26 11:51:38'
  },
  {
    id: '1a3c8334-a43a-4ad3-a940-957eb3662ea6',
    referenceNumber: 2663408,
    cardId: 'be684815-f2c9-4d2a-8705-a12410d6d97f',
    amount: '5000',
    emails: 'rdominguez@credinspira.mx',
    spei: '646180300800161767',
    payCash: '',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-08-21 18:16:48'
  },
  {
    id: '9abceff2-3fae-41b0-af84-741b1f5f85ea',
    referenceNumber: 3853875,
    cardId: 'be684815-f2c9-4d2a-8705-a12410d6d97f',
    amount: '100',
    emails: 'rita@ingenieriadigital.mx',
    spei: '646180300800161767',
    payCash: '',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-09-04 12:57:55'
  },
  {
    id: 'f0b4d8c9-c2b5-4f28-97bf-4afc2de51075',
    referenceNumber: 2037586,
    cardId: '4e5a072a-a12b-46b6-afa8-751d101fac86',
    amount: '1000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800161796',
    payCash: '1410241600014',
    paymentProcessorId: 1,
    paymentProcessorName: 'Mastercard',
    status: 'Liquidada',
    conciliated: true,
    registerDate: '2023-08-14 12:26:26'
  },
  {
    id: '7692c385-830b-4dfd-90f3-5756a2f99006',
    referenceNumber: 3858299,
    cardId: '9b0a0c59-9830-4b11-9612-b093d0909da0',
    amount: '1000',
    emails: 'alonso@viabo.com',
    spei: '646180300800162177',
    payCash: '1410243700010',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Pagada',
    conciliated: false,
    registerDate: '2023-09-04 14:11:39'
  },
  {
    id: '31def12f-05e5-4ceb-b91b-ea8d1093c311',
    referenceNumber: 3860364,
    cardId: '9b0a0c59-9830-4b11-9612-b093d0909da0',
    amount: '2000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800162177',
    payCash: '1410243700028',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-09-04 14:46:04'
  },
  {
    id: '662b2535-4350-482f-9ff7-a586fcebac12',
    referenceNumber: 3860394,
    cardId: '9b0a0c59-9830-4b11-9612-b093d0909da0',
    amount: '3000',
    emails: 'ajimmenezz@gmail.com',
    spei: '646180300800162177',
    payCash: '1410243700036',
    paymentProcessorId: 2,
    paymentProcessorName: 'Carnet',
    status: 'Cancelada',
    conciliated: false,
    registerDate: '2023-09-04 14:46:34'
  }
]

export const FundingOrdersAdapter = orders =>
  MOCK_DATA?.map(order => {
    let paymentMethods = ''
    if (order?.spei && order?.payCash && order.spei !== '' && order.payCash !== '') {
      paymentMethods = 'SPEI,PAYCASH'
    } else if (order?.spei && order.spei !== '') {
      paymentMethods = 'SPEI'
    } else if (order?.payCash && order.payCash !== '') {
      paymentMethods = 'PAYCASH'
    }

    const date = order?.registerDate ? format(new Date(order?.registerDate), 'dd MMM yyyy', { locale: es }) : ''
    const time = order?.registerDate ? format(new Date(order?.registerDate), 'p') : ''

    return {
      ...order,
      paymentMethods,
      amount: fCurrency(order?.amount),
      date: order?.registerDate,
      registerDate: {
        fullDate: fDateTime(order?.registerDate),
        time,
        date
      },
      conciliatedName: order?.conciliated ? 'Conciliada' : 'Sin Conciliar'
    }
  })
