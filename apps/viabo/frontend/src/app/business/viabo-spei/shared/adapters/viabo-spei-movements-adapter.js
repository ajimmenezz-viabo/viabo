import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, fTime, getDecryptInfo } from '@/shared/utils'

const status = {
  LQ: {
    name: 'Liquidada',
    color: 'success'
  },
  A: {
    name: 'Aprobada',
    color: 'info'
  },
  default: {
    name: 'Pendiente',
    color: 'warning'
  }
}

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
      time: fTime(movement?.tsCaptura),
      groupBy: format(movement?.tsCaptura, 'dd MMMM', { locale: es })
    },
    amount: {
      number: movement?.monto,
      format: `- ${fCurrency(movement?.monto || 0)}`,
      color: 'error'
    },
    type: 'SPEI OUT',
    status: {
      id: movement?.estado,
      ...(movement?.estado ? status[movement.estado] || status.default : status.default)
    }
  }))

  const movementsByDay = {}
  movementsAdapted.forEach(movement => {
    const dateKey = movement.date.groupBy
    if (!movementsByDay[dateKey]) {
      movementsByDay[dateKey] = []
    }
    movementsByDay[dateKey].push(movement)
  })

  return { groupByDay: movementsByDay, original: movementsAdapted }
}
