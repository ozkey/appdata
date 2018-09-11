export const mustBeDefined = (value, msg) =>  {
  if (value === undefined) return msg
  return undefined
}
