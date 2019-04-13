import React, { Component } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils'

class Switcher extends Component {
  constructor (props) {
    super(props)

    if (!props.input.value) {
      props.input.onChange(props.options[0])
    }
  }

  render () {
    const { label, input, meta: { error, touched }, className, options } = this.props
    return (
      <Containter className={className}>
        {touched && error
          ? <Error>{error}</Error>
          : <Label>{label}</Label>
        }
        <InputContainer>
          {options.map(option => (
            <RadioButton key={option} checked={option === input.value}>
              <RadioInput
                type="radio"
                {...input}
                checked={option === input.value}
                value={option}
              />
              {option}
            </RadioButton>
          ))}
        </InputContainer>
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
const InputContainer = styled.div`
  display: flex;
  
`
const RadioInput = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;
`
const RadioButton = styled.label`
  border: 1px solid ${COLORS.border};
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  cursor: pointer;

  ${({ checked }) => checked && `
    background-color: ${COLORS.accent};
    color: ${COLORS.white};
    font-weight: 700;
  `}

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-child(n+2) {
    border-left: 0;
  }
`

export default Switcher
