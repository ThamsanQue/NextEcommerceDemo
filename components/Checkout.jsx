import React from "react";
import { FaCreditCard, FaPaypal, FaAmazonPay } from "react-icons/fa";

const Checkout = () => {
  return (
    <article className="card">
      <div className="container">
        <div className="card-title">
          <h2>Payment</h2>
        </div>
        <div className="card-body">
          <div className="payment-type">
            <h4>Choose payment method below</h4>
            <div className="types flex justify-space-between">
              <div className="type selected">
                <div className="logo">
                  <FaCreditCard />
                </div>
                <div className="text">
                  <p>Pay with Credit Card</p>
                </div>
              </div>
              <div className="type">
                <div className="logo">
                  <FaPaypal />
                </div>
                <div className="text">
                  <p>Pay with PayPal</p>
                </div>
              </div>
              <div className="type">
                <div className="logo">
                  <FaAmazonPay />
                </div>
                <div className="text">
                  <p>Pay with Amazon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-info flex justify-space-between">
            <div className="column billing">
              <div className="title">
                <div className="num">1</div>
                <h4>Billing Info</h4>
              </div>
              <div className="field full">
                <label for="name">Full Name</label>
                <input id="name" type="text" placeholder="Full Name" />
              </div>
              <div className="field full">
                <label for="address">Billing Address</label>
                <input id="address" type="text" placeholder="Billing Address" />
              </div>
              <div className="flex justify-space-between">
                <div className="field half">
                  <label for="city">City</label>
                  <input id="city" type="text" placeholder="City" />
                </div>
                <div className="field half">
                  <label for="state">State</label>
                  <input id="state" type="text" placeholder="State" />
                </div>
              </div>
              <div className="field full">
                <label for="zip">Zip</label>
                <input id="zip" type="text" placeholder="Zip" />
              </div>
            </div>
            <div className="column shipping">
              <div className="title">
                <div className="num">2</div>
                <h4>Credit Card Info</h4>
              </div>
              <div className="field full">
                <label for="name">Cardholder Name</label>
                <input id="name" type="text" placeholder="Full Name" />
              </div>
              <div className="field full">
                <label for="address">Card Number</label>
                <input
                  id="address"
                  type="text"
                  placeholder="1234-5678-9012-3456"
                />
              </div>
              <div className="flex justify-space-between">
                <div className="field half">
                  <label for="city">Exp. Month</label>
                  <input id="city" type="text" placeholder="12" />
                </div>
                <div className="field half">
                  <label for="state">Exp. Year</label>
                  <input id="state" type="text" placeholder="19" />
                </div>
              </div>
              <div className="field full">
                <label for="zip">CVC Number</label>
                <input id="zip" type="text" placeholder="468" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions flex justify-space-between">
          <div className="flex-start">
            <button className="button button-secondary">Return to Store</button>
          </div>
          <div className="flex-end">
            <button className="button button-link">Back to Shipping</button>
            <button className="button button-primary">Proceed</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Checkout;
