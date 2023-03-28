import React from "react";
import { NumericFormat } from "react-number-format";
import { getCartTotal } from "../context/Reducer";
import { useStateValue } from "../context/StateContext";

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <NumericFormat
        renderText={(value) => <h3>{value}</h3>}
        value={getCartTotal(cart)}
        allowLeadingZeros
        thousandSeparator=","
        displayType={"text"}
        prefix={"R"}
      />
    </div>
  );
};

export default Subtotal;
