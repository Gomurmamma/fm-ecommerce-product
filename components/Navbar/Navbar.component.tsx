import React, { useState } from "react";
import style from "./Navbar.module.scss";
import Link from "next/link";
import MenuIcon from "../../public/icon-menu.svg";
import CartIcon from "../../public/icon-cart.svg";

type Props = {
  pageTitle: string;
  menuLinksData: { title: string; path: string }[];
};

function Navbar({ pageTitle, menuLinksData }: Props): JSX.Element {
  const [sideMenu, setSideMenu] = useState(false);

  const showSideMenu = () => setSideMenu(!sideMenu);

  return (
    <section>
      <nav>
        <ul className={style.NavBar}>
          <li>
            <button onClick={showSideMenu}>
              <MenuIcon />
            </button>
          </li>
          <li>
            <Link href="/">
              <h1>{pageTitle}</h1>
            </Link>
          </li>
          <li>
            <CartIcon />
          </li>
          <li>profile</li>
        </ul>
      </nav>
      {sideMenu ? (
        <nav>
          <ul>
            <li>
              <button onClick={showSideMenu}>X</button>
            </li>
            {menuLinksData?.map((destination, index) => {
              return (
                <li key={index}>
                  <Link href={destination.path}>{destination.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Navbar;
