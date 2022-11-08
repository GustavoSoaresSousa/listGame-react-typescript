import styled from "styled-components";

export const CartItemSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    .card-content{
      margin-bottom: 20px;
      width: 18rem;
      cursor: pointer;
      .card-img{
        transition: .6ms;
      }
      .card-img:hover{
        filter: blur(2px);
      }
    }
    @media (max-width: 320px) {
 
    }
`