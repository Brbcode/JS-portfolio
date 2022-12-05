import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse, faReply,
} from '@fortawesome/free-solid-svg-icons';
import './error.scss';
import Image from '../ResponsiveImage';

library.add(faHouse, faReply);

const messyDesk = require.context('../../../public/img/sets/', true, /messy-desk-(300|768|1280)w\.png$/);

export default function Error({ errorCode }) {
  const navigate = useNavigate();

  return (
    <section id="intro" className="error">
      <section className="text">
        <h1>
          <em>4</em>
          0
          <em>4</em>
        </h1>
        <h2>Hmmm...</h2>
        <p>
          Looks like this page is lost.
        </p>
        <nav className="flex-row">
          <button type="button" className="btn btn-colapse-icon" onClick={() => navigate(-1)}>
            <span>Back</span>
            <FontAwesomeIcon icon={faReply} />
          </button>
          <Link to="/" className="btn btn-colapse-icon">
            <span>Go Home</span>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </nav>
      </section>
      <Image loader={messyDesk} className="img messy-desk" alt="Messy desk" />
    </section>
  );
}

Error.propTypes = {
  errorCode: PropTypes.number,
};

Error.defaultProps = {
  errorCode: 404,
};
