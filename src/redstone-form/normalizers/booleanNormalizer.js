export default (value) => {
  if (value === 'true' || value === 'false') return value === 'true'
  return value
}
