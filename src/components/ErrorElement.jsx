import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';

export default function ErrorElement({ errorCode }) {
  return (
    <>
      <span>
        Error:
        {' '}
        {errorCode}
      </span>
      <ResponsiveImage set={{ name: 'messy-desk', sizes: [300, 768] }} />
      <div className="toremove" />
    </>
  );
}

ErrorElement.propTypes = {
  errorCode: PropTypes.number,
};

ErrorElement.defaultProps = {
  errorCode: 404,
};
