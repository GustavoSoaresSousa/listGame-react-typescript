import React, { ChangeEvent } from 'react';
import { SecondCarroselContainer } from '../../styles/secondCarroselStyle';
import img from '../../images/1.jpg';
import img2 from '../../images/2.jpg'; 
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';

export function SecondCarrosel(){
  const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e: any) => {
    const isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  }); // descrição do game oculta e quando passar mouse aparece fazer no css
});

  return(
    <SecondCarroselContainer>
      <div className='content'>
        <button className='arrow-left control' aria-label='Previous image'>◀</button>
        <button className='arrow-right control' aria-label='Next image'>▶</button>
        <div className="gallery-wrapper">
          <div className="gallery">
            <img src={img} alt="default alt" className='item current-item' />
            <img src={img2} alt="default alt" className='item' />
            <img src={img3} alt="default alt" className='item' />
            <img src={img4} alt="default alt" className='item' /> 
            <img src={img5} alt="default alt" className='item' />
          </div>
        </div>
      </div>


    </SecondCarroselContainer>
  )
}