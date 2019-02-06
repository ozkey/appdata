import { getValue } from '../../../utils/appDataUtils'

export const checkBoxChange = (eventValue, _this) => {
  const id = _this.getId()
  const value = getValue(_this.props.formData, id)
  const copyOfValue = value ? value.slice() : [].slice()
  const indexOfValue = copyOfValue.indexOf(eventValue)
  if (indexOfValue < 0) {
    copyOfValue.push(eventValue)
  } else {
    copyOfValue.splice(indexOfValue, 1)
  }
  return copyOfValue
}
