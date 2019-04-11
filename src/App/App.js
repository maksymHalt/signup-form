import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SignUp } from '../containers'

const App = () => (
  <Provider store={store}>
    <Router>
      <SignUp />
    </Router>
  </Provider>
)

export default App
