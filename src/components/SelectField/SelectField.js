import React, { Component } from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'
import { COLORS } from '../../utils'

class SelectField extends Component {
  constructor (props) {
    super(props)

    if (!props.input.value) {
      props.input.onChange(null)
    }
  }

  render () {
    const { label, input, meta: { error, touched }, className, options, placeholder = '' } = this.props
    return (
      <Containter className={className}>
        {touched && error
          ? <Error>{error}</Error>
          : <Label>{label}</Label>
        }
        <ReactSelect
          {...input}
          value={options.find(option => option.value === input.value)}
          onChange={(option) => input.onChange(option && option.value)}
          onBlur={() => input.onBlur(input.value || null)}
          styles={SelectStyles}
          options={options}
          placeholder={placeholder}
          isClearable={true}
        />
      </Containter>
    )
  }
}

const Containter = styled.div`
  width: 100%;
`
const Label = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`
const Error = styled(Label)`
  color: ${COLORS.danger};
`
const SelectStyles = {
  control: (provided) => ({ ...provided, borderColor: COLORS.border }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (provided) => ({ ...provided, color: COLORS.accent })
}

export default SelectField
