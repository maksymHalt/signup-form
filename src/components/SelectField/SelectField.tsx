import React, { Component } from 'react'
import { WrappedFieldProps } from 'redux-form'
import styled from 'styled-components'
import ReactSelect, { OptionsType, StylesConfig } from 'react-select'
import { COLORS } from '../../utils'

type OptionType = { value: string }

type Props = WrappedFieldProps & {
  label: string,
  className: string,
  options: OptionsType<OptionType>,
  placeholder: string,
}

class SelectField extends Component<Props> {
  constructor (props: Props) {
    super(props)

    if (!props.input.value) {
      props.input.onChange(null)
    }
  }

  render () {
    const { label, input, meta: { error, touched }, className, options, placeholder = '' } = this.props
    return (
      <Container className={className}>
        {touched && error
          ? <Error>{error}</Error>
          : <Label>{label}</Label>
        }
        <ReactSelect
          {...input}
          value={options.find(option => option.value === input.value)}
          onChange={(option) => input.onChange((option as OptionType)?.value)}
          onBlur={() => input.onBlur(input.value || null)}
          styles={SelectStyles}
          options={options}
          placeholder={placeholder}
          isClearable={true}
        />
      </Container>
    )
  }
}

const Container = styled.div`
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
const SelectStyles: StylesConfig = {
  control: (provided) => ({ ...provided, borderColor: COLORS.border }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (provided) => ({ ...provided, color: COLORS.accent })
}

export default SelectField
