import styled from "styled-components";

export const SignFormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  p{
    margin: 16px;
  }
  a {
    transition: .3s;
    color: #000;
  }
  
  a:hover{
    text-decoration: underline;
    color: #030A8C;
  }

  .form-content{
    display: flex;
    flex-direction: column;
    width:35%;
    gap: 8px;

    input:focus, button:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    input::-webkit-input-placeholder  { color: gray }
    
    button{
      padding: 4px;
      border: 0;
      border-radius: 16px;
      background: #000075;
      color: #D9D9D9;
      transition: .6s;
    }

    button:hover {
      background: #D9D9D9;
      color: #000075;
    }

    input{
      padding: 4px;
    }
  }
`