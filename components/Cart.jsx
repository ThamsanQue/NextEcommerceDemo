import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateValue } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Subtotal from "./Subtotal";
import Image from "next/image";

const Cart = () => {
  const cartRef = useRef();
  const [{ cart }, dispatch] = useStateValue();

  const toggleCart = () => {
    dispatch({
      type: "SHOW_CART",
      showCart: false,
    });
  };
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty === 1 ? (item.qty = 1) : (item.qty -= 1);
      }
    });
    dispatch({
      type: "UPDATE_CART",
      cart: cart,
    });
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty += 1;
      }
    });
    dispatch({
      type: "UPDATE_CART",
      cart: cart,
    });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={toggleCart}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({cart.length} items)</span>
        </button>
        {cart.length < 1 ? (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping Cart is empty</h3>
            <Link href="/">
              <button type="button" onClick={toggleCart} className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="product-container">
              {cart.map((item) => (
                <div className="product" key={item._id}>
                  <Image
                    src={urlFor(item?.image[0]).url()}
                    alt="Product Image"
                    className="cart-product-image"
                    width={200}
                    height={200}
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>R{item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() => reduction(item.id)}
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num" onClick>
                            {item.qty}
                          </span>
                          <span
                            className="plus"
                            onClick={() => increase(item.id)}
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <Subtotal />
              </div>
              <div className="btn-container">
                <Link href="/checkout">
                  <button type="button" className="btn" onClick={toggleCart}>
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
