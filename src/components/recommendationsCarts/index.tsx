import React from "react";
import { RecommendationsCartConteiner } from "../../styles/recommendationsCartStyle";

export function RecommendationsCart(){
  return(
    <RecommendationsCartConteiner>
      <h2>Recommedations Games</h2>
      <div className="content-recommendations">
        
        <div className="content-game">
          <section className="content-img-title">
            <img src="https://www.freetogame.com/g/475/thumbnail.jpg" alt="fssfsf" />
            <div><p>Genshin impact</p> <p>free</p></div>
          </section>

          <section className="content-description">
            <div>If you’ve been looking for a game to scratch that open-world action RPG itch,
               one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s 
               Genshin Impact</div>
          </section>
        </div>

        <div className="content-game">
          <section className="content-img-title">
            <img src="https://www.freetogame.com/g/523/thumbnail.jpg" alt="fssfsf" />
            <div><p>Fall Guys</p> <p>free</p></div>
          </section>

          <section className="content-description">
            <div>Play the most competitive massively multiplayer party royale game featuring 
              beans ever for free on a variety of platforms.</div>
          </section>
        </div>
      </div>
    </RecommendationsCartConteiner>
  )
}