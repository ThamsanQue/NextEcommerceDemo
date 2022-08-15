import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../context/Reducer";
import { useStateValue } from "../context/StateContext";

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => <h3>{value}</h3>}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R"}
      />
    </div>
  );
};

export default Subtotal;
