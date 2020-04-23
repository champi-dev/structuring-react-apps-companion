import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import uiConfig from 'assets/styles/uiConfig'
import 'assets/styles/normalize.scss'
import 'assets/styles/general.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

const htmlEl = document.querySelector('html')
htmlEl.style.fontSize = uiConfig.font.responsiveSize

const bodyEl = document.querySelector('body')
bodyEl.style.fontSize = uiConfig.font.baseSize
bodyEl.style.fontWeight = uiConfig.font.mediumWeight
bodyEl.style.fontFamily = uiConfig.font.mainFamily

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
