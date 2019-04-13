import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { className, children, type = 'button', ...otherProps } = props
  return (
    <ButtonComponent
      className={className}
      type={type}
      {...otherProps}
    >
      {children}
    </ButtonComponent>
  )
}

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
`

export default Button
