import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import FormBaseInput from './Base/FormBaseInput'

const FormInputControler = (props) => {
  return (
    <FormBaseInput
      {...props}
      type="text"
    />
  )
}

FormInputControler.propTypes = {
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

FormInputControler.defaultProps = {
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

export default connect(mapStateToProps)(FormInputControler)
