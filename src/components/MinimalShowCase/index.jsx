export function MinimalShowCase(props) {
  
  return (
    
    <div className="showcase">
      <a href="#" className="showcase-img-box">
        <img
          src={props.image}
          alt="relaxed short full sleeve t-shirt"
          width="70"
          className="showcase-img"
        />
      </a>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">{props.title}</h4>
        </a>

        <a href="#" className="showcase-category">
          {props.category}
        </a>

        <div className="price-box">
          <p className="price">{props.price}</p>
          <del>{props.prevPrice}</del>
        </div>
      </div>
    </div>

  )
}