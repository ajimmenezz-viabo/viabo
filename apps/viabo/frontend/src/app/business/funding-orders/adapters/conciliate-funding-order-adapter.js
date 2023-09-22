export const ConciliateFundingOrderAdapter = (fundingOrder, movement) => ({
  reference: fundingOrder?.referenceNumber,
  movementId: movement?.id
})
