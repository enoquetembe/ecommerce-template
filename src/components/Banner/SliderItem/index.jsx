export function SliderItem(props) {
  return (
    <div className="slider-item">
      <img
        src={props.image}
        className="banner-img"
      />

      <div className="banner-content">
        <p className="banner-subtitle">{props.subtitle}</p>

        <h2 className="banner-title">{props.title}</h2>

        <p className="banner-text">
          starting at &dollar; <b>{props.price}</b>.00
        </p>

        <a href="#" className="banner-btn">
          Shop now
        </a>
      </div>
    </div>
  )
}