export const FORM_DATA_CHANGE = 'FORM_DATA_CHANGE'
export const CHANGE_VALUE = 'CHANGE_VALUE'
export const CHANGE_APP = 'CHANGE_APP'
export const INLINE_ERROR = 'INLINE_ERROR'
export const ONBLUR_ERROR_WD = 'ONBLUR_ERROR_WORKING_DATA'
export const ONBLUR_ERROR = 'ONBLUR_ERROR'
export const ONBLUR_ERROR_FOR_DISPLAY = 'ONBLUR_ERROR_FOR_DISPLAY'
export const SUBMIT_ERROR_WD = 'SUBMIT_ERROR_WORKING_DATA'
export const SUBMIT_ERROR = 'SUBMIT_ERROR'
export const SUBMIT_ERROR_FOR_DISPLAY = 'SET_SUBMIT_ERROR_FOR_DISPLAY'
export const NORMALIZE_AND_VALIDATE = 'NORMALIZE_AND_VALIDATE'

export const changeStore = (path, name, value) => ({
  type: FORM_DATA_CHANGE,
  path,
  name,
  value
})

// may not be a pure function but it works OK !
export const normalizeAndValidate = (value = new Date().getTime()) => ({
  type: NORMALIZE_AND_VALIDATE,
  path: 'app',
  name: 'normalizeAndValidate',
  value
})

export const changeValue = (_path, name, value) => ({
  type: CHANGE_VALUE,
  path: _path === undefined ? 'value' : `value.${_path}`,
  name,
  value
})

export const changeApp = (_path, name, value) => ({
  type: CHANGE_APP,
  path: _path === undefined ? 'app' : `app.${_path}`,
  name,
  value
})

export const changeInlineError = (_path, name, _value) => {
  const value = _value === false ? undefined : _value
  return ({
    type: INLINE_ERROR,
    path: _path === undefined ? 'inlineError' : `inlineError.${_path}`,
    name,
    value
  })
}

export const changeOnBlurErrorWorkingData = (_path, name, _value) => {
  const value = _value === false ? undefined : _value
  return ({
    type: ONBLUR_ERROR_WD,
    path: _path === undefined ? 'onBlurErrorWorkingData' : `onBlurErrorWorkingData.${_path}`,
    name,
    value
  })
}

export const changeOnBlurError = (_path, name, _value) => {
  const value = _value === false ? undefined : _value
  return ({
    type: ONBLUR_ERROR,
    path: _path === undefined ? 'onBlurError' : `onBlurError.${_path}`,
    name,
    value
  })
}

export const setOnBlurErrorForDisplay = () => ({
  type: ONBLUR_ERROR_FOR_DISPLAY
})


export const changeSubmitErrorWorkingData = (_path, name, _value) => {
  const value = _value === false ? undefined : _value
  return ({
    type: SUBMIT_ERROR_WD,
    path: _path === undefined ? 'submitErrorWorkingData' : `submitErrorWorkingData.${_path}`,
    name,
    value
  })
}

export const changeSubmitError = (_path, name, _value) => {
  const value = _value === false ? undefined : _value
  return ({
    type: SUBMIT_ERROR,
    path: _path === undefined ? 'submitError' : `submitError.${_path}`,
    name,
    value
  })
}

export const setSubmitErrorForDisplay = () => ({
  type: SUBMIT_ERROR_FOR_DISPLAY
})
