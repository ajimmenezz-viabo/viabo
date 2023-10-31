import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'

export const CardMovementsAdapter = movements => {
  const decryptedMovements = getDecryptInfo(movements?.ciphertext, movements?.iv)
  let expenses = 0
  let income = 0

  return {
    movements:
      decryptedMovements?.map(movement => {
        const amount = parseFloat(movement?.amount || '0')
        movement?.type.toLowerCase() === 'gasto' ? (expenses += amount) : (income += amount)
        const date = movement?.date ? format(new Date(movement?.date), 'dd MMM yyyy', { locale: es }) : ''
        const time = movement?.date ? format(new Date(movement?.date), 'p') : ''

        const expensesControlFiles = movement?.receiptFiles ? movement?.receiptFiles?.split(',') : []
        const invoiceFiles = expensesControlFiles?.reduce(
          (result, file) => {
            if (file.endsWith('.xml')) {
              result.xml = file
            } else if (file.endsWith('.pdf')) {
              result.pdf = file
            }
            return result
          },
          {
            xml: null,
            pdf: null
          }
        )

        const isInvoice = Boolean(invoiceFiles?.xml !== null && invoiceFiles?.pdf !== null)

        return {
          id: movement?.transactionId,
          serverDate: movement?.date,
          fullDate: fDateTime(movement?.date),
          date,
          time,
          description: movement?.description,
          amount,
          amountFormat: fCurrency(amount),
          type: movement?.type.toLowerCase(),
          concept: movement?.concept ?? '',
          operationType: movement?.operationType?.toUpperCase(),
          cardId: movement?.cardId,
          commerceId: movement?.cardCommerceId,
          ownerCard: movement?.cardMain
            ? movement?.cardCommerceName
            : movement?.cardOwnerName === ''
            ? 'Sin Asignar'
            : movement?.cardOwnerName,
          cardNumber: movement?.cardMain ? 'Cuenta Maestra' : movement?.cardNumber,
          cardCommerceName: movement?.cardCommerceName,
          verified: Boolean(movement?.checked),
          isMainCard: Boolean(movement?.cardMain),
          expensesControl: {
            id: movement?.receiptId,
            isInvoice,
            invoiceFiles,
            otherFiles: !isInvoice ? expensesControlFiles : []
          },
          original: movement
        }
      }) ?? [],
    income: fCurrency(income),
    expenses: fCurrency(expenses),
    balanceMovements: fCurrency(income - expenses)
  }
}
