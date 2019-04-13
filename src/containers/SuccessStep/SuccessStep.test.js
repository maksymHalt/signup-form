import React from 'react'
import ReactDOM from 'react-dom'
import SuccessStep from './SuccessStep'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SuccessStep />, div)
  ReactDOM.unmountComponentAtNode(div)
})
