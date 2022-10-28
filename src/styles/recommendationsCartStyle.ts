import styled from "styled-components";

export const RecommendationsCartConteiner = styled.div`
  padding-top: 30px;
  background: #0C1440;
  color: #fff;
  padding-bottom: 50px;
  h2{
    padding-left: 6vw;
  }
  .content-recommendations{
    display: flex;
    justify-content: center;
    .content-game{
      display: flex;
      padding: 20px;
      background: #213A59;
      border-radius: 8px;
      margin: 30px;
      .content-img-title{
        img {
          height: 150px;
          border-radius: 4px;
        }

        div{
          display: flex;
          p{
            padding-right: 45px;
          }
        }
      }

      .content-description{
        width: 250px;
        text-align: justify;
        padding-left: 8px;
      }
    }

  }


` 