import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useGlobal() {
  const globalContext = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("useGlobal must be used inside a globalContext Provider");
  }

  return globalContext;
}
