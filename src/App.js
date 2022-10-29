import { CategoryItem } from "./components/CategoryItem"

import  Dress  from "./assets/images/icons/dress.svg"
import Coat from "./assets/images/icons/coat.svg"
import Glass from "./assets/images/icons/glasses.svg"
import Shorts from "./assets/images/icons/shorts.svg"
import Tee from "./assets/images/icons/tee.svg"
import Jacket from "./assets/images/icons/jacket.svg"
import Watch from "./assets/images/icons/watch.svg"
import Hat from "./assets/images/icons/hat.svg"
import Clothes1 from  "./assets/images/products/clothes-1.jpg"
import NewJacket from "./assets/images/products/jacket-5.jpg"
import NewJacket1 from "./assets/images/products/jacket-6.jpg"
import Testimonial from  "./assets/images/testimonial-1.jpg"
import Quote from "./assets/images/icons/quotes.svg"
import CTABanner from "./assets/images/cta-banner.jpg"
import Blog1 from "./assets/images/blog-1.jpg"
import Banner1 from "./assets/images/banner-1.jpg"
import Payment from "./assets/images/payment.png"
import Shampoo from "./assets/images/products/shampoo.jpg"
import Jewellery1 from "./assets/images/products/jewellery-1.jpg"

import { MenuItem } from "./components/MenuItem"
import { SubmenuItem } from "./components/MenuItem/SubmenuItem"
import { SideShowCase } from "./components/SideShowCase"
import { MinimalShowCase } from "./components/MinimalShowCase"
import { NewShowCase } from "./components/NewShowCase"
import { Image } from "./components/NewShowCase/Image/Index"
import { BlogCard } from "./components/BlogCard"
import { SliderItem } from "./components/Banner/SliderItem"



export function App() {


  return (
    <>
      <div className="overlay" data-overlay></div>
      {/* 
      <!--
        - MODAL
      --> */}

      {/* <div className="modal" data-modal>

        <div className="modal-close-overlay" data-modal-overlay></div>

        <div className="modal-content">

          <button className="modal-close-btn" data-modal-close>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="newsletter-img">
            <img src="./assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400"/>
          </div>

          <div className="newsletter">

            <form action="#">

              <div className="newsletter-header">

                <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                <p className="newsletter-desc">
                  Subscribe the <b>Anon</b> to get latest products and discount update.
                </p>

              </div>

              <input type="email" name="email" className="email-field" placeholder="Email Address" required/>

              <button type="submit" className="btn-newsletter">Subscribe</button>

            </form>

          </div>

        </div>

      </div> */}





      {/* <!--
        - NOTIFICATION TOAST
      --> */}

      <div className="notification-toast" data-toast>

        <button className="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="toast-banner">
          <img src={Jewellery1}  width="80" height="70"/>
        </div>

        <div className="toast-detail">

          <p className="toast-message">
            Someone in new just bought
          </p>

          <p className="toast-title">
            Rose Gold Earrings
          </p>

          <p className="toast-meta">
            <time datetime="PT2M">2 Minutes</time> ago
          </p>

        </div>

      </div>





      {/* <!--
        - HEADER
      --> */}

      <header>

        <div className="header-top">

          <div className="container">

            <ul className="header-social-container">

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

            </ul>

            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>

            <div className="header-top-actions">

              <select name="currency">

                <option value="usd">USD &dollar;</option>
                <option value="eur">EUR &euro;</option>

              </select>

              <select name="language">

                <option value="en-US">English</option>
                <option value="es-ES">Espa&ntilde;ol</option>
                <option value="fr">Fran&ccedil;ais</option>

              </select>

            </div>

          </div>

        </div>

        <div className="header-main">

          <div className="container">

            <a href="#" className="header-logo">
             <h1>Shop</h1>
            </a>

            <div className="header-search-container">

              <input type="search" name="search" className="search-field" placeholder="Enter your product name..."/>

              <button className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>

            </div>

            <div className="header-user-actions">

              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>

              <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
              </button>

            </div>

          </div>

        </div>

        <nav className="desktop-navigation-menu">

          <div className="container">

            <ul className="desktop-menu-category-list">

              <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Categories</a>

                <div className="dropdown-panel">

                  <ul className="dropdown-panel-list">

                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Desktop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Laptop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Camera</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Tablet</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Headphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                          height="119"/>
                      </a>
                    </li>

                  </ul>

                  <ul className="dropdown-panel-list">

                    <li className="menu-title">
                      <a href="#">Men's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Sports</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Jacket</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Sunglasses</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119"/>
                      </a>
                    </li>

                  </ul>

                  <ul className="dropdown-panel-list">

                    <li className="menu-title">
                      <a href="#">Women's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Perfume</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Cosmetics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Bags</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119"/>
                      </a>
                    </li>

                  </ul>

                  <ul className="dropdown-panel-list">

                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Smart Watch</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Smart TV</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Keyboard</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Mouse</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Microphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119"/>
                      </a>
                    </li>

                  </ul>

                </div>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Men's</a>

                <ul className="dropdown-list">

                  <li className="dropdown-item">
                    <a href="#">Shirt</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Shorts & Jeans</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Safety Shoes</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Wallet</a>
                  </li>

                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Women's</a>

                <ul className="dropdown-list">

                  <li className="dropdown-item">
                    <a href="#">Dress & Frock</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li>

                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Jewelry</a>

                <ul className="dropdown-list">

                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>

                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Perfume</a>

                <ul className="dropdown-list">

                  <li className="dropdown-item">
                    <a href="#">Clothes Perfume</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Deodorant</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Flower Fragrance</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Air Freshener</a>
                  </li>

                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>

            </ul>

          </div>

        </nav>

        <div className="mobile-bottom-navigation">

          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>

            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>

            <span className="count">0</span>
          </button>

          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>

        </div>

        <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>

            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="mobile-menu-category-list">

            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Men's</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Shirt</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Shorts & Jeans</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Safety Shoes</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Wallet</a>
                </li>

              </ul>

            </li>

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Women's</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Dress & Frock</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Earrings</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Necklace</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Makeup Kit</a>
                </li>

              </ul>

            </li>

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Jewelry</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Earrings</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Couple Rings</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Necklace</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Bracelets</a>
                </li>

              </ul>

            </li>

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Perfume</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Clothes Perfume</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Deodorant</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Flower Fragrance</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Air Freshener</a>
                </li>

              </ul>

            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>

          </ul>

          <div className="menu-bottom">

            <ul className="menu-category-list">

              <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Language</p>

                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>

                <ul className="submenu-category-list" data-accordion>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">English</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Fren&ccedil;h</a>
                  </li>

                </ul>

              </li>

              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>

                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">USD &dollar;</a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">EUR &euro;</a>
                  </li>
                </ul>
              </li>

            </ul>

            <ul className="menu-social-container">

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

            </ul>

          </div>

        </nav>

      </header>





      {/* <!--
        - MAIN
      --> */}

      <main>

        {/* <!--
          - BANNER
        --> */}

        <div className="banner">

          <div className="container">

            <div className="slider-container has-scrollbar">

              <SliderItem 
                image={Banner1}
                subtitle="Trending item"
                title="Women's latest fashion sale"
                price = "20"
              />

              {/* <div className="slider-item">

                <img src="./assets/images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img"/>

                <div className="banner-content">

                  <p className="banner-subtitle">Trending item</p>

                  <h2 className="banner-title">Women's latest fashion sale</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>

                  <a href="#" className="banner-btn">Shop now</a>

                </div>

              </div> */}

              {/* <div className="slider-item">

                <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

                <div className="banner-content">

                  <p className="banner-subtitle">Trending accessories</p>

                  <h2 className="banner-title">Modern sunglasses</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>15</b>.00
                  </p>

                  <a href="#" className="banner-btn">Shop now</a>

                </div>

              </div>

              <div className="slider-item">

                <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

                <div className="banner-content">

                  <p className="banner-subtitle">Sale Offer</p>

                  <h2 className="banner-title">New fashion summer sale</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>29</b>.99
                  </p>

                  <a href="#" className="banner-btn">Shop now</a>

                </div>

              </div> */}

            </div> 

          </div>

        </div>


        {/* <!--
          - CATEGORY
        --> */}

        <div className="category">

          <div className="container">

            <div className="category-item-container has-scrollbar">

             <CategoryItem title="Dress & frock" image={Dress} alt = "ffff" amount="(53)"/>

             <CategoryItem title="Winter wear" image={Coat} amount="(58)"/>

             <CategoryItem title="Glass & lens" image={Glass} amount="(68)"/>

             <CategoryItem title="Shorts & jeans" image={Shorts} amount="(84)"/>

             <CategoryItem title="T-shirt" image={Tee} amount="(35)"/>

             <CategoryItem title="Jacket" image={Jacket} amount="(16)"/>

             <CategoryItem title="Watch" image={Watch} amount="(24)"/>

             <CategoryItem title="Hats & caps" image={Hat} amount="(53)"/>

            </div>

          </div>

        </div>


        {/* <!--
          - PRODUCT
        --> */}

        <div className="product-container">

          <div className="container">


            {/* <!--
              - SIDEBAR
            --> */}

            <div className="sidebar  has-scrollbar" data-mobile-menu>

              <div className="sidebar-category">

                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>

                  <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>

                <ul className="sidebar-menu-category-list">
                    
                    <MenuItem image={Dress} title="clothes">
                      <ul className="sidebar-submenu-category-list" data-accordion>
                        <SubmenuItem productName="Clothes"  price={300}/>
                      </ul>
                    </MenuItem>
                  {/* <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                          className="menu-title-img"/>

                        <p className="menu-title">Clothes</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shirt</p>
                          <data value="300" className="stock" title="Available Stock">300</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">shorts & jeans</p>
                          <data value="60" className="stock" title="Available Stock">60</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data value="50" className="stock" title="Available Stock">50</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress & frock</p>
                          <data value="87" className="stock" title="Available Stock">87</data>
                        </a>
                      </li>

                    </ul>

                  </li> */}

                  {/* <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/shoes.svg" alt="footwear" className="menu-title-img" width="20"
                          height="20"/>

                        <p className="menu-title">Footwear</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sports</p>
                          <data value="45" className="stock" title="Available Stock">45</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Formal</p>
                          <data value="75" className="stock" title="Available Stock">75</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Casual</p>
                          <data value="35" className="stock" title="Available Stock">35</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Safety Shoes</p>
                          <data value="26" className="stock" title="Available Stock">26</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/jewelry.svg" alt="clothes" className="menu-title-img" width="20"
                          height="20"/>

                        <p className="menu-title">Jewelry</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Earrings</p>
                          <data value="46" className="stock" title="Available Stock">46</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Couple Rings</p>
                          <data value="73" className="stock" title="Available Stock">73</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Necklace</p>
                          <data value="61" className="stock" title="Available Stock">61</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/perfume.svg" alt="perfume" className="menu-title-img" width="20"
                          height="20"/>

                        <p className="menu-title">Perfume</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Clothes Perfume</p>
                          <data value="12" className="stock" title="Available Stock">12 pcs</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Deodorant</p>
                          <data value="60" className="stock" title="Available Stock">60 pcs</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data value="50" className="stock" title="Available Stock">50 pcs</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress & frock</p>
                          <data value="87" className="stock" title="Available Stock">87 pcs</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" className="menu-title-img" width="20"
                          height="20"/>

                        <p className="menu-title">Cosmetics</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shampoo</p>
                          <data value="68" className="stock" title="Available Stock">68</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunscreen</p>
                          <data value="46" className="stock" title="Available Stock">46</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Body Wash</p>
                          <data value="79" className="stock" title="Available Stock">79</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Makeup Kit</p>
                          <data value="23" className="stock" title="Available Stock">23</data>
                        </a>
                      </li>

                    </ul>

                  </li>

                  <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
                          height="20"/>

                        <p className="menu-title">Glasses</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunglasses</p>
                          <data value="50" className="stock" title="Available Stock">50</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Lenses</p>
                          <data value="48" className="stock" title="Available Stock">48</data>
                        </a>
                      </li>

                    </ul>

                  </li>   */}

                  {/* <li className="sidebar-menu-category">

                    <button className="sidebar-accordion-menu" data-accordion-btn>

                      <div className="menu-title-flex">
                        <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20"/>

                        <p className="menu-title">Bags</p>
                      </div>

                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>

                    </button>

                    <ul className="sidebar-submenu-category-list" data-accordion>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shopping Bag</p>
                          <data value="62" className="stock" title="Available Stock">62</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Gym Backpack</p>
                          <data value="35" className="stock" title="Available Stock">35</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Purse</p>
                          <data value="80" className="stock" title="Available Stock">80</data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Wallet</p>
                          <data value="75" className="stock" title="Available Stock">75</data>
                        </a>
                      </li>

                    </ul>

                  </li> */}

                </ul>

              </div>

              <div className="product-showcase">

                <h3 className="showcase-heading">best sellers</h3>

                <div className="showcase-wrapper">

                  <div className="showcase-container">

                    <SideShowCase 
                      image={Glass} 
                      title="Baby fabric shoes"
                      prevPrice="$5.00"
                      price="$4.00"
                    />
                    {/* <div className="showcase">

                      <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                          className="showcase-img"/>
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

                    </div> */}

                    {/* <div className="showcase">

                      <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img"
                          width="75" height="75"/>
                      </a>

                      <div className="showcase-content">

                        <a href="#">
                          <h4 className="showcase-title">men's hoodies t-shirt</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div className="price-box">
                          <del>$17.00</del>
                          <p className="price">$7.00</p>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width="75"
                          height="75"/>
                      </a>

                      <div className="showcase-content">

                        <a href="#">
                          <h4 className="showcase-title">girls t-shirt</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-half-outline"></ion-icon>
                        </div>

                        <div className="price-box">
                          <del>$5.00</del>
                          <p className="price">$3.00</p>
                        </div>

                      </div>

                    </div>

                    <div className="showcase">

                      <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width="75"
                          height="75"/>
                      </a>

                      <div className="showcase-content">

                        <a href="#">
                          <h4 className="showcase-title">woolen hat for men</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>

                        <div className="price-box">
                          <del>$15.00</del>
                          <p className="price">$12.00</p>
                        </div>

                      </div>

                    </div> */}

                  </div>

                </div>

              </div>

            </div>



            <div className="product-box">

              {/* <!--
                - PRODUCT MINIMAL
              --> */}

              <div className="product-minimal">

                <div className="product-showcase">

                  <h2 className="title">New Arrivals</h2>

                  <div className="showcase-wrapper has-scrollbar">

                    <div className="showcase-container">

                      <MinimalShowCase 
                        image={Clothes1} 
                        title="Relaxed Short full Sleeve T-Shirt"
                        category="Clothes"
                        price= "$45.00"
                        prevPrice= "$12.00"
                      />
                      
                      {/* <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/clothes-1.jpg" alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                          </a>

                          <a href="#" className="showcase-category">Clothes</a>

                          <div className="price-box">
                            <p className="price">$45.00</p>
                            <del>$12.00</del>
                          </div>

                        </div>

                      </div> */}

                     {/* 
                      <div className="showcase">
                      
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/clothes-2.jpg" alt="girls pink embro design top" className="showcase-img" width="70"/>
                        </a>
                      
                        <div className="showcase-content">
                      
                          <a href="#">
                            <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                          </a>
                      
                          <a href="#" className="showcase-category">Clothes</a>
                      
                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$9.00</del>
                          </div>
                      
                        </div>
                      
                      </div>

                      <div className="showcase">
                      
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/clothes-3.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                            width="70"/>
                        </a>
                      
                        <div className="showcase-content">
                      
                          <a href="#">
                            <h4 className="showcase-title">Black Floral Wrap Midi Skirt</h4>
                          </a>
                      
                          <a href="#" className="showcase-category">Clothes</a>
                      
                          <div className="price-box">
                            <p className="price">$76.00</p>
                            <del>$25.00</del>
                          </div>
                      
                        </div>
                      
                      </div>

                      <div className="showcase">
                      
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                            width="70"/>
                        </a>
                      
                        <div className="showcase-content">
                      
                          <a href="#">
                            <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                          </a>
                      
                          <a href="#" className="showcase-category">Mens Fashion</a>
                      
                          <div className="price-box">
                            <p className="price">$68.00</p>
                            <del>$31.00</del>
                          </div>
                      
                        </div>
                      
                      </div> */}

                    </div>

                    <div className="showcase-container">
                    
                      {/* <div className="showcase">
                    
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                            width="70"/>
                        </a>
                    
                        <div className="showcase-content">
                    
                          <a href="#">
                            <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                          </a>
                    
                          <a href="#" className="showcase-category">Winter wear</a>
                    
                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$11.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div className="showcase">
                    
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                            width="70"/>
                        </a>
                    
                        <div className="showcase-content">
                    
                          <a href="#">
                            <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>
                    
                          <a href="#" className="showcase-category">Winter wear</a>
                    
                          <div className="price-box">
                            <p className="price">$32.00</p>
                            <del>$20.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div className="showcase">
                    
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                            width="70"/>
                        </a>
                    
                        <div className="showcase-content">
                    
                          <a href="#">
                            <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>
                    
                          <a href="#" className="showcase-category">Jackets</a>
                    
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$25.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                    
                      <div className="showcase">
                    
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                            width="70"/>
                        </a>
                    
                        <div className="showcase-content">
                    
                          <a href="#">
                            <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                          </a>
                    
                          <a href="#" className="showcase-category">Shorts</a>
                    
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$10.00</del>
                          </div>
                    
                        </div>
                    
                      </div>
                     */}
                    </div>

                  </div>

                </div>

                <div className="product-showcase">
                
                  <h2 className="title">Trending</h2>
                
                  <div className="showcase-wrapper  has-scrollbar">
                
                    <div className="showcase-container">

                      <MinimalShowCase 
                        image={Clothes1} 
                        title="Relaxed Short full Sleeve T-Shirt"
                        category="Clothes"
                        price= "$45.00"
                        prevPrice= "$12.00"
                      />
                
                      {/* <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/sports-1.jpg" alt="running & trekking shoes - white" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Sports</a>
                
                          <div className="price-box">
                            <p className="price">$49.00</p>
                            <del>$15.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/sports-2.jpg" alt="trekking & running shoes - black" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Trekking & Running Shoes - black</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Sports</a>
                
                          <div className="price-box">
                            <p className="price">$78.00</p>
                            <del>$36.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/party-wear-1.jpg" alt="womens party wear shoes" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Party wear</a>
                
                          <div className="price-box">
                            <p className="price">$94.00</p>
                            <del>$42.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/sports-3.jpg" alt="sports claw women's shoes" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Sports</a>
                
                          <div className="price-box">
                            <p className="price">$54.00</p>
                            <del>$65.00</del>
                          </div>
                
                        </div>
                
                      </div> */}
                
                    </div>
                
                    <div className="showcase-container">
{/*                 
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Sports</a>
                
                          <div className="price-box">
                            <p className="price">$52.00</p>
                            <del>$55.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Boot With Suede Detail</h4>
                          </a>
                
                          <a href="#" className="showcase-category">boots</a>
                
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                          </a>
                
                          <a href="#" className="showcase-category">formal</a>
                
                          <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Casual</a>
                
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$55.00</del>
                          </div>
                
                        </div>
                
                      </div> */}
                
                    </div>
                
                  </div>
                
                </div>

                <div className="product-showcase">
                
                  <h2 className="title">Top Rated</h2>
                
                  <div className="showcase-wrapper  has-scrollbar">
                
                    <div className="showcase-container">
                      
                      <MinimalShowCase 
                        image={Clothes1} 
                        title="Relaxed Short full Sleeve T-Shirt"
                        category="Clothes"
                        price= "$45.00"
                        prevPrice= "$12.00"
                      />
                      {/* <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Watches</a>
                
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$34.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jewellery-3.jpg" alt="silver deer heart necklace" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Jewellery</a>
                
                          <div className="price-box">
                            <p className="price">$84.00</p>
                            <del>$30.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/perfume.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Perfume</a>
                
                          <div className="price-box">
                            <p className="price">$42.00</p>
                            <del>$10.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/belt.jpg" alt="men's leather reversible belt" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Belt</a>
                
                          <div className="price-box">
                            <p className="price">$24.00</p>
                            <del>$10.00</del>
                          </div>
                
                        </div>
                
                      </div> */}
                
                    </div>
                
                    <div className="showcase-container">
{/*                 
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classNameic ring" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">platinum Zircon ClassNameic Ring</h4>
                          </a>
                
                          <a href="#" className="showcase-category">jewellery</a>
                
                          <div className="price-box">
                            <p className="price">$62.00</p>
                            <del>$65.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Smart watche Vital Plus</h4>
                          </a>
                
                          <a href="#" className="showcase-category">Watches</a>
                
                          <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">shampoo conditioner packs</h4>
                          </a>
                
                          <a href="#" className="showcase-category">cosmetics</a>
                
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                
                        </div>
                
                      </div>
                
                      <div className="showcase">
                
                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                            width="70"/>
                        </a>
                
                        <div className="showcase-content">
                
                          <a href="#">
                            <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                          </a>
                
                          <a href="#" className="showcase-category">jewellery</a>
                
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                
                        </div>
                
                      </div> */}
                
                    </div>
                
                  </div>
                
                </div>

              </div>



              {/* <!--
                - PRODUCT FEATURED
              --> */}

              <div className="product-featured">

                <h2 className="title">Deal of the day</h2>

                <div className="showcase-wrapper has-scrollbar">

                  <div className="showcase-container">

                    <div className="showcase">
                      
                      <div className="showcase-banner">
                        <img src={Shampoo} alt="shampoo, conditioner & facewash packs" className="showcase-img"/>
                      </div>

                      <div className="showcase-content">
                        
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <a href="#">
                          <h3 className="showcase-title">shampoo, conditioner & facewash packs</h3>
                        </a>

                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div className="price-box">
                          <p className="price">$150.00</p>

                          <del>$200.00</del>
                        </div>

                        <button className="add-cart-btn">add to cart</button>

                        <div className="showcase-status">
                          <div className="wrapper">
                            <p>
                              already sold: <b>20</b>
                            </p>

                            <p>
                              available: <b>40</b>
                            </p>
                          </div>

                          <div className="showcase-status-bar"></div>
                        </div>

                        <div className="countdown-box">

                          <p className="countdown-desc">
                            Hurry Up! Offer ends in:
                          </p>

                          <div className="countdown">

                            <div className="countdown-content">

                              <p className="display-number">360</p>

                              <p className="display-text">Days</p>

                            </div>

                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">00</p>
                              <p className="display-text">Sec</p>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="showcase-container">
                  
                    <div className="showcase">
                  
                      <div className="showcase-banner">
                        <img src={Jewellery1} alt="Rose Gold diamonds Earring" className="showcase-img"/>
                      </div>
                  
                      <div className="showcase-content">
                  
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>
                  
                        <h3 className="showcase-title">
                          <a href="#" className="showcase-title">Rose Gold diamonds Earring</a>
                        </h3>
                  
                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>
                  
                        <div className="price-box">
                          <p className="price">$1990.00</p>
                          <del>$2000.00</del>
                        </div>
                  
                        <button className="add-cart-btn">add to cart</button>
                  
                        <div className="showcase-status">
                          <div className="wrapper">
                            <p> already sold: <b>15</b> </p>
                  
                            <p> available: <b>40</b> </p>
                          </div>
                  
                          <div className="showcase-status-bar"></div>
                        </div>
                  
                        <div className="countdown-box">
                  
                          <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                  
                          <div className="countdown">
                            <div className="countdown-content">
                              <p className="display-number">360</p>
                              <p className="display-text">Days</p>
                            </div>
                  
                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>
                  
                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>
                  
                            <div className="countdown-content">
                              <p className="display-number">00</p>
                              <p className="display-text">Sec</p>
                            </div>
                          </div>
                  
                        </div>
                  
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

              </div>



              {/* <!--
                - PRODUCT GRID
              --> */}

              <div className="product-main">

                <h2 className="title">New Products</h2>

                <div className="product-grid">

                  {/* <div className="showcase">

                    <div className="showcase-banner">

                      <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
                      <img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img hover"/>

                      <p className="showcase-badge">15%</p>

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

                      <a href="#" className="showcase-category">jacket</a>

                      <a href="#">
                        <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <p className="price">$48.00</p>
                        <del>$75.00</del>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover"
                        width="300"/>
                  
                      <p className="showcase-badge angle black">sale</p>
                  
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
                      <a href="#" className="showcase-category">shirt</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$56.00</del>
                      </div>
                  
                    </div>
                  
                  </div> */}

                  <NewShowCase 
                    image={NewJacket} 
                    hoverImage={NewJacket1} 
                    category="Jacket" 
                    title="MEN Yarn Fleece Full-Zip Jacket" 
                     price="$45" 
                     prevPrice="56"
                  />
                   
                

                  {/* <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover"
                        width="300"/>
                  
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
                      <a href="#" className="showcase-category">Jacket</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$65.00</del>
                      </div>
                  
                    </div>
                  
                  </div> */}

                  {/* <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/clothes-3.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/clothes-4.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img hover"
                        width="300"/>
                  
                      <p className="showcase-badge angle pink">new</p>
                  
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
                      <a href="#" className="showcase-category">skirt</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$35.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/shoe-2.jpg" alt="Casual Men's Brown shoes" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/shoe-2_1.jpg" alt="Casual Men's Brown shoes" className="product-img hover"
                        width="300"/>
                  
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
                      <a href="#" className="showcase-category">casual</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$99.00</p>
                        <del>$105.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/watch-3.jpg" alt="Pocket Watch Leather Pouch" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/watch-4.jpg" alt="Pocket Watch Leather Pouch" className="product-img hover"
                        width="300"/>
                  
                      <p className="showcase-badge angle black">sale</p>
                  
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
                      <a href="#" className="showcase-category">watches</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$150.00</p>
                        <del>$170.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/watch-1.jpg" alt="Smart watche Vital Plus" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/watch-2.jpg" alt="Smart watche Vital Plus" className="product-img hover" width="300"/>
                  
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
                      <a href="#" className="showcase-category">watches</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$100.00</p>
                        <del>$120.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/party-wear-1.jpg" alt="Womens Party Wear Shoes" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/party-wear-2.jpg" alt="Womens Party Wear Shoes" className="product-img hover"
                        width="300"/>
                  
                      <p className="showcase-badge angle black">sale</p>
                  
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
                      <a href="#" className="showcase-category">party wear</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$30.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" className="product-img hover"
                        width="300"/>
                  
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
                      <a href="#" className="showcase-category">jacket</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$32.00</p>
                        <del>$45.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" className="product-img hover"
                        width="300"/>
                  
                      <p className="showcase-badge angle black">sale</p>
                  
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
                      <a href="#" className="showcase-category">sports</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Trekking & Running Shoes - black</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$64.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img default"
                        width="300"/>
                      <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img hover"
                        width="300"/>
                  
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
                      <a href="#" className="showcase-category">formal</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$65.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <div className="showcase-banner">
                      <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts"
                        className="product-img default" width="300"/>
                      <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts"
                        className="product-img hover" width="300"/>
                  
                      <p className="showcase-badge angle black">sale</p>
                  
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
                      <a href="#" className="showcase-category">shorts</a>
                  
                      <h3>
                        <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                      </h3>
                  
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                  
                      <div className="price-box">
                        <p className="price">$78.00</p>
                        <del>$85.00</del>
                      </div>
                  
                    </div>
                  
                  </div> */}

                </div>

              </div>

            </div>

          </div>

        </div>





        {/* <!--
          - TESTIMONIALS, CTA & SERVICE
        --> */}

        <div>

          <div className="container">

            <div className="testimonials-box">

              {/* <!--
                - TESTIMONIALS
              --> */}

              <div className="testimonial">

                <h2 className="title">testimonial</h2>

                <div className="testimonial-card">

                  <img src={Testimonial} alt="alan doe" className="testimonial-banner" width="80" height="80"/>

                  <p className="testimonial-name">Alan Doe</p>

                  <p className="testimonial-title">CEO & Founder Invision</p>

                  <img src={Quote} alt="quotation" className="quotation-img" width="26"/>

                  <p className="testimonial-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                    dolor dolor sit amet.
                  </p>

                </div>

              </div>



              {/* <!--
                - CTA
              --> */}

              <div className="cta-container">

                <img src={CTABanner} alt="summer collection" className="cta-banner"/>

                <a href="#" className="cta-content">

                  <p className="discount">25% Discount</p>

                  <h2 className="cta-title">Summer collection</h2>

                  <p className="cta-text">Starting @ $10</p>

                  <button className="cta-btn">Shop now</button>

                </a>

              </div>



              {/* <!--
                - SERVICE
              --> */}

              <div className="service">

                <h2 className="title">Our Services</h2>

                <div className="service-container">

                  <a href="#" className="service-item">

                    <div className="service-icon">
                      <ion-icon name="boat-outline"></ion-icon>
                    </div>

                    <div className="service-content">

                      <h3 className="service-title">Worldwide Delivery</h3>
                      <p className="service-desc">For Order Over $100</p>

                    </div>

                  </a>

                  <a href="#" className="service-item">
                  
                    <div className="service-icon">
                      <ion-icon name="rocket-outline"></ion-icon>
                    </div>
                  
                    <div className="service-content">
                  
                      <h3 className="service-title">Next Day delivery</h3>
                      <p className="service-desc">UK Orders Only</p>
                  
                    </div>
                  
                  </a>

                  <a href="#" className="service-item">
                  
                    <div className="service-icon">
                      <ion-icon name="call-outline"></ion-icon>
                    </div>
                  
                    <div className="service-content">
                  
                      <h3 className="service-title">Best Online Support</h3>
                      <p className="service-desc">Hours: 8AM - 11PM</p>
                  
                    </div>
                  
                  </a>

                  <a href="#" className="service-item">
                  
                    <div className="service-icon">
                      <ion-icon name="arrow-undo-outline"></ion-icon>
                    </div>
                  
                    <div className="service-content">
                  
                      <h3 className="service-title">Return Policy</h3>
                      <p className="service-desc">Easy & Free Return</p>
                  
                    </div>
                  
                  </a>

                  <a href="#" className="service-item">
                  
                    <div className="service-icon">
                      <ion-icon name="ticket-outline"></ion-icon>
                    </div>
                  
                    <div className="service-content">
                  
                      <h3 className="service-title">30% money back</h3>
                      <p className="service-desc">For Order Over $100</p>
                  
                    </div>
                  
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>





        {/* <!--
          - BLOG
        --> */}

        <div className="blog">

          <div className="container">

            <div className="blog-container has-scrollbar">

              <BlogCard 
                image={Blog1} 
                category="Fashion"
                title="Clothes Retail KPIs 2021 Guide for Clothes Executives."
                name="Mr Admin"
                date="Apr 06, 2002"
              />
               <BlogCard 
                image={Blog1} 
                category="Fashion"
                title="Clothes Retail KPIs 2021 Guide for Clothes Executives."
                name="Mr Admin"
                date="Apr 06, 2002"
              />
               <BlogCard 
                image={Blog1} 
                category="Fashion"
                title="Clothes Retail KPIs 2021 Guide for Clothes Executives."
                name="Mr Admin"
                date="Apr 06, 2002"
              />
               <BlogCard 
                image={Blog1} 
                category="Fashion"
                title="Clothes Retail KPIs 2021 Guide for Clothes Executives."
                name="Mr Admin"
                date="Apr 06, 2002"
              />

              {/* <div className="blog-card">

                <a href="#">
                  <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner"/>
                </a>

                <div className="blog-content">

                  <a href="#" className="blog-category">Fashion</a>

                  <a href="#">
                    <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                  </a>

                  <p className="blog-meta">
                    By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                  </p>

                </div>

              </div> */}

              {/* <div className="blog-card">
              
                <a href="#">
                  <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    className="blog-banner" width="300"/>
                </a>
              
                <div className="blog-content">
              
                  <a href="#" className="blog-category">Clothes</a>
              
                  <h3>
                    <a href="#" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>
              
                  <p className="blog-meta">
                    By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                  </p>
              
                </div>
              
              </div>

              <div className="blog-card">
              
                <a href="#">
                  <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                    className="blog-banner" width="300"/>
                </a>
              
                <div className="blog-content">
              
                  <a href="#" className="blog-category">Shoes</a>
              
                  <h3>
                    <a href="#" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                  </h3>
              
                  <p className="blog-meta">
                    By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                  </p>
              
                </div>
              
              </div>

              <div className="blog-card">
              
                <a href="#">
                  <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    className="blog-banner" width="300"/>
                </a>
              
                <div className="blog-content">
              
                  <a href="#" className="blog-category">Electronics</a>
              
                  <h3>
                    <a href="#" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                  </h3>
              
                  <p className="blog-meta">
                    By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                  </p>
              
                </div>
              
              </div> */}

            </div>

          </div>

        </div>

      </main>





      {/* <!--
        - FOOTER
      --> */}

      <footer>

        <div className="footer-category">

          <div className="container">

            <h2 className="footer-category-title">Brand directory</h2>

            <div className="footer-category-box">

              <h3 className="category-box-title">Fashion :</h3>

              <a href="#" className="footer-category-link">T-shirt</a>
              <a href="#" className="footer-category-link">Shirts</a>
              <a href="#" className="footer-category-link">shorts & jeans</a>
              <a href="#" className="footer-category-link">jacket</a>
              <a href="#" className="footer-category-link">dress & frock</a>
              <a href="#" className="footer-category-link">innerwear</a>
              <a href="#" className="footer-category-link">hosiery</a>

            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">footwear :</h3>
            
              <a href="#" className="footer-category-link">sport</a>
              <a href="#" className="footer-category-link">formal</a>
              <a href="#" className="footer-category-link">Boots</a>
              <a href="#" className="footer-category-link">casual</a>
              <a href="#" className="footer-category-link">cowboy shoes</a>
              <a href="#" className="footer-category-link">safety shoes</a>
              <a href="#" className="footer-category-link">Party wear shoes</a>
              <a href="#" className="footer-category-link">Branded</a>
              <a href="#" className="footer-category-link">Firstcopy</a>
              <a href="#" className="footer-category-link">Long shoes</a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">jewellery :</h3>
            
              <a href="#" className="footer-category-link">Necklace</a>
              <a href="#" className="footer-category-link">Earrings</a>
              <a href="#" className="footer-category-link">Couple rings</a>
              <a href="#" className="footer-category-link">Pendants</a>
              <a href="#" className="footer-category-link">Crystal</a>
              <a href="#" className="footer-category-link">Bangles</a>
              <a href="#" className="footer-category-link">bracelets</a>
              <a href="#" className="footer-category-link">nosepin</a>
              <a href="#" className="footer-category-link">chain</a>
              <a href="#" className="footer-category-link">Earrings</a>
              <a href="#" className="footer-category-link">Couple rings</a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">cosmetics :</h3>
            
              <a href="#" className="footer-category-link">Shampoo</a>
              <a href="#" className="footer-category-link">Bodywash</a>
              <a href="#" className="footer-category-link">Facewash</a>
              <a href="#" className="footer-category-link">makeup kit</a>
              <a href="#" className="footer-category-link">liner</a>
              <a href="#" className="footer-category-link">lipstick</a>
              <a href="#" className="footer-category-link">prefume</a>
              <a href="#" className="footer-category-link">Body soap</a>
              <a href="#" className="footer-category-link">scrub</a>
              <a href="#" className="footer-category-link">hair gel</a>
              <a href="#" className="footer-category-link">hair colors</a>
              <a href="#" className="footer-category-link">hair dye</a>
              <a href="#" className="footer-category-link">sunscreen</a>
              <a href="#" className="footer-category-link">skin loson</a>
              <a href="#" className="footer-category-link">liner</a>
              <a href="#" className="footer-category-link">lipstick</a>
            </div>

          </div>

        </div>

        <div className="footer-nav">

          <div className="container">

            <ul className="footer-nav-list">

              <li className="footer-nav-item">
                <h2 className="nav-title">Popular Categories</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Fashion</a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Electronic</a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Cosmetic</a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Health</a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Watches</a>
              </li>

            </ul>

            <ul className="footer-nav-list">
            
              <li className="footer-nav-item">
                <h2 className="nav-title">Products</h2>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Prices drop</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">New products</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Best sales</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Contact us</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Sitemap</a>
              </li>
            
            </ul>

            <ul className="footer-nav-list">
            
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Delivery</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Legal Notice</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Terms and conditions</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">About us</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Secure payment</a>
              </li>
            
            </ul>

            <ul className="footer-nav-list">
            
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Prices drop</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">New products</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Best sales</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Contact us</a>
              </li>
            
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Sitemap</a>
              </li>
            
            </ul>

            <ul className="footer-nav-list">

              <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address className="content">
                  419 State 414 Rte
                  Beaver Dams, New York(NY), 14812, USA
                </address>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
              </li>

            </ul>

            <ul className="footer-nav-list">

              <li className="footer-nav-item">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                </ul>
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container">

            <img src={Payment} alt="payment method" className="payment-img"/>

            <p className="copyright">
              Copyright &copy; <a href="#">Anon</a> all rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </>
  );
}


