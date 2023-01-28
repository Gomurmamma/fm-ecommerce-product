import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.component";
import menuLinksData from "../components/Navbar/MenuLinksData";
import CartModal from "../components/CartModal/CartModal.component";

import "../styles/Global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [cartModal, setCartModal] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

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
          setCartModal={setCartModal}
          cartModal={cartModal}
          sideMenu={sideMenu}
          setSideMenu={setSideMenu}
        ></Navbar>
        {cartModal ? <CartModal cartModal={cartModal} /> : <></>}
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
