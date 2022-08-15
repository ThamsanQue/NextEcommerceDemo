import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext, useStateValue } from "../context/StateContext";
import Cart from "./Cart";

const Navbar = () => {
  const [{ showCart, cart }, dispatch] = useStateValue();
  const toggleCart = () => {
    dispatch({
      type: "SHOW_CART",
      showCart: true,
    });
  };
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Sanity Store</Link>
      </p>
      <button type="button" className="cart-icon" onClick={toggleCart}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{cart.length}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
