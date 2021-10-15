import React, {useState} from "react";
import axios from 'axios'
const Login = ()=>{
  const [loginState, setLoginState] = useState({username:'',password:''});
  const {username,password} = loginState
  const change= event =>{
      setLoginState({...loginState, [event.target.name]:event.target.value});
  }
  const submit = event=>{
    event.preventDefault();
    const login = async ()=>{
      try{
          const res = await axios.post(
              'http://localhost:5000/login',
              {username,password}
          )
          console.log(res.data)
      }catch(error){
          console.log(error.message)
      }
    }
    login()

  }

  return (
    <div className="container">
    <form onSubmit={submit}>
      <p>username: userclone1</p>
      <p>password: userclone</p>
      
      <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input type="text" className="form-control" name="username"  value={username} onChange={change} placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" name="password"  value={password} onChange={change} placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
</div>
  )
   
}
export default Login;