import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import FormBaseInput from './BaseInput/FormBaseInput'

const FormInputController = (props) => {
  return (
    <FormBaseInput
      {...props}
      type="text"
    />
  )
}

FormInputController.propTypes = {
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
  appData: PropTypes.object.isRequired,
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

FormInputController.defaultProps = {
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
    appData: store.appData
  }
}

export default connect(mapStateToProps)(FormInputController)
