import style from "./Gallery.module.scss";
import Image from "next/image";

type Props = {
  imageData: {
    filePath: string;
    altText: string;
    thumbnails: { filePath: string; altText: string }[];
  }[];
};

function Gallery({ imageData }: Props): JSX.Element {
  return (
    <section className={style.Gallery}>
      <ul>
        {imageData?.map((image, index) => {
          return (
            <li key={index}>
              <button className={style.Gallery__imageFrame}>
                <Image
                  src={image.filePath}
                  alt={image.altText}
                  width={20}
                  height={20}
                  className={style.Gallery__imageFrame__image}
                ></Image>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={style.Gallery__thumbnailsContainer}>
        {imageData[4].thumbnails.map((image, index) => {
          return (
            <li key={index}>
              <button className={style.Gallery__imageFrame__thumbnail}>
                <Image
                  src={image.filePath}
                  alt={image.altText}
                  className={style.Gallery__imageFrame__image__thumbnail}
                  width={20}
                  height={20}
                ></Image>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Gallery;
