export function SubmenuItem({productName, price}) {
  
  return (
    <li className="sidebar-submenu-category">
      <a href="#" className="sidebar-submenu-title">
        <p className="product-name">{productName}</p>
        <data value="300" className="stock" title="Available Stock">
          {price}
        </data>
      </a>
    </li>
  )
}


