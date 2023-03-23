export function matchIsNumeric(text) {
  const isNumber = typeof text === 'number'
  const isString = matchIsString(text)
  return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
}

export function matchIsString(text) {
  return typeof text === 'string' || text instanceof String
}
