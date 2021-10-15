import React,{useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
const AuthBox = ()=>{
const {isAuthenticated,toggleAuth} = useContext(AuthContext)
    
  return (
  
            <div className="container">
                <p>Auth status</p>
                {isAuthenticated ? 'You are logged in ' :''  }
                <button onClick={toggleAuth}>{isAuthenticated ? 'Logout ' : 'Login' }</button>
                
            </div>

  )
}
export default AuthBox;