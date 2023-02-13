import { AttemptsContextProvider } from "../context/AttemptsContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AttemptsContextProvider>
      <Component {...pageProps} />
    </AttemptsContextProvider>
  );
}
