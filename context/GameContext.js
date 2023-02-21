import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameContextProvider = ({ children }) => {
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");

  return (
    <GameContext.Provider
      value={{
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
