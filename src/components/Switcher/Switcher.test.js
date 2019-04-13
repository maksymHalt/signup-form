import React from 'react'
import ReactDOM from 'react-dom'
import Switcher from './Switcher'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Switcher />, div)
  ReactDOM.unmountComponentAtNode(div)
})
