import nameNormalizer from '../nameNormalizer'

test('Uppercase first character', () => {
  expect(nameNormalizer('peter'))
  .toEqual('Peter')
})
