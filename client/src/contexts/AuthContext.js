import React,{createContext,useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    //State 
    const [isAuthenticated,setAuthendication] = useState(false)

    const toggleAuth = ()=>{
        setAuthendication(!isAuthenticated)
    }

    //context data
    const authContextData = {
        isAuthenticated,
        toggleAuth
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider