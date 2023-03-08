import { useState, createContext, useContext } from "react";

export const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioContextProvider = ({ children }) => {
  return <AudioContext.Provider>{children}</AudioContext.Provider>;
};
