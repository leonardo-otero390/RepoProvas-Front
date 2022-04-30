import { createContext, useState } from "react";

interface IGlobalContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: Props) {
  const [name, setName] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}
