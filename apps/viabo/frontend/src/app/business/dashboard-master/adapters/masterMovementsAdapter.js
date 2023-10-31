import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'

export const MasterMovementsAdapter = movements => {
  const decryptedMovements = getDecryptInfo(movements?.ciphertext, movements?.iv)

  let expenses = 0
  let income = 0
  return {
    movements:
      decryptedMovements?.map(movement => {
        const amount = parseFloat(movement?.amount || '0')
        if (movement?.type.toLowerCase() === 'gasto') {
          expenses += amount
        }
        if (movement?.type.toLowerCase() === 'ingreso') {
          income += amount
        }

        const date = movement?.date ? format(new Date(movement?.date), 'dd MMM yyyy', { locale: es }) : ''
        const time = movement?.date ? format(new Date(movement?.date), 'p') : ''
        return {
          id: movement?.transactionId,
          fullDate: fDateTime(movement?.date),
          date,
          time,
          serverDate: movement?.date,
          description: movement?.description,
          amount,
          amountFormat: fCurrency(amount),
          paymentProcessor: movement?.cardPaymentProcessor,
          type: movement?.type.toLowerCase(),
          operationType: movement?.operationType?.toUpperCase(),
          concept: movement?.concept ?? '',
          cardId: movement?.cardId,
          commerceId: movement?.cardCommerceId,
          original: movement,
          verified: Boolean(movement?.checked)
        }
      }) ?? [],
    income: fCurrency(income),
    expenses: fCurrency(expenses),
    balanceMovements: fCurrency(income - expenses)
  }
}
