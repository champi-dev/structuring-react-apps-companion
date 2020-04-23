import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import UIGuide from 'containers/UIGuide'

const App = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;  
`

export default function () {
  return (
    <App>
      <Switch>
        <Route path="/" exact component={UIGuide} />
        <Redirect to="/" />
      </Switch>
    </App>
  )
}
