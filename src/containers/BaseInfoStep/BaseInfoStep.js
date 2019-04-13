import React, { Component } from 'react'
import { Field as DefaultField, reduxForm } from 'redux-form'
import styled from 'styled-components'
import {
  Panel, Header, Footer, ProgressBar, Form, TextField, Button
} from '../../components'
import Arrow from '../../assets/img/right-arrow.svg'
import { COLORS, validateSignUp } from '../../utils'

class BaseInfoStep extends Component {
  onSubmit = (data) => {
    const { history } = this.props
    history.push('/additional-info')
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <Panel>
        <Header>Signup</Header>
        <ProgressBar data-value={100 / 3} />
        <Form id="base-info-form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field type="email" name='email' component={TextField} label="Email" />
          <Field type="password" name='password' component={TextField} label="Password" />
          <Field type="password" name='confirmPassword' component={TextField} label="Confirm Password" />
        </Form>
        <Footer>
          <NextButton type="submit" form="base-info-form">
            Next
            <Icon src={Arrow} alt="" />
          </NextButton>
        </Footer>
      </Panel>
    )
  }
}

const Field = styled(DefaultField)`
  &:nth-last-child(n+2) {
    margin-bottom: 20px;
  }
`
const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 5px;
`
const NextButton = styled(Button)`
  color: ${COLORS.accent};
  margin-left: auto;
`

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateSignUp
})(BaseInfoStep)
