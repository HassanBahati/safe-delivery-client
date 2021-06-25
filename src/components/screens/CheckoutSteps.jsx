import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps" style={{marginTop:"10px", marginLeft:'20px', marginRight:"20px"}}>
      <div className={props.step1 ? "active" : ""}>Sign In</div>
      <div className={props.step2 ? "active" : ""}>Place Order</div>
      <div className={props.step3 ? "active" : ""}>Payments</div>
      <div className={props.step4 ? "active" : ""}>Check Out</div>
    </div>
  );
}
