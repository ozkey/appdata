import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// actions
import {
  changeValue,
  changeInlineError,
  changeOnBlurErrorWorkingData,
  changeOnBlurError,
  setOnBlurErrorForDisplay,
  changeSubmitErrorWorkingData,
  changeSubmitError
} from '../../redux/appDataActions'

// utils
import { normalize, getValue, getAppValue, getDisplayError } from '../../utils/formDataUtils'

class FormInput extends Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.getId = this.getId.bind(this)
    this.inputValue = undefined
    this.lastNormalizeAndValidate = getAppValue(this.props.formData, 'normalizeAndValidate')
  }

  componentDidMount() {
    this.componentInitialValidation()
  }

  componentWillUpdate(nextProps) {
    const id = this.getId()
    const indexId = this.getIndexId()
    const itemId = this.getItemId()

    const newInputIndex = getValue(nextProps.formData, indexId)
    const newInputItem = getValue(nextProps.formData, itemId)

    const { inputValue } = this
    const normalizeAndValidate = getAppValue(nextProps.formData, 'normalizeAndValidate')

    // if disabled remove errors
    if (this.props.disabled === false && nextProps.disabled === true) {
      this.removeErrors(this.props.path, this.props.name)
    }

    // if enabled then validate field
    if (this.props.disabled === true && nextProps.disabled === false) {
      const newInputValue = getValue(nextProps.formData, id)
      this.setValidationInStore(newInputValue, newInputItem, newInputIndex)
    }

    if (this.props.disabled) return
    if (this.lastNormalizeAndValidate !== normalizeAndValidate) { // this means there is an action to validate all inputs in form
      this.lastNormalizeAndValidate = normalizeAndValidate
      const newInputValue = normalize(inputValue, this.props.normalizer)
      if (inputValue !== newInputValue) {
        // value changed so set it in store that will in turn trigger a validation when we get the new props
        this.props.dispatch(changeValue(this.props.path, this.props.name, newInputValue))
      } else {
        // value has not change so we just need to validate it
        this.setValidationInStore(inputValue, newInputItem, newInputIndex)
      }
    } else {
      // has value has changed programmatically?
      const newInputValue = getValue(nextProps.formData, id)
      let valueHasChanged = inputValue !== newInputValue

      if (Array.isArray(inputValue) || Array.isArray(newInputValue)) { // radio and checkbox values are in an array
        valueHasChanged = JSON.stringify(inputValue) !== JSON.stringify(newInputValue)
      }

      if (valueHasChanged) {
        this.inputValue = newInputValue
        this.setValidationInStore(newInputValue, newInputItem, newInputIndex)
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name || this.props.path !== prevProps.path) {
      this.removeErrors(prevProps.path, prevProps.name)
      this.componentInitialValidation()
    }
  }

  componentWillUnmount() {
    this.removeErrors(this.props.path, this.props.name)
  }
  onChangeInput(e, value) {
    let inputValue
    if (e && e.target && e.target.value) {
      inputValue = e.target.value
    }
    if (value !== undefined) {
      inputValue = value
    }
    inputValue = normalize(inputValue, this.props.normalizer)

    this.props.dispatch(changeValue(this.props.path, this.props.name, inputValue))

    // keep internal copy of value to check if external change
    this.inputValue = inputValue

    if (!this.props.disabled) this.setValidationInStore(inputValue, undefined, undefined)

    // call parent on change
    this.props.onChange(e, inputValue)
  }

  onSelect(e, item, index) {
    if (this.props.onSelect) {
      this.props.onSelect(e, item, index)
    }
  }

  onBlurInput() {
    this.props.dispatch(setOnBlurErrorForDisplay(this.props.formData.onBlurErrorWorkingData))
  }

  setValidationInStore(inputValue, inputItem, inputIndex) {
    let inlineError = false
    let formError = false
    let submitError = false

    // Inline validation
    if (Array.isArray(this.props.inlineValidation)) {
      for (const validator of this.props.inlineValidation) { // eslint-disable-line
        inlineError = validator(inputValue, inputItem, inputIndex)
        if (inlineError !== false && inlineError !== undefined) break
      }
      this.props.dispatch(changeInlineError(this.props.path, this.props.name, inlineError))
    } else if (this.props.inlineValidation) {
      inlineError = this.props.inlineValidation(inputValue, inputItem, inputIndex)
      this.props.dispatch(changeInlineError(this.props.path, this.props.name, inlineError))
    }

    // OnBlurError validation
    if (Array.isArray(this.props.onBlurValidation)) {
      for (const validator of this.props.onBlurValidation) { // eslint-disable-line
        formError = validator(inputValue, inputItem, inputIndex)
        if (formError !== false && formError !== undefined) break
      }
      this.props.dispatch(changeOnBlurErrorWorkingData(this.props.path, this.props.name, formError))
    } else if (this.props.onBlurValidation) {
      formError = this.props.onBlurValidation(inputValue, inputItem, inputIndex)
      this.props.dispatch(changeOnBlurErrorWorkingData(this.props.path, this.props.name, formError))
    }

    // SubmitValidation
    if (Array.isArray(this.props.submitValidation)) {
      for (const validator of this.props.submitValidation) { // eslint-disable-line
        submitError = validator(inputValue, inputItem, inputIndex)
        if (submitError !== false && submitError !== undefined) break
      }
      this.props.dispatch(changeSubmitErrorWorkingData(this.props.path, this.props.name, submitError))
    } else if (this.props.submitValidation) {
      submitError = this.props.submitValidation(inputValue, inputItem, inputIndex)
      this.props.dispatch(changeSubmitErrorWorkingData(this.props.path, this.props.name, submitError))
    }

    // return true if in error
    return (inlineError !== false) || (formError !== false) || (submitError !== false)
  }

  getId() {
    const id = this.props.path === undefined ? `${this.props.name}` : `${this.props.path}.${this.props.name}`
    return id
  }

  getIndexId() {
    const id = this.props.path === undefined ? `${this.props.name}` : `${this.props.path}.${this.props.name}Index`
    return id
  }

  getItemId() {
    const id = this.props.path === undefined ? `${this.props.name}` : `${this.props.path}.${this.props.name}Item`
    return id
  }

  componentInitialValidation() {
    const id = this.getId()
    const indexId = this.getIndexId()
    const itemId = this.getItemId()
    const inputValue = getValue(this.props.formData, id)
    const inputIndex = getValue(this.props.formData, indexId)
    const inputItem = getValue(this.props.formData, itemId)
    if (!this.props.disabled) this.setValidationInStore(inputValue, inputItem, inputIndex)
  }

  removeErrors(path, name) {
    this.props.dispatch(changeInlineError(path, name, false))

    this.props.dispatch(changeOnBlurErrorWorkingData(path, name, false))
    this.props.dispatch(changeOnBlurError(path, name, false))

    this.props.dispatch(changeSubmitErrorWorkingData(path, name, false))
    this.props.dispatch(changeSubmitError(path, name, false))
  }

  render() {
    const {
      onChange,
      values,
      path,
      name,
      inlineValidation,
      onBlurValidation,
      submitValidation,
      dispatch,
      formData,
      formComponent,

      ...childProps
    } = this.props

    const id = this.getId()
    const injectProps = {
      name,
      id: name,
      onBlur: this.onBlurInput,
      onChange: this.onChangeInput,
      onSelect: this.onSelect
    }
    if (this.props.type === 'radio' || this.props.type === 'select') {
      injectProps.options = values
      injectProps.values = values
      injectProps.value = getValue(this.props.formData, id)
    } else if (this.props.type === 'checkbox') {
      injectProps.values = values
      injectProps.value = getValue(this.props.formData, id) || []
    } else {
      let value = getValue(this.props.formData, id)
      value = value === undefined ? '' : value.toString()
      injectProps.value = value
    }
    injectProps.errorText = this.props.disabled ? undefined : getDisplayError(this.props.formData, id)
    injectProps.errorBoolean = (typeof injectProps.errorText === 'string' && injectProps.errorText.length > 0)
    return (
      <this.props.formComponent
        {...childProps}
        {...injectProps}
      />
    )
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  formComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
  values: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  type: PropTypes.string, // checkbox or radio or select
  formData: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  submitValidation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array
  ]),
  inlineValidation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array
  ]),
  onBlurValidation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array
  ]),
  normalizer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array
  ])
}

FormInput.defaultProps = {
  path: undefined,
  inlineValidation: undefined,
  onBlurValidation: undefined,
  submitValidation: undefined,
  normalizer: undefined,
  values: undefined,
  type: undefined,
  onChange: () => {},
  onSelect: undefined,
  disabled: false
}

function mapStateToProps(store) {
  return {
    formData: store.appData
  }
}

export default connect(mapStateToProps)(FormInput)
