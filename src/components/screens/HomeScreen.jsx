import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function HomeScreen() {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="navbar">
            <div class="navbar_logo">
              <h1>SAFE COURIER</h1>
            </div>

            <nav>
              <ul class="navbar_links" id="MenuItems">
                <li class="navbar_linkItem">
                  <Link to='/'>Home</Link>
                </li>
                <li class="navbar_linkItem">
                  <Link to='#' >Services</Link>
                </li>
                <li class="navbar_linkItem">
                 <Link to='#' >Contact Us</Link>
                </li>
                <li class="navbar_linkItem">
                  <Link to='/login'>Login</Link>
                </li>
                <li class="navbar_linkItem">
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
            </nav>

            {/* <img src="./images/menu.png" class="menu-icon" onclick="menutoggle()"> */}
          </div>

          <div class="row">
            <div class="col-2">
              <h1>
                 Instant,<br /> Secure and Safe...
              </h1>
              <p>
                Happiness isnt always about having all you need. It's about
                having the right company and friends. 
                <br /> Show your loved ones that you care !!!
                Get your Parcel <b>delivered</b> today.
              </p>
              <Link to="/dashboard" class="btn">
                Explore Now &#8594;
              </Link>
            </div>

            <div class="col-2">
              <img alt='' src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y291cmllcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
          </div>
        </div>
      </div>


      <div class="testimonial">
      <div class="small-container">
        <div class="row">
       
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply a dumy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
         
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
         
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I5q2j6TeO1NIRrpz0tesD37cTh_5VnqhIavKfSv1w=s83-c-mo" alt="" />
            <h3>Hassan Bahati</h3>
          </div>
        
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply a dumy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
         
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
        
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I5q2j6TeO1NIRrpz0tesD37cTh_5VnqhIavKfSv1w=s83-c-mo" alt="" />
            <h3>Hassan Bahati</h3>
          </div>
       
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply a dumy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
           
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I5q2j6TeO1NIRrpz0tesD37cTh_5VnqhIavKfSv1w=s83-c-mo" alt="" />
            <h3>Hassan Bahati</h3>
          </div>
        </div>
      </div>
    </div>


    <div class="brands">
      <div class="small-container">
     
        <div class="row">
        
          <div class="col-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrvHI0-Zf80AIRfv3qQOmL2tsWLSij84xr22XmL3cGcES8Ho-vMsnYhW5074NpnpBTJE&usqp=CAU" alt="" />
          </div>

          <div class="col-5">
            <img src="https://www.nssfug.org/images/landing_logo.png" alt="" />
          </div>
     
          <div class="col-5">
            <img src="http://drugdash.org/img/Logo.png" alt="" />
          </div>
     
          <div class="col-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
          </div>
       
          <div class="col-5">
            <img src="https://nguvu.africa/insights/assets/img/logos/GoogleforStartups.png" alt="" />
          </div>
        </div>
      </div>
    </div>



    <div class="footer">
      <div class="footer-container">
     
        <div class="footer-row">
        
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Andriod and ios mobile phone.</p>
           
            {/* <div class="app-logo">
           
              <img src="">
          
              <img src="">
            </div> */}
          </div>
    
          <div class="footer-col-2">
         
          
            <h1>SAFE COURIER</h1>
         
            <p>
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of True
              Happiness anf Togetherness Accessible to the Many. Send us to deliver anything, anywhere <a href="./home.html">SFE COURIER</a> today !!!
            </p>
          </div>
      
          <div class="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
      
          <div class="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/hassanbahatimukisa/">LinkedIn</a></li>
              <li><a href="https://twitter.com/HassanBahatiM">Twitter</a></li>
              <li><a href="https://github.com/HassanBahati">Github</a></li>
            </ul>
          </div>
        </div>
    
        
     
        <p class="copyright">Copyright 2021 - Hassan Bahati c/o Outbox Uganda</p>
        
        <p class="copyright">All Images &copy; <a href="https://unsplash.com/">unsplash.com</a></p>
      </div>
    </div>
    </div>
  );
}

export default HomeScreen;
