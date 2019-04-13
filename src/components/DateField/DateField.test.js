import React from 'react'
import ReactDOM from 'react-dom'
import DateField from './DateField'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateField />, div)
  ReactDOM.unmountComponentAtNode(div)
})
