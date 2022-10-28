import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #000;
  color: #fff;
  height: 250px;
  ul{
    li{
      list-style-type: none;
      margin: 15px;
      a{
        text-decoration: none;
        color: #fff;
        transition: .8s;
      }
      a:hover{
        text-decoration:underline;
        color: blue;
      }
    }
  }
  .div-container{
    padding: 60px;
    .content-footer{
      display: flex;
      justify-content: space-around;

      .links-infos{

      }
    }

    .author{
      width: 100%;
      text-align: center;

    }
  }


`