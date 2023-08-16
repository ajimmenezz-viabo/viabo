import { format } from 'date-fns'

import { fCurrency, fDateTime } from '@/shared/utils'

export const TerminalMovementsAdapter = data =>
  data?.movements?.map(movement => {
    const amount = parseFloat(movement?.amount || '0')
    const date = movement?.transaction_date ? format(new Date(movement?.transaction_date), 'dd MMM yyyy') : ''
    const time = movement?.transaction_date ? format(new Date(movement?.transaction_date), 'p') : ''

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
        fullDate: fDateTime(movement?.transaction_date),
        date,
        time
      },
      description: `${movement?.issuer === '' ? movement?.card_brand : movement?.issuer}-${
        movement?.card_number
      }`.toUpperCase()
    }
  }) ?? []
