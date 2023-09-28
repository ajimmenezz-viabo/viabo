export const ConciliateTerminalMovementsAdapter = (terminal, terminalMovements, cardMovement) => ({
  terminalId: terminal?.id,
  movementId: cardMovement?.id,
  terminalMovements
})
