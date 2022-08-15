import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import reducer, { initialState } from "../context/Reducer";
import { StateProvider } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
