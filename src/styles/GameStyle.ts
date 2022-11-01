import styled from "styled-components";

export const GameConteiner = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background: #0C1440;
  color: #fff;
  
  .game-container {
    padding: 80px;
    display: flex;


    .info-content{
      text-align: justify;
      flex: 6;
      width: 40%;
      label {
        margin-top: 12px;
        height: 25px;
        width: 17%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        background: #134387;
      }
    }

    .carrosel-content {
      flex: 6;
    }
  }
`