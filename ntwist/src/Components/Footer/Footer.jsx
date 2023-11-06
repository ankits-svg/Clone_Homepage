import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.logoContainer}>
        <img
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="Company Logo"
          className={style.companyLogo}
        />
      </div>

      <ul className={style.menu}>
        <li className={style['first-line']}>Home</li>
        <li className={style['second-line']}>About Us</li>
        <li className={style['second-line']}>Contact Us</li>
        <li className={style['second-line']}>Privacy Policy</li>
        <li className={style['second-line']}>Sitemap</li>
      </ul>

      <div className={style.address}>
        9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </div>

      <div className={style.socialIcons}>
        <i className={`fab fa-twitter ${style.socialIcons}`} />
        <i className={`fab fa-linkedin ${style.socialIcons}`} />
      </div>

      <p className={style.copyright}>© {year}. Ntwist Inc.</p>
    </footer>
  );
};

export default Footer;
