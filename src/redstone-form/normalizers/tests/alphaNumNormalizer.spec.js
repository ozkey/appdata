import alphaNumNormalizer from '../alphaNumNormalizer'

test('Special characters are removed', () => {
  expect(alphaNumNormalizer('Az1!@#$%^&*()~\`_=+-[]\\{}|;\':\",./<>?'))
  .toEqual('Az1')
})

test('Alpha numerics are OK', () => {
  expect(alphaNumNormalizer('afdss6756HGJGJS'))
  .toEqual('afdss6756HGJGJS')
})
