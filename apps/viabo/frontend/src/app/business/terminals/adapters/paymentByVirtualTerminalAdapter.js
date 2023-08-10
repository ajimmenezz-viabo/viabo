import { getCryptInfo } from '@/shared/utils'

export const PaymentByVirtualTerminalAdapter = (terminal, payment) => {
  const paymentData = {
    commerceId: terminal?.commerceId,
    terminalId: terminal?.terminalId,
    amount: parseFloat(
      payment?.amount?.toString() === '' ? '0' : payment?.amount?.toString().replace(/,/g, '')
    ).toString(),
    concept: payment?.concept,
    cardHolder: payment?.name,
    phone: payment?.phone,
    cardNumber: payment?.cardNumber.replace(/\s+/g, ''),
    expMonth: payment?.expiration?.slice(0, 2),
    expYear: payment?.expiration?.slice(-2),
    security: payment?.cvv,
    email: payment?.email
  }

  return getCryptInfo(paymentData)
}
