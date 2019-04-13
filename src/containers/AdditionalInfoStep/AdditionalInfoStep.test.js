import React from 'react'
import ReactDOM from 'react-dom'
import AdditionalInfoStep from './AdditionalInfoStep'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AdditionalInfoStep />, div)
  ReactDOM.unmountComponentAtNode(div)
})
