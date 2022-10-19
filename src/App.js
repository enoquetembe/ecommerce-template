import logo from './logo.svg';
import './assets/css/style-prefix.css'
import pita from './assets/images/newsletter.png'
import {Header}  from './components/header/Header'
import { Main } from './components/main/Main';

export function App() {

  //   // modal variables
  // const modal = document.querySelector('[data-modal]');
  // const modalCloseBtn = document.querySelector('[data-modal-close]');
  // const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

  // // modal function
  // const modalCloseFunc = function () { modal.classList.add('closed') }

  // // modal eventListener
  // modalCloseOverlay.addEventListener('click', modalCloseFunc);
  // modalCloseBtn.addEventListener('click', modalCloseFunc);





  // // notification toast variables
  // const notificationToast = document.querySelector('[data-toast]');
  // const toastCloseBtn = document.querySelector('[data-toast-close]');

  // // notification toast eventListener
  // toastCloseBtn.addEventListener('click', function () {
  //   notificationToast.classList.add('closed');
  // });





  // // mobile menu variables
  // const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
  // const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
  // const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
  // const overlay = document.querySelector('[data-overlay]');

  // for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  //   // mobile menu function
  //   const mobileMenuCloseFunc = function () {
  //     mobileMenu[i].classList.remove('active');
  //     overlay.classList.remove('active');
  //   }

  //   mobileMenuOpenBtn[i].addEventListener('click', function () {
  //     mobileMenu[i].classList.add('active');
  //     overlay.classList.add('active');
  //   });

  //   mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  //   overlay.addEventListener('click', mobileMenuCloseFunc);

  // }
  
  return (
   <>
     <div className="overlay" data-overlay></div>


     {/* MODAL */}


    <div className="modal" data-modal>

      <div className="modal-close-overlay" data-modal-overlay></div>

      <div className="modal-content">

        <button className="modal-close-btn" data-modal-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="newsletter-img">
          <img src={pita} alt="subscribe newsletter" width="400" height="400"/>
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

    </div>





  
     {/* NOTIFICATION TOAST */}
 

    <div class="notification-toast" data-toast>

      <button class="toast-close-btn" data-toast-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div class="toast-banner">
        <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70"/>
      </div>

      <div class="toast-detail">

        <p class="toast-message">
          Someone in new just bought
        </p>

        <p class="toast-title">
          Rose Gold Earrings
        </p>

        <p class="toast-meta">
          <time datetime="PT2M">2 Minutes</time> ago
        </p>

      </div>

    </div>

 

  <Header/>

  <Main/>


    



   </>
  );
}


