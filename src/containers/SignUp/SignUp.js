import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { FirstStep } from '..'

const SignUp = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={FirstStep} />
      <Redirect to="/" />
    </Switch>
  </Router>
)

export default SignUp
