import { fCurrency, getDecryptInfo } from '@/shared/utils'

export const CardAdapter = card => {
  const decryptedCard = getDecryptInfo(card?.ciphertext, card?.iv)
  const balance = parseFloat(decryptedCard?.balance === '' ? '0' : decryptedCard?.balance.replace(/,/g, ''))

  if (decryptedCard) {
    return {
      SPEI: decryptedCard?.spai,
      PAYNET: decryptedCard?.paynet,
      cardON: decryptedCard?.block === 'UnBlocked',
      nip: decryptedCard?.nip,
      balance,
      balanceFormatted: fCurrency(balance)
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion')
  }
}
