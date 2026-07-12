import { createContext, useContext } from "react";

export const AppReadyContext = createContext(true);

export function useAppReady() {
  return useContext(AppReadyContext);
}
