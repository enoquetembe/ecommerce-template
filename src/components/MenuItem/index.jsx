
export function MenuItem(props) {

  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <img
            src={props.image}
            alt="clothes"
            width="20"
            height="20"
            className="menu-title-img"
          />

          <p className="menu-title">{props.title}</p>
        </div>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

     
    </li>
  )
}