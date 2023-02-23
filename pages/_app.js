import { GameContextProvider } from "../context/GameContext";
import Loading from "../components/Loading";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GameContextProvider>
      <Loading />
      <Component {...pageProps} />
    </GameContextProvider>
  );
}
