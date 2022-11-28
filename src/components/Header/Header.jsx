import React, { useState, useEffect } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faHouse, faSpinner, faBars,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './button.css';

library.add(faSpinner, faUser, faHouse, faBars);

export default function Header() {
  const [menuTrigger, setTrigger] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
    document.body.style.overflow = menuTrigger ? 'hidden' : 'unset';
  }, [menuTrigger]);

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
      <AppNav items={navItems} active={menuTrigger} />
      <button
        type="button"
        className={classNames('flex', 'flex-column', 'menu-trigger', { active: menuTrigger })} // {`flex flex-column menu-trigger ${menuTrigger && 'active'}`}
        onClick={() => setTrigger((v) => !v)}
      >
        <i className="bar-top" />
        <i className="bar-middle" />
        <i className="bar-bottom" />
      </button>
    </header>
  );
}

function AppNav({ items, active }) {
  return (
    <nav className={classNames({ active })}>
      <ul>
        {items.map(({ icon, label, url }) => (
          <li key={label}>
            <NavLink to={url}>
              {icon}
              {' '}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

AppNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  active: PropTypes.bool,
};

AppNav.defaultProps = {
  active: false,
};
