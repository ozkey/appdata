export const isNullOrUndefined = (value) => value === null || value === undefined
export const isArray = (value) => !isNullOrUndefined(value) && Array.isArray(value)
export const isObject = (value) => !isNullOrUndefined(value) && typeof value === 'object' && !isArray(value)
export const isEmptyArray = (value) => isArray(value) && value.length === 0
export const isEmptyObject = (value) => isObject(value) && Object.keys(value).length === 0
export const isEmptyValue = (value) => isNullOrUndefined(value) || isEmptyArray(value) || isEmptyObject(value);