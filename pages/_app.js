import { Toaster } from "react-hot-toast";
import reducer, { initialState } from "../context/Reducer";
import { StateProvider } from "../context/StateContext";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(
  () => import("../components").then((mod) => mod.Layout),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <DynamicLayout>
        <Toaster />
        <Component {...pageProps} />
      </DynamicLayout>
    </StateProvider>
  );
}

export default MyApp;
