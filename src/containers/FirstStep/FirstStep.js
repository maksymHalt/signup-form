import React from 'react'
import { Panel, Header, ProgressBar, Form, TextField } from '../../components'
import { Field as DefaultField, reduxForm } from 'redux-form'
import styled from 'styled-components'

const FirstStep = () => (
  <Panel>
    <Header>Sign Up</Header>
    <ProgressBar data-value={100 / 3} />
    <Form>
      <Field name='email' component={TextField} label="Email" />
      <Field name='password' component={TextField} label="Password" />
      <Field name='confirmPassword' component={TextField} label="Confirm Password" />
    </Form>
  </Panel>
)

const Field = styled(DefaultField)`
  &:nth-last-child(n+2) {
    margin-bottom: 20px;
  }
`

export default reduxForm({ form: 'signUp' })(FirstStep)
