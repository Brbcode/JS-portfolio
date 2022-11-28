import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorElement({ errorCode }) {
  return (
    <>
      <span>
        Error:
        {' '}
        {errorCode}
      </span>
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
