import dotPorp from 'dot-prop-immutable'
import getValue from 'lodash.get'

import { isEmptyValue, isEmptyArray, isEmptyObject } from '../../utils/objectArrayUtils'

const getParentPath = (path) => path.split('.').slice(0, -1).join('.')
const isRoot = (path) => path.length === 0

export const cleanupEmptyParentsRecursively = (state, path) => {
  const parentPath = getParentPath(path)
  // If parent is at root then cean up is done
  if (isRoot(parentPath)) return state

  const value = getValue(state, path)
  // No clean up needed, since value has a valid value
  if (!isEmptyValue(value)) return state

  const needToRemoveProp = isEmptyArray(value) || isEmptyObject(value)
  let cleanedState = state
  // If need to remove prop then delete the prop from parent
  if (needToRemoveProp) {
    cleanedState = dotPorp.delete(state, path)
  }

  // Since were not at the root, keep cleaning up parents
  return cleanupEmptyParentsRecursively(cleanedState, parentPath)
}
