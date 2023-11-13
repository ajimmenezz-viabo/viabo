import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, normalizeDateString } from '@/shared/utils'

export const ViaboPayLiquidatedMovementsAdapter = data => {
  const movements =
    data?.movements?.map(movement => {
      const amount = parseFloat(movement?.amount || '0')
      const date = movement?.transaction_date
        ? format(normalizeDateString(movement?.transaction_date), 'dd MMM yyyy', { locale: es })
        : ''
      const time = movement?.transaction_date ? format(normalizeDateString(movement?.transaction_date), 'p') : ''

      return {
        id: movement?.id,
        terminalName: movement?.terminal_name,
        amount,
        amountFormat: fCurrency(amount),
        amountToLiquidate: fCurrency(parseFloat(amount - (5 / 100) * amount).toFixed(2)),
        commerceName: 'Demo',
        approved: movement?.approved,
        cardType: movement?.card_brand,
        cardNumber: movement?.card_number,
        cardBank: movement?.issuer,
        transactionDate: {
          fullDate: format(normalizeDateString(movement?.transaction_date), 'dd MMM yyyy HH:mm', { locale: es }),
          date,
          time
        },
        serverDate: normalizeDateString(movement?.transaction_date),
        description: `${movement?.issuer === '' ? movement?.card_brand : movement?.issuer}-${
          movement?.card_number
        }`.toUpperCase(),
        transactionMessage: movement?.result_message,
        conciliated: !!movement?.conciliated,
        conciliatedName: movement?.conciliated ? 'Conciliada' : 'Sin Conciliar'
      }
    }) ?? []

  return movements
}
