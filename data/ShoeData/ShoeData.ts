export const ShoeImages:
  | {
      altText: string;
      filePath: string;
      thumbnails: { altText: string; filePath: string }[];
    }[]
  | any[] = [
  { altText: "Shoe and sole", filePath: "/image-product-1.jpg" },
  { altText: "Editorial shoe scene", filePath: "/image-product-2.jpg" },
  { altText: "Individual shoe on stones", filePath: "/image-product-3.jpg" },
  {
    altText: "Side profile of shoe on a stone",
    filePath: "/image-product-4.jpg",
  },
  {
    thumbnails: [
      { altText: "Shoe and sole", filePath: "/image-product-1-thumbnail.jpg" },
      {
        altText: "Editorial shoe scene",
        filePath: "/image-product-2-thumbnail.jpg",
      },
      {
        altText: "Individual shoe on stones",
        filePath: "/image-product-3-thumbnail.jpg",
      },
      {
        altText: "Side profile of shoe on a stone",
        filePath: "/image-product-4-thumbnail.jpg",
      },
    ],
  },
];

const ShoeData: {
  companyName: string;
  productName: string;
  productDescription: string;
  salesData: {
    currentPrice: number;
    percentDiscount: number;
    originalPrice: number;
  };
  image: {
    thumbnails: any;
    altText: string;
    filePath: string;
  }[];
} = {
  companyName: "Sneaker Company",
  productName: "Fall Limited Edition Sneakers",
  productDescription:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  salesData: {
    currentPrice: 125.0,
    percentDiscount: 50,
    originalPrice: 250.0,
  },
  image: ShoeImages,
};

export default ShoeData;
