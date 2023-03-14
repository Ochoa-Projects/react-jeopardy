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
  const [finalCategory, setFinalCategory] = useState("");
  const [finalSlug, setFinalSlug] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Normal");
  const [playerScores, setPlayerScores] = useState(initialPlayerState);
  const [gameStage, setGameStage] = useState("single");

  return (
    <GameContext.Provider
      value={{
        singleCategories,
        setSingleCategories,
        doubleCategories,
        setDoubleCategories,
        finalCategory,
        setFinalCategory,
        singleSlugs,
        setSingleSlugs,
        doubleSlugs,
        setDoubleSlugs,
        finalSlug,
        setFinalSlug,
        attempts,
        setAttempts,
        selectedDifficulty,
        setSelectedDifficulty,
        playerScores,
        setPlayerScores,
        gameStage,
        setGameStage,
        prevGameStage,
        setPrevGameStage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
