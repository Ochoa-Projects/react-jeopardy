import { useState, createContext, useContext, useEffect } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioContextProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [introAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/intro-theme.mp3")
  );
  const [thinkingAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/thinking.mp3")
  );
  const [timesUpAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/times-up.mp3")
  );
  const [smallWinAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/small-win.wav")
  );
  const [dailyDoubleAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/daily-double.mp3")
  );
  const [boardFillAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/board-fill.mp3")
  );
  const [endAudio] = useState(
    typeof Audio !== "undefined" && new Audio("/sounds/end-theme.mp3")
  );

  useEffect(() => {
    if (isMuted) {
      introAudio.volume = 0;
      thinkingAudio.volume = 0;
      timesUpAudio.volume = 0;
      smallWinAudio.volume = 0;
      dailyDoubleAudio.volume = 0;
      boardFillAudio.volume = 0;
      endAudio.volume = 0;
    } else {
      introAudio.volume = 0.5;
      thinkingAudio.volume = 0.2;
      timesUpAudio.volume = 0.2;
      smallWinAudio.volume = 0.2;
      dailyDoubleAudio.volume = 0.2;
      boardFillAudio.volume = 0.2;
      endAudio.volume = 0.2;
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
        dailyDoubleAudio,
        boardFillAudio,
        endAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
