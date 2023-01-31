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
        <h4>Cart</h4>
        <hr></hr>
        {getItemCount() > 0 ? (
          <>
            <figure>
              <ul>
                <li className={Style.CartModal__content__imageFrame}>
                  <Image
                    src={productData.image[4].thumbnails[0].filePath}
                    alt={productData.image[4].thumbnails[0].altText}
                    fill={true}
                  />
                </li>
                <li>
                  <figcaption>
                    <ul>
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
            <button>Checkout</button>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </section>
  );
}

export default CartModal;
