import React from "react";
import CheckoutSteps from "./CheckoutSteps";
import "./RegisterScreen.css";

const CheckOutScreen = ({history}) => {

  const handleCheckOut = (e) =>{
    e.preventDefault()

    history.push('/dashboard')
  }

  const weight = JSON.parse(localStorage.getItem("Order")).weight
  //charge of 10,000shs per kg
  const totalCost = weight*10000
  localStorage.setItem('totalCost', totalCost)
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
     
      <div className="register-screen" style={{marginTop:'30px'}}>
        <form onSubmit={handleCheckOut} className="register-screen__form">
          <h3 className="register-screen__title">Check Out</h3>

          <div className="form-group">
            <label htmlFor="password">Order Id:</label>{" "}
            <input
              required
              id="password"
              value={JSON.parse(localStorage.getItem("Order"))._id}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Name:</label>{" "}
            <input
              required
              id="password"
              value={JSON.parse(localStorage.getItem("Order")).name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Pick Up Location:</label>{" "}
            <input
              required
              id="password"
              value={JSON.parse(localStorage.getItem("Order")).pickUp}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Delivery Location:</label>{" "}
            <input
              required
              id="password"
              value={JSON.parse(localStorage.getItem("Order")).deliverTo}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Weight:</label>{" "}
            <input
              required
              id="password"
              value={weight}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Total Cost:</label>{" "}
            <input
              required
              id="password"
              value={`${totalCost} Shs`}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Confirm Delivery Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutScreen;
