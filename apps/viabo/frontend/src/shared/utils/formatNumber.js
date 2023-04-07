import numeral from 'numeral'

function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00')
}

function fPercent(number) {
  return numeral(number / 100).format('0.0%')
}

function fNumber(number) {
  return numeral(number).format()
}

function fShortenNumber(number) {
  return numeral(number).format('0.00a').replace('.00', '')
}

function fData(number) {
  return numeral(number).format('0.0 b')
}

export { fCurrency, fPercent, fNumber, fShortenNumber, fData }
