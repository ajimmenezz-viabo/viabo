import { format, formatDistanceToNow, getTime } from 'date-fns'
import { es } from 'date-fns/locale'

export function fDate(date) {
  return format(new Date(date), 'dd MMMM, yyyy', { locale: es })
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm', { locale: es })
}

export function fTime(date) {
  return format(new Date(date), 'hh:mm a', { locale: es })
}

export function fTimestamp(date) {
  return getTime(new Date(date))
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p', { locale: es })
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    includeSeconds: true,
    locale: es
  })
}
