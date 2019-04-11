import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils'

const TextField = (props) => {
  const { label, input, meta: { error }, className } = props
  return (
    <Containter className={className}>
      <Label>{error || label}</Label>
      <Input {...input} type="text" />
    </Containter>
  )
}

const Containter = styled.div`
  width: 100%;
`
const Label = styled.div`
  text-transform: uppercase;
`
const Input = styled.input`
  border-bottom: 1px solid ${COLORS.border};
  width: 100%;
`

export default TextField
