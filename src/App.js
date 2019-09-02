import React, { useRef } from 'react';
import classes from './App.module.css';
import logo from './images/logo.png';
import image1 from './images/w9.jpg';
import image2 from './images/w8.jpg';
import image3 from './images/w7.jpg';
import image4 from './images/w3.jpg';
import image5 from './images/w4.jpg';
import image7 from './images/w6.jpg';
import image8 from './images/w10.jpg';
import image9 from './images/w1.jpg';
import image10 from './images/w2.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';


function scrollToRef(ref) {
  window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
}

function App() {
  const homeRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className={classes.App} ref={homeRef}>
      <header className={classes.Header}>
        <nav>
          <ul className={classes.NavItems}>
            <li className={classes.NavItem} onClick={() => scrollToRef(homeRef)}><a href="#">Home</a></li>
            <li className={classes.NavItem} onClick={() => scrollToRef(portfolioRef)}><a href="#">Porfolio</a></li>
            <li className={classes.NavItem} onClick={() => scrollToRef(contactRef)}><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className={classes.LogoContainer}>
          <img src={logo} alt="Logo"></img>
        </div>
      </header>
      <section className={classes.Self}>
        <div className={classes.AboutMe}>
          <h3>Hello !</h3>
          <p>i'm sunil manepalli</p>
          <p>and i'm a photographer.</p>
        </div>
      </section>
      <main className={classes.Portfolio} ref={portfolioRef}>
        <h2>Portfolio</h2>
        <div className={classes.Images}>
          <img src={image1} alt="image1" className={classes.img1}></img>
          <img src={image2} alt="image2" className={classes.img2}></img>
          <img src={image3} alt="image3" className={classes.img3}></img>
          <img src={image4} alt="image4" className={classes.img4}></img>
          <img src={image5} alt="image5" className={classes.img5}></img>
          <img src={image7} alt="image7" className={classes.img7}></img>
          <img src={image8} alt="image8" className={classes.img8}></img>
          <img src={image9} alt="image9" className={classes.img9}></img>
          <img src={image10} alt="image10" className={classes.img10}></img>
          <img src={image11} alt="image11" className={classes.img11}></img>
          <img src={image12} alt="image12" className={classes.img12}></img>
          <img src={image13} alt="image13" className={classes.img13}></img>
        </div>
      </main>
      <section ref={contactRef}>
        <h2>Contact</h2>
        <div className={classes.BackgroundLogo}>

        </div>
        <div className={classes.ContactDetails}>
          <div>
            <p>Get your memories freezed perfectly with time. For bookings/more details, contact us on</p>
            <strong>+91-7386243892</strong>
            <strong>+91-6302396585</strong>
            <strong>90mmclickz@gmail.com</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
