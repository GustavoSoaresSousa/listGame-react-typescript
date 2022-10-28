import styled from "styled-components";

export const CartGameConteiner = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background: #0C1440; 
  color: #fff;


  .div-content{
    padding: 36px;
    .add-fav{
      position: absolute;
      padding: 8px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        text-align: center;
        border: 0;
        border-radius: 2px;
        transition: .6s;
        opacity: 0.6;
      }
      button:hover{
        border: 1px solid #000;
        opacity: 1;
      }
    }
    img{
      transition: 0.12s;
      border-radius: 4px;
    }
    img:hover{
      cursor: pointer;
      opacity: 0.1;
    }

    .plataform{
    padding: 4px;
    border-radius: 8px;
    text-align: center;
    background: #211F24;
    width: 35%
    }
  }

  .div-content:hover{

  }


`
