import React from "react";
import { IGame } from "../../contexts/GameContext";
import { useGame } from "../../hooks/useGame";
import { RecommendationsCartConteiner } from "../../styles/recommendationsCartStyle";
import { Loading } from "../loading";

export function RecommendationsCart() {
  const { games, removeLoading } = useGame();
  return (
    <RecommendationsCartConteiner>
      <h2>Recommedations Games</h2>
      <div className="content-recommendations">
      {games?.slice(9, 11).map((game: IGame) => {
        return <div className="content-game">

            <section className="content-img-title">
              <img className="image-game" src={game.thumbnail} alt="fssfsf" />
              <div className="infos"><p>{game.title}</p> <p>{game.platform}</p></div>
            </section>

            <section className="content-description">
              {game.short_description}
            </section>
            
          </div>

       

      })
      }
      </div>
      {!removeLoading && <Loading />}
    </RecommendationsCartConteiner>
  )
}