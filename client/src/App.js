// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login';
import Todos from './components/Todos';


function App() {
  // const myName = "SunLord"
  // const myAge = 20
  // const sum = (a,b)=>{
  //   return a + b;
  // }
  return (
    <>
    <div id="body">
    <main className="form-signin">
    
    <Login></Login>
    <Todos></Todos>
 
    </main>

    </div>

        </>
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

