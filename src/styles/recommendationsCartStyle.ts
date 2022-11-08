import styled from "styled-components";

export const RecommendationsCartConteiner = styled.div`
  background: #0C1440;
  color: #fff;
  padding-bottom: 50px;
    h2{
      padding-left: 6vw;
    }
    .content-recommendations{
      display: flex;
      justify-content: space-around;
      align-items: center;
      .content-game{
        background: #000;
        height: 300px;
        width: 575px;
        display: flex;
        padding: 12px;
        margin: 8px;
        border-radius: 8px;

        .content-img-title{
          .image-game{
            border-radius: 4px;
            padding: 4px;
          }
          .infos{
            display:flex;
            justify-content: space-around;
            padding: 4px;
          }
        }

        .content-description{
          text-align: justify
        }
      }
    }

    @media (max-width: 320px) {
      .content-recommendations{
        flex-direction: column;
        .content-game{
          height: 320px;
          width: 250px;
          flex-direction: column;
          .content-img-title{
            .image-game{
              width: 230px;
            }
            .infos{

            }
          }
        }
      }
    }

    @media (max-width: 375px) {
      .content-recommendations{
        flex-direction: column;
        .content-game{
          flex-direction: column;
          height: 370px;
          width: 290px;
          .content-img-title{
            .image-game{
              width: 270px;
            }
          }
        }
      }
    }

    @media (max-width: 425px) {
      .content-recommendations{
        flex-direction: column;
        .content-game{
          flex-direction: column;
          height: 390px;
          width: 310px;
          .content-img-title{
            .image-game{
              width: 290px;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .content-recommendations{
        .content-game{
          flex-direction: column;
          height: 390px;
          width: 310px;
          .content-img-title{
            .image-game{
              width: 290px;
            }
          }
        }
      }
    }
    
` 