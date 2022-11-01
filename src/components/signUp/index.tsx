import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myAPI } from "../../service/api";
import { SignFormContainer } from "../../styles/signUp";

const initialUser = {
  name: '',
  email: '',
  password: ''
}

type IUser = {
  name: string;
  email: string;
  password: string;
}

export function SignUpForm(){
  const [user, setUser] = useState<IUser>(initialUser);
  const navigate = useNavigate();

  async function register(e: FormEvent): Promise<void>{
    e.preventDefault();
    const response = await myAPI.post('/users', {
      name: user.name,
      email: user.email,
      password: user.password
    })

    if(response.status === 201){
      window.alert('Create with success')
      return navigate('/');
    }else if(response.request.status === 500){
     return window.alert('There an error, verify fields'); 
    } 
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  return(
    <SignFormContainer>
      <h2>Sign Up</h2>
      <form onSubmit={(event) => register(event)} className="form-content">
        <label>Name</label>
        <input name="name" value={user.name} onChange={(event) => handleInput(event)} type="text" required />

        <label>E-mail</label>
        <input name="email" value={user.email} onChange={(event) => handleInput(event)} type="text" required />

        <label>Password</label>
        <input name="password" value={user.password} onChange={(event) => handleInput(event)} type="text" required />

        <button type="submit" className="button">Sign up</button>
      </form>
      <p>Already have an account? <a href="/logIn">Log in</a></p>
      <p><a href="/">Back Home</a></p>
    </SignFormContainer>
  )
}