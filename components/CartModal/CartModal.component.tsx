import { useEffect, useState } from "react";
import Style from "./CartModal.module.scss";
import Image from "next/image";
import DeleteIcon from "../../public/icon-delete.svg";
import productData from "../../data/ShoeData/ShoeData";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cart.slice";

interface RootState {
  isOn: boolean;
  cart: any;
}

type Props = {
  cartModal: boolean;
};

function CartModal({ cartModal }: Props): JSX.Element {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const getItemCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getItemName = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.productData.productName,
      0
    );
  };

  const getItemPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.productData.salesData.currentPrice,
      0
    );
  };

  return (
    <section
      className={cartModal ? Style.CartModal__visible : Style.CartModal}
      id="cart"
    >
      <div className={Style.CartModal__content}>
        <h4 className={Style.CartModal__text}>Cart</h4>

        {getItemCount() > 0 ? (
          <>
            <figure className={Style.CartModal__cartItems}>
              <ul role="list" className={Style.CartModal__cartItems__container}>
                <li className={Style.CartModal__content__imageFrame}>
                  <Image
                    src={productData.image.thumbnails[0].filePath}
                    alt={productData.image.thumbnails[0].altText}
                    fill={true}
                    className={Style.CartModal__content__image}
                  />
                </li>
                <li>
                  <figcaption>
                    <ul
                      className={Style.CartModal__content__details}
                      role="list"
                    >
                      <li>{getItemName().replace(/\d/g, "")}</li>
                      <li>
                        ${getItemPrice()}.00 x {getItemCount()} $
                        {getItemCount() * getItemPrice()}.00
                      </li>
                    </ul>
                  </figcaption>
                </li>
                <li>
                  <button
                    onClick={() => {
                      dispatch(
                        removeFromCart(getItemName().replace(/\d/g, ""))
                      );
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              </ul>
            </figure>
            <button className={Style.CartModal__checkoutButton}>
              Checkout
            </button>
          </>
        ) : (
          <p className={Style.CartModal__emptyText}>Your cart is empty</p>
        )}
      </div>
    </section>
  );
}

export default CartModal;
