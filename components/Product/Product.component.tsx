import React, { useState } from "react";
import style from "./Product.module.scss";
import Carousel from "../Carousel/Carousel.component";
import { CarouselItem } from "../Carousel/Carousel.component";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/cart.slice";
import CartIcon from "../../public/icon-cart.svg";
import MinusIcon from "../../public/icon-minus.svg";
import PlusIcon from "../../public/icon-plus.svg";

interface RootState {
  isOn: boolean;
  cart: any;
}

type Props = {
  productData: {
    companyName: string;
    productName: string;
    productDescription: string;
    salesData: {
      currentPrice: Number;
      percentDiscount: Number;
      originalPrice: Number;
    };
  };
  imageData: { filePath: string; altText: string }[];
  children?: React.ReactNode;
};

function Product({ productData, imageData, children }: Props): JSX.Element {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <figure className={style.Product}>
      <Carousel>
        <>
          {imageData.map((image, index) => (
            <CarouselItem
              width="100%"
              imageData={image}
              key={index}
            ></CarouselItem>
          ))}
        </>
      </Carousel>
      <figcaption>
        <h3>{productData.companyName}</h3>
        <h2>{productData.productName}</h2>
        <p>{productData.productDescription}</p>
        <ul>
          <li>{productData.salesData.currentPrice.toString()}</li>
          <li>{productData.salesData.percentDiscount.toString()}</li>
          <li>{productData.salesData.originalPrice.toString()}</li>
        </ul>
      </figcaption>
      <ul>
        <li>
          <button onClick={() => dispatch(decrementQuantity(productData))}>
            <MinusIcon />
          </button>
          <span>{getItemsCount()}</span>
          <button onClick={() => dispatch(incrementQuantity(productData))}>
            <PlusIcon />
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(addToCart(productData))}>
            <CartIcon />
            Add to cart
          </button>
        </li>
      </ul>
    </figure>
  );
}

export default Product;
