import React from 'react'
import ReactDOM from 'react-dom'
import BaseInfoStep from './BaseInfoStep'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BaseInfoStep />, div)
  ReactDOM.unmountComponentAtNode(div)
})
