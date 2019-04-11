import React from 'react'
import ReactDOM from 'react-dom'
import FirstStep from './FirstStep'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FirstStep />, div)
  ReactDOM.unmountComponentAtNode(div)
})
