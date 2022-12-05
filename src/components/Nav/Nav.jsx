import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  const { items, ...childprops } = props;

  return (
    <nav {...childprops}>
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

Nav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
