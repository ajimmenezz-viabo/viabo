import { getCryptInfo } from '@/shared/utils'

export const AssignCardDemoUserAdapter = card => {
  const expirationYear = card?.expiration?.slice(-2)

  const expirationFormatted = card?.expiration?.slice(0, 3) + expirationYear

  const cardAdapter = {
    cardNumber: card?.cardNumber?.replace(/\s+/g, ''),
    expiration: expirationFormatted,
    cvv: card?.cvv
  }

  return getCryptInfo(cardAdapter)
}
