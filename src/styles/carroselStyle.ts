import styled from 'styled-components';

export const CarroselConteiner = styled.div`
  min-height: 100vh;
  max-height: 100%;
  min-width: 320px;
  max-width: 100%;
  padding: 40px;
  background: #0C1440;
  display: flex;
  justify-content: space-around;
  align-items: center;


  .carrosel-content{
    cursor: pointer;

    }
  img {
    height: 100%;
    width: 100%;
  }
  
  @media (max-width: 320px) {
    flex-direction: column;
    .carrosel-container{
      padding-bottom: 18px;
      .carrosel-content{
        width: 100%;
        img{
          width: 100%;
        }
      }      
    }
  }

  @media (max-width: 375px) {

    flex-direction: column;
    .carrosel-container{
      padding-bottom: 18px;
      .carrosel-content{
        width: 100%;
        img{
          width: 100%;
        }
      }      
    }
  }

  @media (max-width: 425px) {
  flex-direction: column;
  .carrosel-container{
    padding-bottom: 18px;
    .carrosel-content{
      width: 100%;
      img{
        width: 100%;
      }
    }      
  }
}
`