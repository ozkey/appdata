// This normalizer will convert 01 to 1 both in the field and the store
export const numberNormalizer = value => {
  // console.log('=======>')
  const _value = parseInt(value, 10)
  return isNaN(_value) ? '' : _value
}

// this normalizer will not allow you to type zero at all
export const numberNormalizerNoLeadingZero = value => {
  let inputValue
  if (isNaN(parseFloat(value)) || value === 0 || value === '0') inputValue = ''
  else inputValue = Number(value)

  return inputValue
}

// A number with a leading zero like a telephone number
export const numberNormalizerAsString = value => {
  let inputValue
  if (isNaN(parseFloat(value))) inputValue = ''
  else inputValue = value

  return inputValue
}
