import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime } from '@/shared/utils'

export const FundingOrdersAdapter = orders =>
  orders?.map(order => {
    let paymentMethods = ''
    if (order?.spei && order?.referencePayCash && order.spei !== '' && order.referencePayCash !== '') {
      paymentMethods = 'SPEI,PAYCASH'
    } else if (order?.spei && order.spei !== '') {
      paymentMethods = 'SPEI'
    } else if (order?.referencePayCash && order.referencePayCash !== '') {
      paymentMethods = 'PAYCASH'
    }

    const date = order?.registerDate ? format(new Date(order?.registerDate), 'dd MMM yyyy', { locale: es }) : ''
    const time = order?.registerDate ? format(new Date(order?.registerDate), 'p') : ''

    return {
      id: order?.id,
      cardId: order?.cardId,
      cardNumber: order?.cardNumber,
      paymentProcessorName: order?.paymentProcessorName,
      paymentMethods,
      referenceNumber: order?.referenceNumber,
      amount: fCurrency(order?.amount),
      status: order?.statusName,
      date: order?.registerDate,
      registerDate: {
        fullDate: fDateTime(order?.registerDate),
        time,
        date
      },
      spei: order?.spei,
      payCash: order?.referencePayCash,
      payCashURLS: order?.instructionsUrls,
      emails: order?.emails?.split(','),
      conciliatedName: order?.conciliated !== 'No' ? 'Conciliada' : 'Sin Conciliar',
      conciliated: order?.conciliated !== 'No'
    }
  })
