import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, fTime, getDecryptInfo } from '@/shared/utils'

export const ViaboSpeiMovementsAdapter = movements => {
  const decryptedMovements = getDecryptInfo(movements?.ciphertext, movements?.iv)

  if (!decryptedMovements) {
    throw new Error('No se pueden obtener los movimientos de la cuenta')
  }

  const movementsAdapted = decryptedMovements?.map(movement => ({
    id: movement?.idEF,
    company: '-',
    beneficiary: {
      name: movement?.nombreBeneficiario,
      clabe: movement?.cuentaBeneficiario
    },
    movement: movement?.conceptoPago,
    date: {
      unix: movement?.tsCaptura,
      original: new Date(movement?.tsCaptura),
      dateTime: fDateTime(movement?.tsCaptura),
      time: fTime(movement?.tsCaptura)
    },
    amount: {
      number: movement?.monto,
      format: `- ${fCurrency(movement?.monto || 0)}`,
      color: 'error'
    },
    type: 'SPEI OUT',
    status: movement?.estado
  }))

  const movementsByDay = {}
  movementsAdapted.forEach(movement => {
    const dateKey = format(movement.date.original, 'dd MMMM', { locale: es })
    if (!movementsByDay[dateKey]) {
      movementsByDay[dateKey] = []
    }
    movementsByDay[dateKey].push(movement)
  })

  return movementsByDay
}
