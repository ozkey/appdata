import normalizeEmail from '../emailNormalizer'

test('to lower case', () => {
  expect(normalizeEmail('Peter'))
  .toEqual('peter')
})
