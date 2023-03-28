import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            className="product-image"
            alt="Product Image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">R{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
