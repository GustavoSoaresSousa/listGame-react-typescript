import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #0C1440;  
  display: flex;
  justify-content: left;
  padding-top: 14px;
  padding-left: 15vw;
    .div-container{

      border-radius: 22px;
      background: #000;
      
      width: 450px;
       form{
        display: flex;
        justify-content: space-between;
        padding: 8px;
       }

      .emoji-search{
        background: #000;
      }

      .input-search{
        width: 100%;
        padding: 4px;
        input{
          background: transparent;
          border: 0;
          color: #fff;
        }
      
        input:focus {
          box-shadow: 0 0 0 0;
          border: 0 none;
          outline: 0;
        }
      }
    }
  
`
