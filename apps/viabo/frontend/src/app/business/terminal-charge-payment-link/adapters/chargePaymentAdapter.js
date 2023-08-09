import { getCryptInfo } from '@/shared/utils'

export const ChargePaymentAdapter = (payment, details) => {
  const expirationYear = payment?.expiration?.slice(-2)

  const expirationFormatted = payment?.expiration?.slice(0, 3) + expirationYear
  const paymentData = {
    payId: details?.id,
    cardHolder: payment?.name,
    phone: payment?.phone,
    cardNumber: payment?.cardNumber.replace(/\s+/g, ''),
    expirationDate: expirationFormatted,
    expMonth: payment?.expiration?.slice(0, 2),
    expYear: payment?.expiration?.slice(-2),
    security: payment?.cvv,
    email: payment?.email
  }

  return getCryptInfo(paymentData)
}
