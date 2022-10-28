import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #0C1440;  
  display: flex;
  justify-content: left;
  padding-top: 14px;
  padding-left: 15vw;
    .div-container{
      display: flex;
      justify-content: left;
      border-radius: 22px;
      background: #000;
      padding: 8px;
      width: 450px;


      .emoji-search{
        padding-right: 15px;
        padding-left: 15px;
      }

      .input-search{
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
