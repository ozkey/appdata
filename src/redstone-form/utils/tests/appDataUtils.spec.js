import { normalizer } from '../../normalizers/index'
import { findError, normalize } from '../appDataUtils'

test('true findError', () => {
  const isInErr = findError({ fieldName: 'err' })
  expect(isInErr)
    .toEqual('fieldName')
})


test('true findError', () => {
  const isInErr = findError({ path1: { fieldName: false }, path2: { fieldName: 'err' } })
  expect(isInErr)
    .toEqual('path2.fieldName')
})

test('true findError bool', () => {
  const isInErr = findError({ path1: { fieldName: false }, path2: { fieldName: true } })
  expect(isInErr)
    .toEqual('path2.fieldName')
})

test('true findError bool more', () => {
  const isInErr = findError({ a: { a_a: false }, b: { b_a: false, b_b: true } })
  expect(isInErr)
    .toEqual('b.b_b')
})

test('false findError', () => {
  const isInErr = findError({ fieldName: false })
  expect(isInErr)
    .toEqual(false)
})

test('false findError', () => {
  const isInErr = findError({ path1: { fieldName: false }, path2: { fieldName: false } })
  expect(isInErr)
    .toEqual(false)
})


test('normalize', () => {
  const value = normalize('123qwe?', normalizer.alphaNumNormalizer)
  expect(value)
    .toEqual('123qwe')
})

test('normalize array', () => {
  const value = normalize('123qwe?', [normalizer.alphaNumNormalizer])
  expect(value)
    .toEqual('123qwe')
})

test('normalize array more than one', () => {
  const value = normalize('123qwe?', [normalizer.alphaNumNormalizer, normalizer.numberNormalizer])
  expect(value)
    .toEqual(123)
})


test('false findError', () => {
  const isInErr = findError({ path1: { fieldName: false }, path2: { fieldName: false } })
  expect(isInErr)
    .toEqual(false)
})
