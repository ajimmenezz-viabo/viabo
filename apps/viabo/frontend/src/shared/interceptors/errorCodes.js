const ERROR_CODES = {
  400: 'warning',
  401: 'warning',
  500: 'error',
  404: 'error',
  200: 'success'
}

const getNotificationTypeByErrorCode = code => ERROR_CODES[code] ?? 'error'

export { ERROR_CODES, getNotificationTypeByErrorCode }
