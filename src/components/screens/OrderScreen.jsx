import { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import CheckoutSteps from "./CheckoutSteps";

const OrderScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [deliverTo, setDeliverTo] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/orders",
        {
          name,
          pickUp,
          deliverTo,
          weight,
        },
        config
      );

      localStorage.setItem("Order", JSON.stringify(data));

      history.push("/payments");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Fragment>
      <CheckoutSteps step1></CheckoutSteps>

      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">Place Order</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pickUp">Pick up Location:</label>
            <input
              type="text"
              required
              id="pickUp"
              placeholder="Enter pick up location"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deliverTo">Delivery Location:</label>
            <input
              type="text"
              required
              id="deliverTo"
              autoComplete="true"
              placeholder="Enter delivery location"
              value={deliverTo}
              onChange={(e) => setDeliverTo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight(Kgs):</label>
            <input
              type="number"
              required
              id="weight"
              autoComplete="true"
              placeholder="Enter Weight of Parcel"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Order
          </button>

          <span className="register-screen__subtext">
            Discard Order? <Link to="/dashboard">Cancel</Link>
          </span>
        </form>
      </div>
    </Fragment>
  );
};

export default OrderScreen;
