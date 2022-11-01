import React, {useContext} from'react';
import { GameContext, GameType } from '../contexts/GameContext';

export function useGame(): GameType {
  const value = useContext(GameContext);
  return value;
}