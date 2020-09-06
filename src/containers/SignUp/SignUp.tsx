import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { BaseInfoStep, AdditionalInfoStep, SuccessStep } from '..'

const SignUp = () => (
  <Container>
    <Switch>
      <Route path="/base-info" exact component={BaseInfoStep} />
      <Route path="/additional-info" exact component={AdditionalInfoStep} />
      <Route path="/success" exact component={SuccessStep} />
      <Redirect to="/base-info" />
    </Switch>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`

export default SignUp
