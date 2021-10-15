// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home'
import Login from './components/Login'
import Error from './components/Error'
import Todo from './components/modules/Todo/Todos'

function App() {
  // const myName = "SunLord"
  // const myAge = 20
  // const sum = (a,b)=>{
  //   return a + b;
  // }
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/todo" component={Todo}/>
        <Route  path="/:somestring" component={Error}/>
      </Switch>

    </Router>
  );
}
export default App;


//Hoặc
// export default class App extends React.Component{
//   render(){
//     return (
//       <h3>Danh sach can lam</h3>
//     )
//   }
  
// }

