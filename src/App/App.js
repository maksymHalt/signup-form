import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { SignUp } from '../containers'

const App = () => (
  <Provider store={store}>
    <SignUp />
  </Provider>
)

export default App
