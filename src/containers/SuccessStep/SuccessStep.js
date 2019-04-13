import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import styled from 'styled-components'
import pick from 'lodash.pick'
import {
  Panel, Header, ProgressBar, Form as DefaultForm, Button
} from '../../components'
import SucceededIcon from '../../assets/img/checked.svg'
import Arrow from '../../assets/img/right-arrow.svg'
import { COLORS } from '../../utils'

const PREVIOUS_FIELDS = ['email', 'password', 'date_of_birth', 'gender', 'how_hear_about_us']

class SuccessStep extends Component {
  constructor (props) {
    super(props)

    const { previousValues, history } = props
    if (PREVIOUS_FIELDS.some(field => !previousValues[field])) {
      history.replace('/additional-info')
    }
  }

  onSubmit = (data) => {
    console.log(pick(data, PREVIOUS_FIELDS))
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <Panel>
        <Header>Thank you!</Header>
        <ProgressBar data-value={100} />
        <Form>
          <Img src={SucceededIcon} alt="success" />
          <SubmitButton onClick={handleSubmit(this.onSubmit)}>
            Go to Dashboard
            <Icon src={Arrow} alt="" />
          </SubmitButton>
        </Form>
      </Panel>
    )
  }
}

const Img = styled.img`
  width: 128px;
  height: 128px;
`
const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 5px;
`
const SubmitButton = styled(Button)`
  color: ${COLORS.accent};
  border: 1px solid;
  padding: 7px 5px;
  border-radius: 3px;
  margin-top: 30px;
`
const Form = styled(DefaultForm)`
  justify-content: center;
`

const selector = formValueSelector('signUp')

export default connect(state => ({
  previousValues: selector(state, ...PREVIOUS_FIELDS)
}))(reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SuccessStep))
