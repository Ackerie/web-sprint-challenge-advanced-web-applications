import axios from "axios";
import React, { useState } from "react";
import {  useHistory } from "react-router-dom";


const initialState = {
  username:'',
  password:''
}


const Login = () => {
  const  [login, setLogin ]= useState(initialState)

  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 
  const {push} = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', login)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      push('/colors')
    })
    .catch(err => {
      console.log(err)
    })

    if (login.username === '' || login.password === '') {
      setError('Username and password Required.')

    }else if (login.username !== 'Lambda' || login.password !== 'I<3Lambd4'){
      setError('Invaild Login')
    }
  }

  const handleChange = e => {
    const { name, value} = e.target
    setLogin({...login,
       [name]: value})
  }


  
  const [error, setError] = useState("");
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <p>Login</p>
        <div>
          <input 
        
          onChange={handleChange}
          type='text' 
          placeholder='User Name'
          />
        </div>
        <div>
          <input
          
          onChange={handleChange}
          type='password'
          placeholder='********'
          /></div>
          

          <button >Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.