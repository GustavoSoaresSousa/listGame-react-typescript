import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #000;
  color: #fff;
  min-height:100px;
  max-height: 100%;
  min-width: 320px;
  max-width: 100%;
  .div-container{
    padding: 30px;
    .author{
      width: 100%;
      text-align: center;
      div{
        display: flex;
        justify-content: space-around;
        a{
          padding: 4px;
          img{
            height: 25px;
            width: 25px;
          }
        }
      }
    }
  }


`