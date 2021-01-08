import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Header from './Components.js/Header';
import India from './Components.js/India';
import World from './Components.js/World';
//import Statedata from './Components.js/Statedata';
import {
  BrowserRouter as Router ,
  Link,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container-fluid">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <India/>
          </Route>
          <Route  path="/india">
            <India/>
          </Route>
          <Route  path="/world">
            <World/>
          </Route>
        
        </Switch>
      </Router>
      </div>
    )
  }
}
export default App;
