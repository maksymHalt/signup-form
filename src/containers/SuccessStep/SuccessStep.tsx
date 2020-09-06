import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouterProps } from 'react-router'
import { reduxForm, formValueSelector, InjectedFormProps } from 'redux-form'
import styled from 'styled-components'
import pick from 'lodash.pick'
import {
  Panel, Header, ProgressBar, Form as DefaultForm, Button
} from '../../components'
import SucceededIcon from '../../assets/img/checked.svg'
import Arrow from '../../assets/img/right-arrow.svg'
import { RootState } from '../../redux/store'
import { COLORS, FormValues } from '../../utils'

const ALL_FIELDS = ['email', 'password', 'date_of_birth', 'gender', 'how_hear_about_us']
const PREVIOUS_FIELDS = ['email', 'password', 'date_of_birth', 'gender']

const mapState = (state: RootState) => ({
  previousValues: selector(state, ...PREVIOUS_FIELDS)
})

const connector = connect(mapState)

type BaseProps = RouterProps & ConnectedProps<typeof connector>

type Props = BaseProps & InjectedFormProps<FormValues, BaseProps>

class SuccessStep extends Component<Props> {
  constructor (props: Props) {
    super(props)

    const { previousValues, history } = props
    if (PREVIOUS_FIELDS.some(field => !previousValues[field])) {
      history.replace('/additional-info')
    }
  }

  onSubmit = (data: FormValues) => {
    console.log(pick(data, ALL_FIELDS))
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

export default connector(reduxForm<FormValues, BaseProps>({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SuccessStep))
