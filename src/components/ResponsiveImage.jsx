import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../assets/img/img-placeholder.jpg';

export default function ResponsiveImage({
  placeholderSrc, set, alt,
}) {
  const file = set.name;

  return (
    <img
      src={placeholderSrc}
      srcSet={file}
      sizes={set.sizes.map((size, i, arr) => ((arr.lenght - 1) !== i ? `(max-width: ${size}px) ${size}px` : `${size}px`))}
      alt={alt}
    />
  );
}

ResponsiveImage.propTypes = {
  placeholderSrc: PropTypes.string,
  set: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  alt: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  placeholderSrc: placeholder,
  alt: '',
};
