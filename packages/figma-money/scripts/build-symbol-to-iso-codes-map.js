const isoCodes = require('../src/data/iso-codes.json')
const sortObjectByKey = require('./sort-object-by-key')

let result
result = mapSymbolToIsoCodes()
result = setDefaultIsoCodes(result)
result = sortObjectByKey(result)
console.log(JSON.stringify(result, null, 2))

function mapSymbolToIsoCodes () {
  const symbolRegex = new RegExp(
    ['(?:([^0\\s]*)\\s?)', '0', '(?:\\s?([^0\\s]*))'].join('')
  )
  const result = {}
  for (const isoCode of isoCodes) {
    const locale = isoCode.substring(0, 2).toLowerCase()
    const string = new Intl.NumberFormat(`en-${locale}`, {
      style: 'currency',
      currency: isoCode,
      maximumSignificantDigits: 1
    }).format(0)
    const m = string.match(symbolRegex)
    if (m === null) {
      result[isoCode] = isoCode
      continue
    }
    // extract the symbol off the rendered string
    let symbol = m[1] !== '' ? m[1] : m[2]
    if (symbol[symbol.length - 1] === '$') {
      symbol = '$'
    }
    if (typeof result[symbol] === 'undefined') {
      result[symbol] = isoCode
      continue
    }
    if (typeof result[symbol] === 'string') {
      result[symbol] = [result[symbol]]
    }
    result[symbol].push(isoCode)
  }
  return result
}

function setDefaultIsoCodes (isoCodes) {
  const mapSymbolToDefaultIsoCode = {
    $: 'USD',
    K: 'PGK',
    Rs: 'PKR',
    '£': 'GBP'
  }
  const result = {}
  for (const key of Object.keys(mapSymbolToDefaultIsoCode)) {
    result[key] = {
      isoCodes: isoCodes[key],
      defaultIsoCode: mapSymbolToDefaultIsoCode[key]
    }
  }
  return {
    ...isoCodes,
    ...result
  }
}
