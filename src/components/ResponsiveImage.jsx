import React from 'react';
import PropTypes from 'prop-types';

export default function ResponsiveImage({
  loader, placeholder, placeholderError, alt,
}) {
  const group = loader.keys().map((i) => ({
    path: i,
    size: i.match(/([0-9]+w)(?!.*\1)/g)[0].slice(0, -1),
  })).sort((a, b) => a.size - b.size);

  return (
    <>
      <p>test</p>
      <img
        src={placeholder}
        srcSet={group.map(({ path, size }) => `${loader(path)} ${size}w`)}
        sizes={group.map(({ size }, i, arr) => `${(i !== (arr.length - 1))
          ? `(max-width: ${size}px) ` : ''}${size}px`)}
        alt={alt}
        onError={(e) => {
          e.target.onerror = null; // Prevent loop
          e.target.src = `${placeholderError}`;
        }}
      />
    </>
  );
}

ResponsiveImage.propTypes = {
  loader: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placeholderError: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

ResponsiveImage.defaultProps = {
  placeholder: require('../../public/img/img-placeholder.jpg'),
  placeholderError: require('../../public/img/img-placeholder-404.jpg'),
};
