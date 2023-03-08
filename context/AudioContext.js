import { useState, createContext, useContext, useEffect } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioContextProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [introAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/intro.mp3")
  );
  const [thinkingAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/thinking.mp3")
  );
  const [timesUpAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/times-up.mp3")
  );
  const [smallWinAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/small-win.mp3")
  );

  useEffect(() => {
    if (isMuted) {
      introAudio.volume = 0;
      thinkingAudio.volume = 0;
      timesUpAudio.volume = 0;
      smallWinAudio.volume = 0;
    } else {
      introAudio.volume = 0.1;
      thinkingAudio.volume = 0.1;
      timesUpAudio.volume = 0.1;
      smallWinAudio.volume = 0.1;
    }
  }, [isMuted]);

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        setIsMuted,
        introAudio,
        thinkingAudio,
        timesUpAudio,
        smallWinAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
