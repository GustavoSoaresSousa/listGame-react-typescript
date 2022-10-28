import { createContext, ReactNode, useState, useEffect } from "react";
import { myAPI } from "../service/api";

export const GameContext = createContext({} as GameType);

type GameType = {
  games: IGame[] | undefined;
} 

interface ScreenShots {
  id: number;
  image: string;
}

interface SystemRequirements {
  os: string;
	processor: string;
	memory: string;
	graphics: string;
	storage: string;
}

export interface IGame{
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
  minimum_system_requirements: SystemRequirements;
  screenshots: ScreenShots[];
}

type GameContextProviderProps = {
  children: ReactNode;
}


export function GameContextProvider(props: GameContextProviderProps){
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    async function getAllGames(): Promise<void>{
      const response = await myAPI.get('/gameList/allGames');
      setGames(response.data)
    }
    getAllGames();
  }, [])

  return(
    <GameContext.Provider value={{games}}>
      {props.children}
    </GameContext.Provider>
  )
}