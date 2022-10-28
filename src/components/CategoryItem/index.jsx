
export function CategoryItem(props) {
  return (
    <div className="category-item">
      <div className="category-img-box">
        <img
          src= {props.image}
          alt={props.alternative}
          width="30"
        />
      </div>

      <div className="category-content-box">
        <div className="category-content-flex">
          <h3 className="category-item-title">{props.title}</h3>

          <p className="category-item-amount">{props.amount}</p>
        </div>

        <a href="#" className="category-btn">
          Show all
        </a>
      </div>
    </div>
  )
}
