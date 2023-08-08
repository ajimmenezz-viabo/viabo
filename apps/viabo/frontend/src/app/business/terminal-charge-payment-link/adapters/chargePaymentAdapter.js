import { getCryptInfo } from '@/shared/utils'

export const ChargePaymentAdapter = (payment, details) => {
  const expirationYear = payment?.expiration?.slice(-2)

  const expirationFormatted = payment?.expiration?.slice(0, 3) + expirationYear
  const paymentData = {
    paymentId: details?.id,
    name: payment?.name,
    phone: payment?.phone,
    cardNumber: payment?.cardNumber.replace(/\s+/g, ''),
    expirationDate: expirationFormatted,
    cvv: payment?.cvv
  }

  return getCryptInfo(paymentData)
}
