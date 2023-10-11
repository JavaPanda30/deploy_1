import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
}

export default Carousel;
