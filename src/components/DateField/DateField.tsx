import React, { Component, ChangeEvent, createRef } from 'react'
import styled from 'styled-components'
import Cleave from 'cleave.js/react'
import { WrappedFieldProps } from 'redux-form'
import { COLORS } from '../../utils'

type DateData = {
  day: string,
  month: string,
  year: string
}

const validateFields = ({ day, month, year }: DateData) => (
  day && day.length === 2 &&
  month && month.length === 2 &&
  year && year.length === 4
)

type Props = WrappedFieldProps & { className: string, label: string }

type State = DateData & { error: string }

class DateField extends Component<Props, State> {
  private fields = {
    day: createRef<any>(),
    month: createRef<any>(),
    year: createRef<any>()
  }
  private nativeFields: {
    day?: HTMLInputElement,
    month?: HTMLInputElement,
    year?: HTMLInputElement
  } = {}
  private nativeFieldList: object[] = []


  constructor (props: Props) {
    super(props)

    if (props.input.value) {
      const date = new Date(props.input.value)
      this.state = {
        day: `${date.getDate()}`,
        month: `${date.getMonth() + 1}`,
        year: `${date.getFullYear()}`,
        error: ''
      }
    } else {
      this.state = {
        day: '',
        month: '',
        year: '',
        error: ''
      }
    }
  }

  componentDidMount () {
    this.nativeFields = Object.entries(this.fields)
      .reduce((fields, [name, { current: { element } }]) => ({ ...fields, [name]: element }), {})
    this.nativeFieldList = Object.values(this.fields).map(({ current: { element } }) => element)
  }

  onFieldChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    const { [name as keyof DateData]: oldValue } = this.state
    this.setState({ [name]: value } as State, () => {
      // moving between fields
      const isAddChars = oldValue < value
      if (isAddChars) {
        if (name === 'day' && value.length === 2) {
          this.nativeFields.month?.focus()
        }
        if (name === 'month' && value.length === 2) {
          this.nativeFields.year?.focus()
        }
      } else {
        if (name === 'year' && value.length === 0) {
          this.nativeFields.month?.focus()
        }
        if (name === 'month' && value.length === 0) {
          this.nativeFields.day?.focus()
        }
      }

      const { day, month, year } = this.state
      if (!day && !month && !year) {
        this.setState({ error: '' })
        return
      }
      if (!validateFields({ day, month, year })) {
        this.setState((_, { label }) => ({ error: `${label} has invalid format` }))
        this.props.input.onChange(0)
        return
      }
      this.setState({ error: '' })
      const date = new Date(+year, +month - 1, +day)
      this.props.input.onChange(date.getTime())
    })
  }

  render () {
    const { label, input, meta: { error, touched }, className } = this.props
    const { day, month, year, error: internalError } = this.state
    const inputProps = {
      type: 'text',
      onChange: this.onFieldChange,
      onFocus: input.onFocus,
      onBlur: ({ relatedTarget }: React.FocusEvent) =>
        !this.nativeFieldList.includes(relatedTarget || {}) && input.onBlur(undefined)
    }
    const errorText = touched && (internalError || error)
    return (
      <Container className={className}>
        {errorText
          ? <Error>{errorText}</Error>
          : <Label>{label}</Label>
        }
        <InputContainer>
          <Input
            {...inputProps}
            name="day"
            value={day}
            placeholder="DD"
            options={{ date: true, datePattern: ['d'] }}
            ref={this.fields.day}
          />
          <Input
            {...inputProps}
            name="month"
            value={month}
            placeholder="MM"
            options={{ date: true, datePattern: ['m'] }}
            ref={this.fields.month}
          />
          <Input
            {...inputProps}
            name="year"
            value={year}
            placeholder="YYYY"
            options={{ date: true, datePattern: ['Y'] }}
            ref={this.fields.year}
          />
        </InputContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
`
const Label = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`
const Error = styled(Label)`
  color: ${COLORS.danger};
`
const InputContainer = styled.div`
  display: flex;
`
const Input = styled(Cleave)`
  border: 1px solid ${COLORS.border};
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  min-width: 0;
  text-align: center;
  padding: 10px 5px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-child(n+2) {
    border-left: 0;
  }
` as unknown as typeof Cleave

export default DateField
