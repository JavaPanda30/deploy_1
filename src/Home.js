import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <Carousel className='home_image'/>  */}
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61EC3Je+XaL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={124141}
            title="Kindle Oasis Essentials Bundle including Kindle Oasis (Graphite, Ad-Supported), Leather Cover, and Power Adapter"
            price={11299.0}
            image="https://m.media-amazon.com/images/I/61-ICCXKu2L._AC_SX679_.jpg"
            star={4}
          />
          <Product
            id={197151}
            title="The Diary of a CEO: The 33 Laws of Business and Life"
            price={899.0}
            image="https://m.media-amazon.com/images/I/71UbZN8kIEL._SY466_.jpg"
            star={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={541262}
            title="Smart Watch for Men(Answer/Make Call),Fitness Tracker,100+ Sport Modes Activity Tracker with Heart Rate monitor"
            price={7999.0}
            image="https://m.media-amazon.com/images/I/61cEtrrL2VL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            star={5}
          />
          <Product
            id={541263}
            title="Kensington iPad Docking Station - for 11' iPad Pro and 10.9' iPad Air 4 and 5"
            price={4999.0}
            image="https://m.media-amazon.com/images/I/81x+T3RK4LL._AC_SX466_.jpg"
            star={4}
          />
          <Product
            id={541264}
            title="Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century "
            price={459.0}
            image="https://m.media-amazon.com/images/I/71UypkUjStL._SY466_.jpg"
            star={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={541265}
            title="TCL 40-Inch Class S3 1080p LED Smart TV with Roku TV (40S350R, 2023 Model), Compatible with Alexa, Google Assistant, and Apple HomeKit Compatibility, Streaming FHD Television,Black"
            price={45999.0}
            image="https://m.media-amazon.com/images/I/81Vv5lv3yyL._AC_SX466_.jpg"
            star={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
