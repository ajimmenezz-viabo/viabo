import { isFunction as isLodashFunction } from 'lodash'

export function matchIsNumeric(text) {
  const isNumber = typeof text === 'number'
  const isString = matchIsString(text)
  return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
}

export function matchIsString(text) {
  return typeof text === 'string' || text instanceof String
}

export const convertCatalogToReactSelect = (data, valueObject, label, disabledProperty) =>
  data.map((item, index) => ({
    value: item[`${valueObject}`],
    label: item[`${label}`],
    isDisabled: item[`${disabledProperty}`] === '0' || false,
    index,
    ...item
  }))

export const isFunction = posibleFunction => isLodashFunction(posibleFunction)
