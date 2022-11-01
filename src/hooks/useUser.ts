import { useContext } from "react";
import { IUser, UserContext } from "../contexts/UserContext";

export function useUser(): IUser {
  const value = useContext(UserContext);
  return value;
}