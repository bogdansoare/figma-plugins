import test from 'ava'
import { formatShort } from '../../src/format-short/format-short'

test('$1', function (t) {
  t.is(formatShort('$1', 'en-US'), '$1.00')
  t.is(formatShort('$1,', 'en-US'), '$1.00,')
  t.is(formatShort('X $1', 'en-US'), 'X $1.00')
  t.is(formatShort('X $1 ABC', 'en-US'), 'X $1.00 ABC')
  t.is(formatShort('X $1 ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(formatShort('$1 ABC', 'en-US'), '$1.00 ABC')
  t.is(formatShort('$1 ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('$1 USD', function (t) {
  t.is(formatShort('$1 USD', 'en-US'), '$1.00')
  t.is(formatShort('$1 USD,', 'en-US'), '$1.00,')
  t.is(formatShort('X $1 USD', 'en-US'), 'X $1.00')
  t.is(formatShort('X $1 USD ABC', 'en-US'), 'X $1.00 ABC')
  t.is(formatShort('X $1 USD ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(formatShort('$1 USD ABC', 'en-US'), '$1.00 ABC')
  t.is(formatShort('$1 USD ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('1 $', function (t) {
  t.is(formatShort('1 $', 'en-US'), '$1.00')
  t.is(formatShort('1 $,', 'en-US'), '$1.00,')
  t.is(formatShort('X 1 $', 'en-US'), 'X $1.00')
  t.is(formatShort('X 1 $ ABC', 'en-US'), 'X $1.00 ABC')
  t.is(formatShort('X 1 $ ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(formatShort('1 $ ABC', 'en-US'), '$1.00 ABC')
  t.is(formatShort('1 $ ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('1 $ USD', function (t) {
  t.is(formatShort('1 $ USD', 'en-US'), '$1.00')
  t.is(formatShort('1 $ USD,', 'en-US'), '$1.00,')
  t.is(formatShort('X 1 $ USD', 'en-US'), 'X $1.00')
  t.is(formatShort('X 1 $ USD ABC', 'en-US'), 'X $1.00 ABC')
  t.is(formatShort('X 1 $ USD ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(formatShort('1 $ USD ABC', 'en-US'), '$1.00 ABC')
  t.is(formatShort('1 $ USD ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('$3.14', function (t) {
  t.is(formatShort('$3.14', 'en-US'), '$3.14')
  t.is(formatShort('$3.14,', 'en-US'), '$3.14,')
  t.is(formatShort('X $3.14', 'en-US'), 'X $3.14')
  t.is(formatShort('X $3.14 ABC', 'en-US'), 'X $3.14 ABC')
  t.is(formatShort('X $3.14 ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(formatShort('$3.14 ABC', 'en-US'), '$3.14 ABC')
  t.is(formatShort('$3.14 ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('$3.14 USD', function (t) {
  t.is(formatShort('$3.14 USD', 'en-US'), '$3.14')
  t.is(formatShort('$3.14 USD,', 'en-US'), '$3.14,')
  t.is(formatShort('X $3.14 USD', 'en-US'), 'X $3.14')
  t.is(formatShort('X $3.14 USD ABC', 'en-US'), 'X $3.14 ABC')
  t.is(formatShort('X $3.14 USD ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(formatShort('$3.14 USD ABC', 'en-US'), '$3.14 ABC')
  t.is(formatShort('$3.14 USD ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('3,14 $', function (t) {
  t.is(formatShort('3,14 $', 'en-US'), '$3.14')
  t.is(formatShort('3,14 $,', 'en-US'), '$3.14,')
  t.is(formatShort('X 3,14 $', 'en-US'), 'X $3.14')
  t.is(formatShort('X 3,14 $ ABC', 'en-US'), 'X $3.14 ABC')
  t.is(formatShort('X 3,14 $ ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(formatShort('3,14 $ ABC', 'en-US'), '$3.14 ABC')
  t.is(formatShort('3,14 $ ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('3,14 $ USD', function (t) {
  t.is(formatShort('3,14 $ USD', 'en-US'), '$3.14')
  t.is(formatShort('3,14 $ USD,', 'en-US'), '$3.14,')
  t.is(formatShort('X 3,14 $ USD', 'en-US'), 'X $3.14')
  t.is(formatShort('X 3,14 $ USD ABC', 'en-US'), 'X $3.14 ABC')
  t.is(formatShort('X 3,14 $ USD ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(formatShort('3,14 $ USD ABC', 'en-US'), '$3.14 ABC')
  t.is(formatShort('3,14 $ USD ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('$123,456.78', function (t) {
  t.is(formatShort('$123,456.78', 'en-US'), '$123,456.78')
  t.is(formatShort('$123,456.78,', 'en-US'), '$123,456.78,')
  t.is(formatShort('X $123,456.78', 'en-US'), 'X $123,456.78')
  t.is(formatShort('X $123,456.78 ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(formatShort('X $123,456.78 ABC DEF', 'en-US'), 'X $123,456.78 ABC DEF')
  t.is(formatShort('$123,456.78 ABC', 'en-US'), '$123,456.78 ABC')
  t.is(formatShort('$123,456.78 ABC DEF', 'en-US'), '$123,456.78 ABC DEF')
})

test('$123,456.78 USD', function (t) {
  t.is(formatShort('$123,456.78 USD', 'en-US'), '$123,456.78')
  t.is(formatShort('$123,456.78 USD,', 'en-US'), '$123,456.78,')
  t.is(formatShort('X $123,456.78 USD', 'en-US'), 'X $123,456.78')
  t.is(formatShort('X $123,456.78 USD ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(
    formatShort('X $123,456.78 USD ABC DEF', 'en-US'),
    'X $123,456.78 ABC DEF'
  )
  t.is(formatShort('$123,456.78 USD ABC', 'en-US'), '$123,456.78 ABC')
  t.is(formatShort('$123,456.78 USD ABC DEF', 'en-US'), '$123,456.78 ABC DEF')
})

test('123.456,78 $', function (t) {
  t.is(formatShort('123.456,78 $', 'en-US'), '$123,456.78')
  t.is(formatShort('123.456,78 $,', 'en-US'), '$123,456.78,')
  t.is(formatShort('X 123.456,78 $', 'en-US'), 'X $123,456.78')
  t.is(formatShort('X 123.456,78 $ ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(formatShort('X 123.456,78 $ ABC DEF', 'en-US'), 'X $123,456.78 ABC DEF')
  t.is(formatShort('123.456,78 $ ABC', 'en-US'), '$123,456.78 ABC')
  t.is(formatShort('123.456,78 $ ABC DEF', 'en-US'), '$123,456.78 ABC DEF')
})

test('123.456,78 $ USD', function (t) {
  t.is(formatShort('123.456,78 $ USD', 'en-US'), '$123,456.78')
  t.is(formatShort('123.456,78 $ USD,', 'en-US'), '$123,456.78,')
  t.is(formatShort('X 123.456,78 $ USD', 'en-US'), 'X $123,456.78')
  t.is(formatShort('X 123.456,78 $ USD ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(
    formatShort('X 123.456,78 $ USD ABC DEF', 'en-US'),
    'X $123,456.78 ABC DEF'
  )
  t.is(formatShort('123.456,78 $ USD ABC', 'en-US'), '$123,456.78 ABC')
  t.is(formatShort('123.456,78 $ USD ABC DEF', 'en-US'), '$123,456.78 ABC DEF')
})
