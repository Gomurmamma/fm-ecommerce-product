import React, { useState } from "react";
import style from "./Carousel.module.scss";
import Image from "next/image";

type CarouselItemProps = {
  children?: JSX.Element | JSX.Element[];
  key?: Number;
  width?: string;
  imageData: {
    filePath: string;
    altText: string;
  };
};

type CarouselProps = {
  children?: JSX.Element;
};

export function CarouselItem({
  children,
  width,
  imageData,
}: CarouselItemProps): JSX.Element {
  return (
    <>
      {
        <li className={style.CarouselItem} style={{ width: width }}>
          <Image
            src={imageData.filePath}
            alt={imageData.altText}
            className={style.CarouselItem__Image}
            fill={true}
          />
        </li>
      }
      {children}
    </>
  );
}

function Carousel({ children }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number): void => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > 3) {
      // there are only 3 images
      newIndex = 3;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={style.Carousel}>
      <ul
        className={style.Carousel__inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </ul>
      <div className={style.Carousel__buttonContainer}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className={style.Carousel__buttonContainer__button}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className={style.Carousel__buttonContainer__button}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
