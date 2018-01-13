import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Switch, Route} from 'react-router-dom';

const Users = function(){
  return (<div>Users</div>)
}
const Widgets = function(){
  return (<div>Widgets</div>)
}
const Home = function(){
  return (<div>Home</div>)
}

const Main = function() {
  return(
     <Switch>
       <Route exact path='/' component={Home} ></Route>
       <Route exact path='/users' component={Users} />
       <Route exact path='/widgets' component={Widgets} />
     </Switch>
   )}

class App extends Component{
  render(){
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/widgets" >Widgets</NavLink></li>
          </ul>

        </aside>
        <Main />
      </div>
      )
  }
}

export default App;
