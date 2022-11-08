import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-width: 320px;
  max-width: 100%;
  height: 55px;
  background: #000;
  font-family: sans-serif;
  font-size: 1em;
  nav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    div{
      display: flex;
      height: 100%;
      
      ul{
        display: flex;
        height: 100%;
        li{
          height: 100%;
          align-items: center;
          padding: 0 16px 0 16px; 
          list-style-type: none;
          a{
            display: flex;
            align-items: center;
            height: 90%;
            color: #646363;
          }
        }
      }
    }

    .options, .signs{
       a, span{
        padding: 0 16px 0 16px;
        transition: .6s;

        cursor: pointer;
        text-decoration: none;
      }  

      a:hover, span:hover{
        border-bottom: 7px solid #6E1CA3;
        color: #fff;
      }
    }

    
  }


  @media (max-width: 320px) {
    nav{
      width: 100%;
      div{ 
        ul{
          padding: 0;
         
          li{ 
            padding: 4px;
            width: 50px;
          }
        }
      }
    }

    .options, .signs{
      a, span{
        padding: 0px;
      }
    }
    .options{
      width: 100%;
      ul{
        width: 95%;
        justify-content:space-evenly;
      }
    }
  }

  @media (max-width: 375px) {
    nav{
      width: 100%;
      div{ 
        ul{
          padding: 12px;
         
          li{ 
            padding: 4px;
            width: 50px;
          }
        }
      }
    }

    .options, .signs{
      a, span{
        padding: 0px;
      }
    }
    .options{
      width: 100%;
      ul{
        width: 100%;
        justify-content:space-evenly;
      }
    }
  }

  @media (max-width: 425px) {
    nav{
      width: 100%;
      div{ 
        ul{
          padding: 12px;
         
          li{ 
            padding: 4px;
            width: 50px;
          }
        }
      }
    }

    .options, .signs{
      a, span{
        padding: 0px;
      }
    }
    .options{
      width: 100%;
      ul{
        width: 100%;
        justify-content:space-around;
      }
    }
  }
`
