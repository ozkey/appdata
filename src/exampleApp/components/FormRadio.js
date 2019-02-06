import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'


const FormInput = (props) => {
  const {name, id, value, onChange, errorBoolean, errorText, options, disabled, label} = props
  // { label: 'one', value: 1, disabled: false },
  const listItems = options.map((option) => {
    return (
      <FormControlLabel
        key={id}
        value={`${option.value}`} // convert to string - material component expects string only
        disabled={disabled || option.disabled}
        control={<Radio />}
        label={option.label}
        name={name}
      />
    )
  })

  return (
    <FormControl disabled={disabled} error={errorBoolean} >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={`${value}`} // convert to string - material component expects string only
        onChange={onChange}
      >
        {listItems}
      </RadioGroup>

      <FormHelperText id="name-helper-text">{errorText}</FormHelperText>
    </FormControl>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorBoolean: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
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
