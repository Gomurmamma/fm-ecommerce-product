import React, { useState } from "react";
import style from "./Navbar.module.scss";
import Link from "next/link";
import MenuIcon from "../../public/icon-menu.svg";
import CartIcon from "../../public/icon-cart.svg";
import LogoIcon from "../../public/logo.svg";
import CloseIcon from "../../public/icon-close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  isOn: boolean;
  cart: any;
}

type Props = {
  menuLinksData: { title: string; linkPath: string }[];
  userProfile: { filePath: string; altText: string };
  setCartModal: (cartModal: boolean) => void;
  cartModal: boolean;
  setSideMenu: (sideMenu: boolean) => void;
  sideMenu: boolean;
};

function Navbar({
  menuLinksData,
  userProfile,
  setCartModal,
  cartModal,
  sideMenu,
  setSideMenu,
}: Props): JSX.Element {
  const showSideMenu = (): void => setSideMenu(!sideMenu);

  const showCartModal = (): void => {
    setCartModal(!cartModal);
  };

  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <section>
      <nav>
        <ul className={style.NavBar}>
          <li>
            <ul className={style.NavBar__menuGroup}>
              <li className={style.NavBar__sideMenuButtonContainer}>
                <button
                  onClick={showSideMenu}
                  className={style.NavBar__sideMenuButtonContainer__button}
                >
                  <MenuIcon />
                </button>
              </li>
              <li>
                <Link href="/" className={style.NavBar__logoContainer}>
                  <LogoIcon className={style.NavBar__logoContainer__logo} />
                </Link>
              </li>
              <li className={style.NavBar__horizontalMenu}>
                <ul role="list" className={style.NavBar__linksContainer}>
                  {menuLinksData?.map((destination, index) => {
                    return (
                      <li key={index}>
                        <Link href={destination.linkPath}>
                          {destination.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.NavBar__menuGroup}>
              <li className={style.NavBar__rightItem}>
                <button onClick={showCartModal}>
                  <CartIcon />
                  <span>{getItemsCount() > 0 ? getItemsCount() : ""}</span>
                </button>
              </li>
              <li className={style.NavBar__rightItem}>
                <figure className={style.NavBar__profileIconFrame}>
                  <Image
                    src={userProfile.filePath}
                    alt={userProfile.altText}
                    className={style.NavBar__profileIconFrame__Image}
                    fill={true}
                  ></Image>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav
        className={sideMenu === false ? style.SideMenu : style.SideMenu__active}
      >
        <ul className={style.SideMenu__content} role="list">
          <li className={style.SideMenu__buttonContainer}>
            <button
              onClick={showSideMenu}
              className={style.SideMenu__buttonContainer__button}
            >
              <CloseIcon />
            </button>
          </li>
          {menuLinksData?.map((destination, index) => {
            return (
              <li key={index} className={style.SideMenu__menuItem}>
                <Link
                  href={destination.linkPath}
                  className={style.SideMenu__menuItem__link}
                >
                  {destination.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
