import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);
export const initialPlayerState = {
  player1: {
    name: "",
    score: 0,
  },
  player2: {
    name: "Jerry Javascript",
    score: 0,
  },
  player3: {
    name: "Robin React",
    score: 0,
  },
};

export const GameContextProvider = ({ children }) => {
  const [singleCategories, setSingleCategories] = useState([]);
  const [singleSlugs, setSingleSlugs] = useState([]);
  const [doubleCategories, setDoubleCategories] = useState([]);
  const [doubleSlugs, setDoubleSlugs] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");
  const [playerScores, setPlayerScores] = useState(initialPlayerState);

  return (
    <GameContext.Provider
      value={{
        singleCategories,
        setSingleCategories,
        doubleCategories,
        setDoubleCategories,
        singleSlugs,
        setSingleSlugs,
        doubleSlugs,
        setDoubleSlugs,
        attempts,
        setAttempts,
        selectedDifficulty,
        setSelectedDifficulty,
        playerScores,
        setPlayerScores,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
