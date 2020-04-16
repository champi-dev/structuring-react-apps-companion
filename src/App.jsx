import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import UIGuide from 'containers/UIGuide'

function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UIGuide} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
