import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils'

const TextField = (props) => {
  const { label, input, meta: { error, touched }, className, type = 'text' } = props
  return (
    <Containter className={className}>
      {touched && error
        ? <Error>{error}</Error>
        : <Label>{label}</Label>
      }
      <Input type={type} {...input} />
    </Containter>
  )
}

const Containter = styled.div`
  width: 100%;
`
const Label = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
`
const Error = styled(Label)`
  color: ${COLORS.danger};
`
const Input = styled.input`
  border-bottom: 1px solid ${COLORS.border};
  width: 100%;
`

export default TextField
