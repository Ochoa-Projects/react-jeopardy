import { useState, createContext, useContext } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioContextProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </AudioContext.Provider>
  );
};
