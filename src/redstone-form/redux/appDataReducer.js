import dotProp from 'dot-prop-immutable'
import {
  CHANGE_APP,
  CHANGE_VALUE,
  FORM_DATA_CHANGE,
  INLINE_ERROR,
  NORMALIZE_AND_VALIDATE,
  ONBLUR_ERROR,
  ONBLUR_ERROR_FOR_DISPLAY,
  ONBLUR_ERROR_WD,
  SUBMIT_ERROR,
  SUBMIT_ERROR_FOR_DISPLAY,
  SUBMIT_ERROR_WD
} from './appDataActions'
import { cleanupEmptyParentsRecursively } from './utils/cleanupEmptyParentsRecursively'

export const initState = {
  value: {},
  inlineError: {},
  onBlurError: {},
  onBlurErrorWorkingData: {},
  submitError: {},
  submitErrorWorkingData: {},
}

/* The reducer */

const setData = (action, state) => {
  const fullPath = action.path === undefined ? `${action.name}` : `${action.path}.${action.name}`
  if (action.value === undefined) {
    const newStateAfterDelete = dotProp.delete(state, fullPath)
    return cleanupEmptyParentsRecursively(newStateAfterDelete, fullPath)
  }

  return dotProp.set(state, fullPath, action.value)
}

export default function FormDataReducer(state = initState, action) {
  switch (action.type) {
    case FORM_DATA_CHANGE:
    case CHANGE_VALUE:
    case CHANGE_APP:
    case INLINE_ERROR:
    case ONBLUR_ERROR_WD:
    case ONBLUR_ERROR:
    case SUBMIT_ERROR_WD:
    case SUBMIT_ERROR:
    case NORMALIZE_AND_VALIDATE:
      {
        return setData(action, state)
      }
    case SUBMIT_ERROR_FOR_DISPLAY:
      {
        return {
          ...state,
          submitError: state.submitErrorWorkingData
        }
      }
    case ONBLUR_ERROR_FOR_DISPLAY:
      {
        return {
          ...state,
          onBlurError: state.onBlurErrorWorkingData
        }
      }
    default:
      return state
  }
}
