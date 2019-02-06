import _has from 'lodash.has'
import _get from 'lodash.get'

export function getStoreData(form, id) {
  const formPathAsString = `${id}`
  const hasValue = _has(form, formPathAsString)
  if (hasValue === false) return undefined
  return _get(form, formPathAsString)
}

export const getValue = (form, id) => {
  const formPathAsString = `value.${id}`
  return getStoreData(form, formPathAsString)
}

export const getAppValue = (form, id) => {
  const formPathAsString = `app.${id}`
  return getStoreData(form, formPathAsString)
}

export const getOnBlurError = (form, id) => {
  const formPathAsString = `onBlurError.${id}`
  return getStoreData(form, formPathAsString)
}

export const getInlineError = (form, id) => {
  const formPathAsString = `inlineError.${id}`
  return getStoreData(form, formPathAsString)
}

export const getSubmitError = (form, id) => {
  const formPathAsString = `submitError.${id}`
  return getStoreData(form, formPathAsString)
}

export const getDisplayError = (form, id) => {
  return getInlineError(form, id) || getOnBlurError(form, id) || getSubmitError(form, id)
}

export function normalize(_inputValue, normalizerProp) {
  let inputValue = _inputValue
  // console.log('=============> inputValue', inputValue)
  if (Array.isArray(normalizerProp)) {
    normalizerProp.forEach(normalizer => {
      inputValue = normalizer(inputValue)
    })
  } else if (normalizerProp !== undefined) {
    inputValue = normalizerProp(inputValue)
  }
  return inputValue
}

export function findError(formError) {
  // console.log(' findError ')
  let result = null
  if (formError instanceof Array) {
    console.log(' TODO to be tested')
    for (let i = 0; i < formError.length; i++) {
      result = findError(formError[i])
      if (result) {
        return `${i}.${result}`
      }
    }
  } else {
    for (const prop in formError) {  // eslint-disable-line
      if (formError[prop] instanceof Object || formError[prop] instanceof Array) {
        result = findError(formError[prop])
        if (result) {
          return `${prop}.${result}`
        }
      } else {
        const val = formError[prop]
        if (val !== false) {
          return prop
        }
      }
    }
  }
  return false
}

export function isFormInError(form) {
  let fistFormError
  fistFormError = findError(form.inlineError)
  if (fistFormError) { return fistFormError }
  fistFormError = findError(form.onBlurWorkingData)
  if (fistFormError) { return fistFormError }
  fistFormError = findError(form.submitErrorWorkingData)
  return fistFormError
}

export function hasValueNotNull(form, formPathAsString) {
  const hasValue = _has(form, formPathAsString)
  if (hasValue === false) return false
  return _get(form, formPathAsString) !== null
}
