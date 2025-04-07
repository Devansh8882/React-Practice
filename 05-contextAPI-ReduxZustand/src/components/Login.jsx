import React, { useState, useContext} from 'react';
import userContext from '../context/userContext';

function Login() {

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");


     const {setUser} = useContext(userContext)


    const handelSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})

    }

  return (
    <>
    <h2>Login Page</h2>
    <br/> <label >Name</label>
    <input type="text" name="username" placeholder='ex:-devansh8882' id="user" value={username} onChange={(e)=> setUsername(e.target.value)}/>
    <input type="text" name="password" placeholder='ex:-devm234!!@#' id="pass" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handelSubmit}>Submit</button>

    </>
  )
}

export default Login