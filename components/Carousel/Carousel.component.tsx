import React, { useState } from "react";
import style from "./Carousel.module.scss";
import Image from "next/image";
import ShoeData from "../../data/ShoeData/ShoeData";

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
  thumbnails: {
    filePath: string;
    altText: string;
  }[];
};

type CarouselThumbnailProps = {
  children?: JSX.Element;
  imageData: {
    filePath: string;
    altText: string;
    thumbnails?: { filePath: string; altText: string }[];
  };
};

export function CarouselThumbnail({
  children,
  imageData,
}: CarouselThumbnailProps): JSX.Element {
  return (
    <>
      <li className={style.CarouselThumbnail}>
        <Image
          src={imageData.filePath}
          alt={imageData.altText}
          className={style.CarouselItem__Image}
          fill={true}
        />
      </li>
    </>
  );
}

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

function Carousel({ children, thumbnails }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number): void => {
    console.log(newIndex);
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > 3) {
      // there are only 3 images
      newIndex = 3;
    }
    console.log(newIndex);

    setActiveIndex(newIndex);
  };

  return (
    <section className={style.Carousel}>
      <ul
        className={style.Carousel__inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </ul>
      <ul className={style.Carousel__buttonContainer} role="list">
        <li>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            className={style.Carousel__buttonContainer__button}
          >
            Prev
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            className={style.Carousel__buttonContainer__button}
          >
            Next
          </button>
        </li>
      </ul>
      <ul className={style.CarouselThumbnail} role="list">
        {thumbnails.map((image, index) => {
          return (
            <li>
              <button
                onClick={() => updateIndex(index)}
                className={style.CarouselThumbnail__frame}
              >
                <Image
                  src={image.filePath}
                  alt={image.altText}
                  height={10}
                  width={10}
                  className={style.CarouselThumbnail__Image}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Carousel;
