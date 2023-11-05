import React, { useState } from 'react';
import style from './Navbar.module.css';

const menuItems = [
  { label: 'Home', id: 1 },
  {
    label: 'Industries',
    id: 2,
    subItems: ['Sustainability', 'Mineral Processing', 'Mine-to-mill-to-mine optimization', 'Oil & Gas'],
  },
  { label: 'AI Software', id: 3 },
  { label: 'Blog', id: 4 },
  { label: 'Contact Us', id: 5 },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className={style.navbar}>
        <div className={style['navbar-logo']}>
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt="Company Logo"
            className={style['company-logo']}
          />
        </div>

        <ul className={style['menu-list']}>
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                <div className={style['sub-menu']}>
                  {item.label}
                  <ul>
                    {item.subItems.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>

        <div className={`${style['mobile-toggle']} ${isMobileMenuOpen ? style.open : ''}`} onClick={toggleMobileMenu}>
          ☰
        </div>

        {isMobileMenuOpen && (
          <div className={style['mobile-menu']}>
            <ul className={style['menu-list']}>
              {menuItems.map((item) => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
