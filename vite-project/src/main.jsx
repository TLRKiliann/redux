import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Counter from './CounterWithHooks'
import store from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
)
