import React, { useState } from "react";
import style from "./Product.module.scss";
import Image from "next/image";

type Props = {
  imageData: { filePath: string; altText: string }[];
  children?: React.ReactNode;
};

function Product({ imageData, children }: Props): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: any): void => {
    console.log(newIndex);

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <figure className={style.Product}>
      <button
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        prev
      </button>
      <div className={style.Carousel}>
        <ul
          className={style.Carousel__inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {imageData ? (
            imageData.map((image, index) => {
              return (
                <li key={index} className={style.Carousel__imageFrame}>
                  <Image
                    src={image.filePath}
                    alt={image.altText}
                    className={style.Carousel__image}
                    fill={true}
                  />
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
      <figcaption>Shoes</figcaption>
    </figure>
  );
}

export default Product;
