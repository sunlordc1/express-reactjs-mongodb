import React from "react";
import AuthContextProvider from "../contexts/AuthContext";
import AuthBox from './AuthBox'
const Home = ()=>{
//Load auth context

// const {isAuthenticated,toggleAuth} = useContext(AuthContext)
// console.log(isAuthenticated)
// console.log(isAuthenticated)
  return (
        <AuthContextProvider>
            <div className="container">
                <p>Home Page</p>
                {/* {isAuthenticated ? 'You are logged in ' :''  }
                <button onClick={toggleAuth}>{isAuthenticated ? 'Logout ' : 'Login' }</button> */}
                <AuthBox></AuthBox>
            </div>
        </AuthContextProvider>
  )
}
export default Home;