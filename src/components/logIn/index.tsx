import React, { ChangeEvent, FormEvent, useState } from "react";
import { SignFormContainer } from "../../styles/signUp";
import { myAPI } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

type token = {
  token: string
}

const initialUser = {
  email: '',
  password: ''
}

type IUser = {
  email: string;
  password: string;
}

export function LogInForm() {
  const [user, setUser] = useState<IUser>(initialUser);
  const {setToken} = useUser();
  const navigate = useNavigate();

  async function logInUser(e: FormEvent): Promise<void>{
    e.preventDefault();
    const response = await myAPI.post('/users/authenticate', {
      email: user.email,
      password: user.password
    })
    
    const data: token = response.data;
    navigate('/')
    setToken(data.token);
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>){
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <SignFormContainer>
      <h2>Log In</h2>
      <form onSubmit={(event) => logInUser(event)} className="form-content">
        <label>E-mail</label>
        <input autoComplete="off" name="email" value={user.email} onChange={(event) => handleInput(event)} type="text" required/>

        <label>Password</label>
        <input name="password" value={user.password} onChange={(event) => handleInput(event)} type="text" required/>

        <button type="submit" className="button">Log In</button>
      </form>
      <p>not have an account? <a href="/register">Create a account</a></p>
      <p><a href="/">Back Home</a></p>
    </SignFormContainer>
  )
}