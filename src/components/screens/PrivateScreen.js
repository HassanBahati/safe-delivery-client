import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import AppNavBar from "../templetes/AppNavBar";

const PrivateScreen = () => {
  const [orders, getOrders] = useState("");

  //get data from api
  const getAllOrders = () => {
    axios
      .get("/api/orders")
      .then((response) => {
        const allOrders = response.data;
        console.log(allOrders);

        ///addd data to state
        getOrders(allOrders);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <Fragment>
      <AppNavBar />
      {orders.length < 1 ? (
        <div>
          <span
            className={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
            }}
          >
            You don't have any orders yet, order delivery now !!!
          </span>
        </div>
      ) : (
        <Fragment>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Order ID</th>
                  <th>Deliver to</th>
                  <th>Pick Up </th>
                  <th>Weight(Kgs)</th>
                  <th>Total Cost(Shs)</th>
                  <th>Status</th>
                  <td>Terminate Delivery</td>
                  {/* <th>Total Cost</th> */}
                </tr>
              </thead>

              {orders.map((order) => {
                return (
                  <Fragment key={order._id}>
                    <tbody>
                      <tr>
                        <td>{order.name}</td>
                        <td>{order._id}</td>
                        <td>{order.deliverTo}</td>
                        <td>{order.pickUp}</td>
                        <td>{order.weight}</td>
                        <td>{JSON.parse(localStorage.getItem("totalCost"))}</td>
                        <td>
                          <span style={{ color: "green" }}>
                            Pending Delivery
                          </span>
                        </td>
                        <td>
                          <button className="btn">Delete</button>
                        </td>
                        {/* <td>{JSON.parse(localStorage.getItem("totalCost"))}</td> */}
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </table>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PrivateScreen;
