import React, { useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";
import Carousel from "../Carousel/Carousel.component";
import { CarouselItem } from "../Carousel/Carousel.component";

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
    </figure>
  );
}

export default Product;
