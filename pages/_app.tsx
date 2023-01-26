import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.component";
import menuLinksData from "../components/Navbar/MenuLinksData";

import "../styles/Global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" initial-scale="1" />
        <meta httpEquiv="X-UA-Compatible" content="IE-Edge" />
      </Head>
      <Provider store={store}>
        <Navbar
          menuLinksData={menuLinksData}
          userProfile={{
            filePath: "/image-avatar.png",
            altText: "Profile Image of User",
          }}
        ></Navbar>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
