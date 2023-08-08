import { fCurrency, getDecryptInfo } from '@/shared/utils'

export const PaymentLinkInfoAdapter = paymentLinkInfo => {
  const paymenyLinkDecrypted = getDecryptInfo(paymentLinkInfo?.ciphertext, paymentLinkInfo?.iv)

  if (paymenyLinkDecrypted) {
    return {
      id: paymenyLinkDecrypted?.id,
      name: paymenyLinkDecrypted?.clientName,
      amount: fCurrency(paymenyLinkDecrypted?.amount),
      description: paymenyLinkDecrypted?.description,
      email: paymenyLinkDecrypted?.email,
      phone: paymenyLinkDecrypted?.phone,
      status: {
        id: paymenyLinkDecrypted?.statusId,
        name: paymenyLinkDecrypted?.statusName
      }
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion de la liga de pago')
  }
}
