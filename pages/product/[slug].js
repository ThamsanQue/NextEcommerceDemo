import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateValue } from "../../context/StateContext";
import { toast } from "react-hot-toast";
import Image from "next/image";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, _id } = product;
  const [{ cart }, dispatch] = useStateValue();
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const checkProductInCart = cart.find((item) => item.id === _id);
    if (checkProductInCart) {
      cart.map((cartProduct) => {
        if (cartProduct.id === _id) toast.error("Item already added");
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: _id,
          name: name,
          image: image,
          price: price,
          qty: qty,
        },
      });
      toast.success(`${name} added to the cart.`);
    }
  };

  const reduction = (id) => {
    if (_id === id) {
      qty === 1 ? (prev = 1) : setQty((prev -= 1));
    }
  };

  const increase = (id) => {
    if (_id === id) {
      setQty((prev += 1));
    }
  };

  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[index]).url()}
              className="product-detail-image"
              alt="Product Image"
              width={300}
              height={300}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                src={urlFor(item).url()}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                key={i}
                alt="Product Image"
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">R{price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => reduction(_id)}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick>
                {qty}
              </span>
              <span className="plus" onClick={() => increase(_id)}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
          current
        }
      }
      `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
