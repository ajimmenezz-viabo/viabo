import { format } from 'date-fns'
import { camelCase, startCase } from 'lodash'

import { fCardNumberHidden, fCardNumberShowLastDigits, fCurrency, fDateTime, getDecryptInfo } from '@/shared/utils'

export const CardAdapter = card => {
  const decryptedCard = getDecryptInfo(card?.ciphertext, card?.iv)
  const balance = parseFloat(decryptedCard?.balance === '' ? '0' : decryptedCard?.balance.replace(/,/g, ''))

  if (decryptedCard) {
    return {
      SPEI: decryptedCard?.spei,
      PAYNET: decryptedCard?.paynet,
      cardON: decryptedCard?.block === 'UnBlocked',
      nip: decryptedCard?.nip,
      balance,
      balanceFormatted: fCurrency(balance)
    }
  } else {
    throw new Error('Algo fallo al obtenerla informacion')
  }
}

export function CardDetailsAdapter(card) {
  const {
    id,
    number,
    CVV,
    register,
    expirationDate,
    paymentProcessorName,
    paymentProcessorId,
    statusId,
    statusName,
    commerceId,
    commerceName,
    ownerId,
    ownerName,
    ownerPhone,
    ownerEmail,
    recorderId,
    recorderName,
    assignmentDate,
    active
  } = card

  const lastFourDigits = number?.slice(-4)
  let assignName = ownerName ?? ''

  if (assignName?.length > 10) {
    assignName = assignName.slice(0, 13) + '...'
  }
  return {
    id,
    cardTypeId: paymentProcessorId,
    cardType: paymentProcessorName,
    assignCommerce: {
      id: commerceId,
      name: commerceName
    },
    assignUser: {
      id: ownerId,
      name: ownerName === '' ? '-' : startCase(camelCase(ownerName)),
      phone: ownerPhone,
      email: ownerEmail,
      dateTime: assignmentDate === '' ? '-' : fDateTime(assignmentDate),
      date: assignmentDate === '' ? '-' : format(new Date(register), 'dd MMM yyyy'),
      time: assignmentDate === '' ? '-' : format(new Date(register), 'p')
    },
    staffRegister: {
      id: recorderId,
      name: recorderName
    },
    cardNumber: number,
    cardNumberHidden: fCardNumberHidden(number),
    cardNumberMoreDigits: fCardNumberShowLastDigits(number),
    cardUserNumber: assignName?.toUpperCase() + ' ' + lastFourDigits,
    expiration: expirationDate,
    register: fDateTime(register),
    registerDate: register ? format(new Date(register), 'dd MMM yyyy') : '',
    registerTime: register ? format(new Date(register), 'p') : '',
    cvv: CVV,
    emptyCVV: CVV === '' || !CVV ? 'SIN CVV' : 'CON CVV',
    status: {
      id: statusId,
      name: statusName
    }
  }
}
