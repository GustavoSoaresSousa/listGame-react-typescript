import { createContext, ReactNode, useState, useEffect } from "react";

export const UserContext = createContext<IUser>({} as IUser)

export interface IUser {
  token: string;
  setToken: (token: string) => void
}

type UserContextProviderProps = {
  children: ReactNode;
}

export function UserContextProvider(props: UserContextProviderProps ){
  const [token, setToken] = useState<string>('');

  return(
    <UserContext.Provider value={{token, setToken}}>
      {props.children}
    </UserContext.Provider>
  )
}