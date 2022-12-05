// React utils
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// Sytle
import './main.scss';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faHouse, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
// Components
import BurgerButton from '../BurgerButton/BurgerButton';
import Nav from '../Nav/Nav';

library.add(faSpinner, faUser, faHouse);

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 5);
    });
    document.body.style.overflow = navActive ? 'hidden' : 'unset';
  }, [navActive]);

  const navItems = [{
    icon: <FontAwesomeIcon icon={faHouse} />,
    label: 'Home',
    url: '/',
  }, {
    icon: <FontAwesomeIcon icon={faUser} />,
    label: 'About',
    url: '/about',
  },
  ];

  return (
    <header className={classNames('flex', 'flex-row', 'align-items-center', 'justify-content-space-between', { sticky: scroll })}>
      <Link to="/" className="logo">Logo</Link>
      <Nav items={navItems} className={classNames({ active: navActive })} />
      <BurgerButton onActiveChange={(v) => setNavActive(v)} />
    </header>
  );
}
