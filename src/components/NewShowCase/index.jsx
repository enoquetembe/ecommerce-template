export function NewShowCase(props) {

  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img
          src={props.image}
       
          className="product-img default"
          width="300"
        />
        <img
          src={props.hoverImage}
         
          className="product-img hover"
          width="300"
        />

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {props.category}
        </a>

        <h3>
          <a href="#" className="showcase-title">
            {props.title}
          </a>
        </h3>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>

        <div className="price-box">
          <p className="price">{props.price}</p>
          <del>{props.prevPrice}</del>
        </div>
      </div>
    </div>
  )
}