import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field as DefaultField, reduxForm, formValueSelector } from 'redux-form'
import styled from 'styled-components'
import {
  Panel, Header, Footer, ProgressBar, Form, DateField, Switcher, SelectField, Button
} from '../../components'
import Arrow from '../../assets/img/right-arrow.svg'
import { COLORS, validateSignUp } from '../../utils'

const HOW_HEAR_ABOUT_US_OPTIONS = [
  'From email',
  'Family',
  'Friends',
  'Google Search',
  'Other internet search',
  'Social sites',
  'Messangers',
  'Poster',
  'Event',
  'Local newspaper advert',
  'Learn Direct'
].map(value => ({ value, label: value }))

const PREVIOUS_FIELDS = ['email', 'password']

class AdditionalInfoStep extends Component {
  constructor (props) {
    super(props)

    const { previousValues, history } = props
    if (PREVIOUS_FIELDS.some(field => !previousValues[field])) {
      history.replace('/base-info')
    }
  }

  onSubmit = () => {
    const { history } = this.props
    history.push('/success')
  }

  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <Panel>
        <Header>Signup</Header>
        <ProgressBar data-value={100 / 3 * 2} />
        <Form id="base-info-form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name='date_of_birth' component={DateField} label="Date Of Birth" />
          <Field name='gender' component={Switcher} label="Gender" options={['male', 'female', 'unspecified']} />
          <Field
            name='how_hear_about_us'
            component={SelectField}
            label="Where did you hear about us?"
            options={HOW_HEAR_ABOUT_US_OPTIONS}
          />
        </Form>
        <Footer>
          <BackButton onClick={this.goBack}>
            Back
          </BackButton>
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
const BackButton = styled(Button)`
  color: ${COLORS.border};
`
const NextButton = styled(Button)`
  color: ${COLORS.accent};
`

const selector = formValueSelector('signUp')

export default connect(state => ({
  previousValues: selector(state, ...PREVIOUS_FIELDS)
}))(reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: validateSignUp
})(AdditionalInfoStep))
