import {
  numberNormalizer,
  numberNormalizerNoLeadingZero,
  numberNormalizerAsString
} from '../numberNormalizer'

describe('number normalize tests', () => {
  test('numberNormalizer should not return anything if letters used', () => {
    expect(numberNormalizer('peter'))
    .toEqual('')
  })
  test('numberNormalizer should return numbers if number of strings used', () => {
    expect(numberNormalizer('10'))
    .toEqual(10)
  })
  test('numberNormalizer should return numbers', () => {
    expect(numberNormalizer(10))
    .toEqual(10)
  })
  test('numberNormalizer should return numbers even number + string', () => {
    expect(numberNormalizer('1d'))
    .toEqual(1)
  })
  test('numberNormalizerAsString should not return letters', () => {
    expect(numberNormalizerAsString('peter'))
    .toEqual('')
  })
  test('numberNormalizerAsString should return numbers starting with zero', () => {
    expect(numberNormalizerAsString('012'))
    .toEqual('012')
  })
  test('numberNormalizerNoLeadingZero should return number minus leading 0', () => {
    expect(numberNormalizerNoLeadingZero('01'))
    .toEqual(1)
  })
})
