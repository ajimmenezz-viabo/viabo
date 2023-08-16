import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, normalizeDateString } from '@/shared/utils'

export const TerminalMovementsAdapter = data =>
  data?.movements?.map(movement => {
    const amount = parseFloat(movement?.amount || '0')
    const date = movement?.transaction_date
      ? format(normalizeDateString(movement?.transaction_date), 'dd MMM yyyy', { locale: es })
      : ''
    const time = movement?.transaction_date ? format(normalizeDateString(movement?.transaction_date), 'p') : ''

    return {
      id: movement?.id,
      amount,
      amountFormat: fCurrency(amount),
      approved: movement?.approved,
      authNumber: movement?.authorization_number === '' ? '-' : movement?.authorization_number,
      cardType: movement?.card_brand,
      cardNumber: movement?.card_number,
      cardBank: movement?.issuer,
      referenceNumber: movement?.reference,
      transactionDate: {
        fullDate: format(normalizeDateString(movement?.transaction_date), 'dd MMM yyyy HH:mm', { locale: es }),
        date,
        time
      },
      description: `${movement?.issuer === '' ? movement?.card_brand : movement?.issuer}-${
        movement?.card_number
      }`.toUpperCase(),
      transactionMessage: movement?.result_message
    }
  }) ?? []
