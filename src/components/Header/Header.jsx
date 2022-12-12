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
  faUser, faHouse, faSpinner, faPenNib,
} from '@fortawesome/free-solid-svg-icons';
// Components
import BurgerButton from '../BurgerButton/BurgerButton';
import Nav from '../Nav';
import Logo from '../Logo/Logo';

library.add(faSpinner, faUser, faHouse, faPenNib);

export default function Header() {
  const navState = useState(false);
  const [navActive, setNavActive] = navState;
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
    icon: <FontAwesomeIcon icon={faPenNib} />,
    label: 'Projects',
    url: '/projects',
  }, {
    icon: <FontAwesomeIcon icon={faUser} />,
    label: 'About',
    url: '/about',
  },
  ];

  return (
    <header className={classNames('flex', 'flex-row', 'align-items-center', 'justify-content-space-between', { sticky: scroll })}>
      <Link to="/" className="logo-link"><Logo /></Link>
      <Nav items={navItems} className={classNames({ active: navActive })} parentState={navState} />
      <BurgerButton
        onActiveChange={(v) => setNavActive(v)}
        parentState={navState}
      />
    </header>
  );
}

Header.prototype.bindState = (state) => {
  Object.assign(this.state, state);
};
