import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameContextProvider = ({ children }) => {
  const [singleCategories, setSingleCategories] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");

  return (
    <GameContext.Provider
      value={{
        singleCategories,
        setSingleCategories,
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
