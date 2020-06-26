import React from 'react'
import SignIn from './SignINpage'
import Profile from './profilepage'
import {BrowserRouter as Router ,Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route path="/" exact component={SignIn}/>
        <Route path="/profile" exact component={Profile}/>
      </Router>
    )
  }
}

export default App;
