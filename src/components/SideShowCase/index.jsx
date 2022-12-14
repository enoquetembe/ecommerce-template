export function SideShowCase(props) {
  return (
    <div className="showcase">
      <a href="#" className="showcase-img-box">
        <img
          src={props.image}
          alt="baby fabric shoes"
          width="75"
          height="75"
          className="showcase-img"
        />
      </a>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">{props.title}</h4>
        </a>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

        <div className="price-box">
          <del>{props.prevPrice}</del>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </div>
  )
}