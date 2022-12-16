import React from "react";

const Right = () => {
  return (
    <div className="right_buy">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt=""
      />
      <div className="cost_right">
        <p>Your order is eligible for Free Delivery</p>
        <br />
        <span style={{ color: "#565959" }}>
          {" "}
          Select this option at checkout. Details
        </span>
        <h3>
          Subtotal (1 Item ): <span style={{ fontWeight: 700 }}>$4849.00</span>
        </h3>
        <button className="rightbuy_btn">Process to Buy</button>
        <div className="emi">Emi Available</div>
      </div>
    </div>
  );
};

export default Right;
