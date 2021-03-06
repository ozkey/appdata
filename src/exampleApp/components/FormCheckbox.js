import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'


const FormCheckbox = (props) => {
  const {name, id, onChange, errorBoolean, errorText, options, disabled, label} = props
  // { label: 'one', value: 1, disabled: false },
  const listItems = options.map((option) => {
    return (
      <FormControlLabel
        key={`${id}-${option.value}`}
        onChange={onChange}
        value={`${option.value}`} // convert to string - material component expects string only
        disabled={disabled || option.disabled}
        control={<Checkbox />}
        label={option.label}
        name={name}
      />
    )
  })

  return (
    <FormControl disabled={disabled} error={errorBoolean} >
      <FormLabel component="legend">{label}</FormLabel>
        {listItems}
      <FormHelperText id="name-helper-text">{errorText}</FormHelperText>
    </FormControl>
  )
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorBoolean: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

FormCheckbox.defaultProps = {
  errorText: undefined
}

export default FormCheckbox
