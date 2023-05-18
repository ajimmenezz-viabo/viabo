import { fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'
import { format } from 'date-fns'

export const CardAdapter = card => {
  const decryptedCard = getDecryptInfo(card?.ciphertext, card?.iv)
  const balance = parseFloat(decryptedCard?.balance === '' ? '0' : decryptedCard?.balance.replace(/,/g, ''))

  if (decryptedCard) {
    let expenses = 0
    let income = 0
    return {
      SPEI: decryptedCard?.spai,
      PAYNET: decryptedCard?.paynet,
      cardON: decryptedCard?.block === 'UnBlocked',
      balance,
      balanceFormatted: fCurrency(balance),
      movements:
        decryptedCard?.movements?.map(movement => {
          movement?.type.toLowerCase() === 'gasto' ? (expenses += movement?.amount) : (income += movement?.amount)
          const date = movement?.date ? format(new Date(movement?.date), 'dd MMM yyyy') : ''
          const time = movement?.date ? format(new Date(movement?.date), 'p') : ''
          return {
            fullDate: fDateTime(movement?.date),
            date,
            time,
            description: movement?.description,
            amount: fCurrency(movement?.amount),
            type: movement?.type.toLowerCase()
          }
        }) ?? [],
      expenses: fCurrency(expenses),
      income: fCurrency(income)
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion')
  }
}
