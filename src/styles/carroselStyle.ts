import styled from 'styled-components';

export const CarroselConteiner = styled.div`
  height: 100vh;
  width: 100%;
  background: #0C1440;

  input {
    display: none;
  }

  .content{
    margin-top: 70px;
    height: 520px;
    width: 935px;
    border-radius: 20px;
    overflow: hidden; //esconder todo o conteudo que está ultrapassando o tamanho do content
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);// translete remove seu elemento em seu próprio eixo


    .slides{
      display: flex;
      width: 500%;
      height: 100%;

        .slide{
          width: 20%;
        }

        .slide img {
          width: 100%;
          height: 100%;
        }

        #slide1:checked ~ .s1 {
          margin-left: 0;
        }

        #slide2:checked ~ .s2 {
          margin-left: -20%;
        }

        #slide3:checked ~ .s3 {
          margin-left: -40%;
        }

        #slide4:checked ~ .s4 {
          margin-left: -60%;
        }

        #slide5:checked ~ .s5 {
          margin-left: -80%;
        }


    }

    .navigation {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%);
      display: flex;

      .bar {
        width: 70px;
        height: 17px;
        border: 2px solid #fff;
        margin: 6px;
        border-radius: 5px;
        cursor: pointer;
        transition: .6s;
      }

      .bar:hover {
        background: #fff;
      }
    }
  }
`