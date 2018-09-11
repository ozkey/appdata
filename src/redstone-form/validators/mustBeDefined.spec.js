import { mustBeDefined } from './mustBeDefined'

test('return no error', () => {
  expect(mustBeDefined('val', 'err'))
    .toEqual(undefined)
})

test('return error', () => {
  expect(mustBeDefined(undefined, 'err'))
    .toEqual('err')
})
