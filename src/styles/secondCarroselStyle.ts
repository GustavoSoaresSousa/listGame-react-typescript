import styled from "styled-components";

export const SecondCarroselContainer = styled.div `
  background: #0C1440;

  padding: 15px;
  padding-bottom: 50px;

  .content{
    max-width: 840px;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 0 auto;
  }

  .gallery-wrapper{
    overflow-x: auto; // a rolagem do scrow fica no elemento que contem overflow-x
  }

  .gallery{
    display: flex;
    flex-wrap: row nowrap; // wrap quando não couber vai quebrar para baixo enquanto nowrap continua mesmo quebrando
    gap: 15px;
  }


  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    font-size: 20px;
    line-height: 250px;
    width: 40px;
    color: #fff;
    transition: all 600ms ease-in-out;
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    cursor: pointer;
    border: none;
  }

  .arrow-left:hover,
  .arrow-right:hover {
    opacity: 1;
  }

  .arrow-right {
    right: 0;
    left: auto;
    text-align: right;
    background: linear-gradient(to right, transparent 0%, black 200%);
  }

  .item {
    width: 250px;
    height: 250px;
    flex-shrink: 0;
    opacity: 0.6s;
    transition: all 600ms ease-in-out;
  }

  .current-item{
    opacity: 1;
  }

  .gallery-wrapper::-webkit-scrollbar {
  display: none;
  }
  
  .gallery-wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}


  img {
    height: 250px;
    width: 250px;
  }
`