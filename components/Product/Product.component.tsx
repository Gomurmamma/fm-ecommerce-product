import style from "./Product.module.scss";
import Image from "next/image";

type Props = {
  imageData: { filePath: string; altText: string }[];
};

function Product({ imageData }: Props): JSX.Element {
  return (
    <figure className={style.Product}>
      <button> {`>`} </button>
      <button> {`<`} </button>
      <div className={style.Carousel}>
        <ul
          className={style.Carousel__inner}
          style={{ transform: "translate(-0%)" }}
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
