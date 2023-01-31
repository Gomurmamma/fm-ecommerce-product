import style from "./Gallery.module.scss";
import Image from "next/image";

type Props = {
  imageData: { filePath: string; altText: string }[];
};

function Gallery({ imageData }: Props): JSX.Element {
  return (
    <section className={style.Gallery}>
      <ul>
        {imageData?.map((image, index) => {
          return (
            <li key={index}>
              <button>
                <Image
                  src={image.filePath}
                  alt={image.altText}
                  fill={true}
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
