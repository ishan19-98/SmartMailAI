import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return appContext;
}
