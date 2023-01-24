import React, { useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";
import Carousel from "../Carousel/Carousel.component";
import { CarouselItem } from "../Carousel/Carousel.component";

type Props = {
  imageData: { filePath: string; altText: string }[];
  children?: React.ReactNode;
};

function Product({ imageData, children }: Props): JSX.Element {
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
      <figcaption>Shoes</figcaption>
    </figure>
  );
}

export default Product;
