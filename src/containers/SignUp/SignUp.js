import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { FirstStep } from '..'

const SignUp = () => (
  <Container>
    <Switch>
      <Route path="/" exact component={FirstStep} />
      <Redirect to="/" />
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`

export default SignUp
