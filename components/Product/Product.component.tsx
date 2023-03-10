import React, { useState } from "react";
import style from "./Product.module.scss";
import Carousel from "../Carousel/Carousel.component";
import { GalleryItem } from "../LightBoxGallery/LightBoxGallery.component";
import LightBoxGallery from "../LightBoxGallery/LightBoxGallery.component";
import {
  CarouselItem,
  CarouselThumbnail,
} from "../Carousel/Carousel.component";
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
      currentPrice: number;
      percentDiscount: number;
      originalPrice: number;
    };
  };
  imageData: {
    fullImages: { filePath: string; altText: string }[];
    thumbnails: { filePath: string; altText: string }[];
  };
  children?: React.ReactNode;
};

function Product({ productData, imageData, children }: Props): JSX.Element {
  const [itemQuantity, setItemQuantity] = useState(0);

  const [displayLightBox, setDisplayLightbox] = useState(false);

  const updateLightBox = (): void => {
    setDisplayLightbox(!displayLightBox);
  };

  const decrementItemQuantity = (): void => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const incrementItemQuantity = (): void => {
    setItemQuantity(itemQuantity + 1);
  };

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <figure className={style.Product}>
      {displayLightBox ? (
        <LightBoxGallery
          thumbnails={imageData.thumbnails}
          updateLightBox={updateLightBox}
        >
          <>
            {imageData.fullImages.map((image, index) => (
              <GalleryItem imageData={image} />
            ))}
          </>
        </LightBoxGallery>
      ) : (
        <></>
      )}
      <Carousel thumbnails={imageData.thumbnails}>
        <>
          {imageData.fullImages.map((image, index) => (
            <CarouselItem
              width="100%"
              imageData={image}
              key={index}
              onClick={updateLightBox}
            ></CarouselItem>
          ))}
        </>
      </Carousel>

      <figcaption className={style.Product__details}>
        <h2>{productData.companyName}</h2>
        <h1>{productData.productName}</h1>
        <p>{productData.productDescription}</p>
        <ul>
          <li>
            {productData.salesData.currentPrice.toString()}{" "}
            <span> {productData.salesData.percentDiscount.toString()}</span>
          </li>

          <li>{productData.salesData.originalPrice.toString()}</li>
        </ul>
        <ul>
          <li>
            <button onClick={() => decrementItemQuantity()}>
              <MinusIcon />
            </button>
            <span>{itemQuantity}</span>
            <button onClick={() => incrementItemQuantity()}>
              <PlusIcon />
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(addToCart({ productData, itemQuantity }))}
            >
              <CartIcon />
              Add to cart
            </button>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

export default Product;
