import React from "react";
import { FooterContainer } from "../../styles/FooterStyle";

export function Footer(){
  return(
    <FooterContainer>
      <div className="div-container">
          <section className="content-footer">
            <div className="links-infos">
              <ul>
                <li><a href="#">Git Hub</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          </section>

          <section className="author">
            <div>Desevolvido por <a href="https://linkedin.com/in/gustavosoaressousa">Gustavo Soares Sousa</a> </div>
          </section>
      </div>

    </FooterContainer>
  )
}