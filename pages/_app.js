import { GameContextProvider } from "../context/GameContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GameContextProvider>
      <Component {...pageProps} />
    </GameContextProvider>
  );
}
