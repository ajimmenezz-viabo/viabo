export const CreateCardAdapter = card => {
  const { cardNumber, cardType, expiration, cvv, assigned } = card

  const expirationYear = expiration?.slice(-2)

  const expirationFormatted = expiration?.slice(0, 3) + expirationYear

  return {
    cardNumber: cardNumber.replace(/\s+/g, ''),
    paymentProcessorId: cardType?.value,
    expirationDate: expirationFormatted,
    cvv,
    commerceId: assigned?.value
  }
}
