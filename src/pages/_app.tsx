import "@/styles/globals.css";
import { NextPageWithLayout } from "@/types/global";
import { AppProps } from "next/app";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: NextPageWithLayout) => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;