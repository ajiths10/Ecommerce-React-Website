import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemPage.css";
import Reviews from "./Reviews";

const ItemPage = (props) => {

  const [reviewState, setreview] = useState(false);
  const params = useParams();
  console.log(params.productId);


  const reviewHandler = (event) =>{
    event.preventDefault();
    console.log('Review activate');
    setreview((previousState)=>{ return !previousState});
  };

  return (
    <div>
      <div className="maindivitemPage">
        <h1 className="HeadingitemPage">Album 1</h1>
        <hr></hr>
        <div className="ImageitemPage">
          <div className="multipleImageitemPage">
            <div>
              {" "}
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="image"
                className="indImageitemPage"
              />
            </div>
            <div>
              {" "}
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="image"
                className="indImageitemPage"
              />
            </div>
            <div>
              {" "}
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="image"
                className="indImageitemPage"
              />
            </div>
            <div>
              {" "}
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="image"
                className="indImageitemPage"
              />
            </div>
          </div>
          <div className="imageitem">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              alt="image"
            />
          </div>
        </div>
        <div className="ContentHadnleitemPage">
          <div className="smallnameitem">
            <label> Smartees</label>
          </div>
          <div className="h3item">
            <h3>Full Sleeve Printed Men Sweatshirt</h3>
          </div>
          <div className="colortextnameitem">
            <label>Special price</label>
          </div>
          <div className="pricedivitem">
            <label className="amountitem"> 308 </label>
            <label className="strikeitem"> $1,499</label>
            <label className="colortextnameitem"> 79% off</label>
          </div>
          <div className="ratingitem">
            <button className="Buttonratingitem">4★</button>
            <label className="ratingcountitem">
              11,977 ratings and 1,413 reviews
            </label>
          </div>
          <div className="smallheadingtitem">Coupons for you</div>
          <div>
            <ul>
              <li>
                Special PriceGet extra 30% off upto ₹50 on 1 item(s) (price
                inclusive of discount)
              </li>
            </ul>
          </div>
          <div className="smallheadingtitem">
            <label className="smallheadingtitem"> Available offers</label>
          </div>
          <div>
            <ul>
              <li>
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth ₹100*
              </li>
              <li>Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
            </ul>
          </div>

          <div className="deliverCheckDiv">
            <div>
              <label className="deliverChecklabel">Deliver to</label>
            </div>
            <div className="deliverCheckbtninput">
              <input
                type="number"
                placeholder="Enter delivery pincode"
                className="deliverCheckinput"
              />
              <button className="deliverCheckibtn">Check</button>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="serviceslabel">
              <label>Services </label>
            </div>
            <div className="servicesitems">
              <div>
                <label>
                  <span className="servicesitemsspan">⟳</span> 10 Hour Return
                  Policy
                </label>
              </div>
              <div>
                <label>
                  {" "}
                  <span className="servicesitemsspan">❥</span> Bitcoin payment
                  available
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductdetailsMaindiv">
          <div className="ProductdetailsProductdiv">
            {" "}
            <label>Product Details</label>{" "}
          </div>
          <div className="Productdetailsplusdiv">
            {" "}
            <label>+</label>{" "}
          </div>
        </div>

        <div className="ProductdetailsMaindiv">
          <div>
            <div className="ProductdetailsProductdiv">
              {" "}
              <label>Reviews</label>
              <div className="reviewratingitem">
                <button className="reviewButtonratingitem">4★</button>
                <label className="ReviwRatingcountitem">
                  11,977 ratings and 1,413 reviews
                </label>
                <div className="ReviwProductBTNDiv">
                  <button className="ReviwProductBTN"> Rate Product</button>
                </div>
              </div>
            </div>
            <div className="Productdetailsplusdiv">
              {" "}
              <button className="Productdetailsplusbutton" onClick={reviewHandler} >+</button>{" "}
            </div>
          </div>
        </div>
        <div >
          { reviewState && <Reviews className="Reviewbody" />}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
