import React from "react";
import { Link } from "react-router-dom";
import "../screens/PrivateScreen.css";


function AppNavBar() {
  return (
    <div class="Appheader">
      <div class="Appcontainer">
        <div class="Appnavbar">
          <div class="Appnavbar_logo">
            <h1>SAFE COURIER</h1>
          </div>

          <nav className="Appnav">
            <ul class="Appnavbar_links" id="MenuItems">
              <li class="Appnavbar_linkItem">
                <Link to="/order">New Order</Link>
              </li>
              <li class="Appnavbar_linkItem">
                <Link to="#">Track Delivery</Link>
              </li>
              <li class="navbar_linkItem">
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("Order");
                  }}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </nav>

          {/* <img src="./images/menu.png" class="menu-icon" onclick="menutoggle()"> */}
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
