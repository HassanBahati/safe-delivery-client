import { useState } from "react";
import "./RegisterScreen.css";
import CheckoutSteps from "./CheckoutSteps";

const PaymentsScreen = ({ history }) => {
  const [mtn, setMtn] = useState("");
  const [airtel, setAirtel] = useState("");
  const [error, setError] = useState("");

  const registerHandler =  (e) => {
    e.preventDefault();

    
    

    try {
      const { data } = 
        {
         mtn, airtel
        }

      localStorage.setItem("Payment", JSON.stringify(data));

      history.push("/checkout");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
      <div> <CheckoutSteps step1 step2></CheckoutSteps>
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Payment Method</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="mtn">MTN Mobile Money:</label>
          <input
            type="radio"
            required
            id="mtn"
            placeholder="Enter username"
            value={mtn}
            onChange={(e) => setMtn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="airtel">Airtel Mobile Money:</label>
          <input
            type="radio"
            required
            id="airtel"
            placeholder="Email address"
            value={airtel}
            onChange={(e) => setAirtel(e.target.value)}
          />
        </div>
      
        <button type="submit" className="btn btn-primary">
          Confirm Payment Method
        </button>

            </form>
            </div>
    </div>
  );
};

export default PaymentsScreen;
