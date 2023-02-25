import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameContextProvider = ({ children }) => {
  const [singleCategories, setSingleCategories] = useState([]);
  const [singleSlugs, setSingleSlugs] = useState([]);
  const [doubleCategories, setDoubleCategories] = useState([]);
  const [doubleSlugs, setDoubleSlugs] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");
  const [playerScores, setPlayerScores] = useState({
    0: {
      name: "",
      score: 0,
    },
    1: {
      name: "Jerry Javascript",
      score: 0,
    },
    2: {
      name: "Robin React",
      score: 0,
    },
  });

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
