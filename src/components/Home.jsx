import React from "react";

function Home() {
  return (
    <div className="add-to-cart">
      <div className="cart-img"></div>
      <div className="items">
        <div className="products-img">
          <img
            src="https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone.png"
            alt=""
          />
        </div>
        <div className="products-content">
          <h3 className="product-name">I phone 13</h3>
          <h3 className="product-price">$ 1300</h3>
        </div>
        <div className="products-button">
          <button className="btn-add-to-cart">add to cart</button>
        </div>
      </div>
      <div className="items">
        <div className="products-img">
          <img
            src="https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone.png"
            alt=""
          />
        </div>
        <div className="products-content">
          <h3 className="product-name">I phone 14</h3>
          <h3 className="product-price">$ 1500</h3>
        </div>
        <div className="products-button">
          <button className="btn-add-to-cart">add to cart</button>
        </div>
      </div>
      <div className="items">
        <div className="products-img">
          <img
            src="https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone.png"
            alt=""
          />
        </div>
        <div className="products-content">
          <h3 className="product-name">I phone 11</h3>
          <h3 className="product-price">$ 1000</h3>
        </div>
        <div className="products-button">
          <button className="btn-add-to-cart">add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
