import { createContext, useContext, useState } from "react";

const AttemptsContext = createContext();

export const useAttempts = () => useContext(AttemptsContext);

export const AttemptsContextProvider = ({ children }) => {
  const [attempts, setAttempts] = useState([]);

  return (
    <AttemptsContext.Provider value={{ attempts, setAttempts }}>
      {children}
    </AttemptsContext.Provider>
  );
};
