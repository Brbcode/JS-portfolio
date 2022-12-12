import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  const { parentState, items, ...childprops } = props;
  const [, setActive] = parentState;

  return (
    <nav {...childprops}>
      <ul>
        {items.map(({ icon, label, url }) => (
          <li key={label}>
            <NavLink to={url} onClick={() => setActive(false)}>
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
  parentState: PropTypes.array.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
