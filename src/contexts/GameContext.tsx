import { createContext, ReactNode, useState, useEffect } from "react";
import { myAPI } from "../service/api";


// From the code below you can see that the values can be undefined as well
export const GameContext = createContext<GameType>({} as GameType)


export interface GameType  {
  gameId: number;
  setGameId: (id: number) => void;
  games: IGame[];
  setGames: (data : IGame[]) => void;

  searchGameByName: (nameGame: string) => boolean;
  game: IGame[]

  removeLoading: boolean;
  setRemoveLoading: (bool: boolean) => void;
} 

export interface ScreenShots {
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

const queryParams = {
  limit: 10,
  sort: "desc",
  page: 1
};


export function GameContextProvider(props: GameContextProviderProps){
  const [ removeLoading, setRemoveLoading ] = useState<boolean>(false);
  const [games, setGames] = useState<IGame[]>([]);
  const [gameId, setGameId ] = useState(0);
  const [game, setGame] = useState<IGame[]>([]);


  function searchGameByName(nameGame: string): boolean {
    const gameSearched = games?.filter((data:IGame) => data.title.toUpperCase().includes(nameGame.toUpperCase()));
    setGame(gameSearched);
    if(!gameSearched) return false;
    return true
  }
  
  useEffect(() => {
    async function getAllGames(): Promise<void> {
      const response = await myAPI.get<IGame[]>('/gameList/allGames', {
        params: {
          _limit: 10,
        }
      });
      setGames(response.data);
      setRemoveLoading(true);
    }
    getAllGames();
  }, [])

  return(
    <GameContext.Provider value={{games, setGames, gameId, setGameId, searchGameByName, game, removeLoading, setRemoveLoading}}>
      {props.children}
    </GameContext.Provider>
  )
}