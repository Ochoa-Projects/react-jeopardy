import { createContext, useContext, useState, useEffect } from "react";

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
  const [prevGameStage, setPrevGameStage] = useState(null);

  useEffect(() => {
    if (attempts.length === 1 && gameStage === "single") {
      setPrevGameStage("single");
      setGameStage("double");
      setAttempts([]);
    } else if (attempts.length === 1 && gameStage === "double") {
      setPrevGameStage("double");
      setGameStage("final");
      setAttempts([]);
    } else if (attempts.length === 1 && gameStage === "final") {
      setPrevGameStage("final");
      setGameStage("finished");
    } else return;
  }, [attempts]);

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
