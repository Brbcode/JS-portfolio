import React from 'react';
import PropTypes from 'prop-types';

// require('../../public/img/sets/programmer-desk-300w.png');
const test = 'programmer-desk-300w';
// require(`../../public/img/sets/${test}.png`);
require.context('../../public/img/sets/', true, /programmer-desk-(300|768)w\.png$/);
// {require.context('../../public/img/sets', true, 'programmer-desk-300w.png')} error

export default function ResponsiveImage({ set, placeholder, placeholderError }) {
  return (
    <>
      <p>test</p>
      <img src={placeholderError} title={set.name} alt="todo" />
    </>
  );
}

ResponsiveImage.propTypes = {
  set: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    extension: PropTypes.string.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
  placeholderError: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  placeholder: 'public/images/img-placeholder.jpg',
  placeholderError: 'public/images/img-placeholder-404.jpg',
};
