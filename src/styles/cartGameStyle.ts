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
      width: 370px;
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

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    .div-content{
      padding: 18px;
      img{
        width: 280px;
      }
    }
  } 

  @media (min-width: 375px) {
    grid-template-columns: 1fr;
    .div-content{
      padding: 18px;
      img{
        width: 310px;
      }
    }
  }
  @media (min-width: 425px) {
    grid-template-columns: 1fr;
    .div-content{
      padding: 18px;
      img{
        width: 350px;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .div-content{
      padding: 16px;
      img{
        width: 350px;
      }
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    .div-content{
      padding: 14px;
      img{
        width: 310px;
      }
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    .div-content{
      padding: 14px;
      img{
        width: 310px;
      }
    }
  }  
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .div-content{
      padding: 14px;
      img{
        width: 310px;
      }
    }
  }
`
