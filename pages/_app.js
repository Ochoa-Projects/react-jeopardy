import { GameContextProvider } from "../context/GameContext";
import { AudioContextProvider } from "../context/AudioContext";
import Loading from "../components/Loading";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GameContextProvider>
      <AudioContextProvider>
        <Loading />
        <Component {...pageProps} />
      </AudioContextProvider>
    </GameContextProvider>
  );
}
