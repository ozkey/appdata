import { greaterThan } from './greaterThan'

test('return no error', () => {
  expect(greaterThan(2, 1, 'err'))
    .toEqual(undefined)
})

test('return error', () => {
  expect(greaterThan(1, 2, 'err'))
    .toEqual('err')
})
