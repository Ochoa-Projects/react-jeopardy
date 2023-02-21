import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameContextProvider = ({ children }) => {
  const [singleCategories, setSingleCategories] = useState([]);
  const [singleSlugs, setSingleSlugs] = useState([]);
  const [doubleCategories, setDoubleCategories] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");

  return (
    <GameContext.Provider
      value={{
        singleCategories,
        setSingleCategories,
        doubleCategories,
        setDoubleCategories,
        singleSlugs,
        setSingleSlugs,
        attempts,
        setAttempts,
        selectedDifficulty,
        setSelectedDifficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
