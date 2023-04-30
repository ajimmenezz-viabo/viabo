export const AssignCardsAdapter = cards => {
  const commerceId = cards?.commerce?.value
  if (cards?.cardId) {
    return {
      cardId: cards?.cardId,
      commerceId
    }
  }

  return {
    cardNumbers: cards?.numberOfCards,
    commerceId
  }
}
