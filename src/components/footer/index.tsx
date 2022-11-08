import React from "react";
import { FooterContainer } from "../../styles/FooterStyle";
import linkedinIcon from "../../images/linkedin.png";
import gitHubIcon from "../../images/github2.png";

export function Footer(){
  return(
    <FooterContainer>
      <div className="div-container">
          <section className="author">
            <div>
              <a>Desenvolvido por Gustavo Soares</a>
              <div>
                <a href="https://www.linkedin.com/in/gustavosoaressousa/"><img src={linkedinIcon} alt="" /></a> 
                <a href="https://github.com/GustavoSoaresSousa"><img src={gitHubIcon} alt="" /></a></div>                
              </div>

          </section>
      </div>

    </FooterContainer>
  )
}