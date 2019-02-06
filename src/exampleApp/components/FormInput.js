import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import PropTypes from 'prop-types'

const FormInput = (props) => {
  const { name, id, value, onChange, errorBoolean, errorText, disabled, label } = props
  return (
    <FormControl disabled={disabled} error={errorBoolean} >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={id} value={value} onChange={onChange} disabled={disabled} />
      <FormHelperText id="name-helper-text">{errorText}</FormHelperText>
    </FormControl>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  errorBoolean: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

FormInput.defaultProps = {
  errorText: undefined,
  value: undefined
}

export default (FormInput)
