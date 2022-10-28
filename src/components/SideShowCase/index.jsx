export function SideShowCase() {
  return (
    <div className="showcase">
      <a href="#" className="showcase-img-box">
        <img
          src="./assets/images/products/1.jpg"
          alt="baby fabric shoes"
          width="75"
          height="75"
          className="showcase-img"
        />
      </a>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">baby fabric shoes</h4>
        </a>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

        <div className="price-box">
          <del>$5.00</del>
          <p className="price">$4.00</p>
        </div>
      </div>
    </div>
  )
}