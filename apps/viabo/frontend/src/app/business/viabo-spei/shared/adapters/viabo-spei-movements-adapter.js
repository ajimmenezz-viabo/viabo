import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { fCurrency, fDateTime, fTime } from '@/shared/utils'

const status = {
  Liquidado: {
    name: 'Liquidado',
    color: 'success'
  },
  Devuelto: {
    name: 'Devuelto',
    color: 'error'
  },
  'En tránsito': {
    name: 'En tránsito',
    color: 'warning'
  },
  default: {
    name: 'No reconocido',
    color: 'warning'
  }
}

const SPEI_OPERATIONS = {
  SPEI_IN: 'Spei In',
  SPEI_OUT: 'Spei Out'
}

export const ViaboSpeiMovementsAdapter = movements => {
  const movementsAdapted = movements?.transactions?.map(movement => {
    const date = movement?.liquidationDate ? movement?.liquidationDate : movement?.createDate
    return {
      id: movement?.id,
      stpId: movement?.stpId,
      type: movement?.typeName?.toUpperCase(),
      beneficiary: {
        name: movement?.destinationName,
        account: movement?.destinationAccount,
        bankCode: movement?.destinationBankCode
      },
      source: {
        name: movement?.sourceName,
        account: movement?.sourceAccount
      },
      movement: movement?.concept,
      date: {
        original: date,
        dateTime: fDateTime(date),
        time: fTime(date),
        groupBy: format(new Date(date), 'dd MMMM', { locale: es })
      },
      amount: {
        number: movement?.amount,
        format:
          movement?.typeName === SPEI_OPERATIONS.SPEI_IN
            ? fCurrency(movement?.amount || 0)
            : `- ${fCurrency(movement?.amount || 0)}`,
        color: movement?.typeName === SPEI_OPERATIONS.SPEI_IN ? 'success.main' : 'error'
      },
      reference: movement?.reference,
      banxicoKey: movement?.trackingKey,
      status: {
        ...(movement?.statusName ? status[movement.statusName] || status.default : status.default)
      },
      fileCEP: movement?.urlCEP
    }
  })

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
