import React, { useState } from "react";
import style from "./LightBoxGallery.module.scss";
import Image from "next/image";
import CloseIcon from "../../public/icon-close.svg";

type CarouselItemProps = {
  children?: JSX.Element | JSX.Element[];
  key?: Number;
  width?: string;
  imageData: {
    filePath: string;
    altText: string;
  };
};

type GalleryProps = {
  children?: JSX.Element;
  thumbnails: {
    filePath: string;
    altText: string;
  }[];
  updateLightBox: () => void;
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
      <li>
        <Image src={imageData.filePath} alt={imageData.altText} fill={true} />
      </li>
    </>
  );
}

export function GalleryItem({
  children,
  width,
  imageData,
}: CarouselItemProps): JSX.Element {
  return (
    <>
      {
        <li className={style.GalleryItem} style={{ width: width }}>
          <Image
            src={imageData.filePath}
            alt={imageData.altText}
            fill={true}
            className={style.GalleryItem__Image}
          />
        </li>
      }
      {children}
    </>
  );
}

function LightBoxGallery({
  children,
  thumbnails,
  updateLightBox,
}: GalleryProps) {
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
    <section className={style.Overlay}>
      <button
        className={style.CloseButton}
        onClick={() => {
          updateLightBox();
        }}
      >
        <CloseIcon />
      </button>
      <figure className={style.Gallery}>
        <ul
          className={style.Gallery__inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </ul>
        <ul className={style.Gallery__buttonContainer} role="list">
          <li>
            <button
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              Prev
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              Next
            </button>
          </li>
        </ul>
        <ul className={style.GalleryThumbnails} role="list">
          {thumbnails.map((image, index) => {
            return (
              <li>
                <button
                  onClick={() => updateIndex(index)}
                  className={style.GalleryThumbnails__Frame}
                >
                  <Image
                    className={style.GalleryThumbnails__Image}
                    src={image.filePath}
                    alt={image.altText}
                    height={10}
                    width={10}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </figure>
    </section>
  );
}

export default LightBoxGallery;
