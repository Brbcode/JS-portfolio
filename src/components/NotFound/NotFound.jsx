import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse, faReply,
} from '@fortawesome/free-solid-svg-icons';
import './not_found.scss';
import Image from '../ResponsiveImage';

library.add(faHouse, faReply);

const messyDesk = require.context('../../../public/images/sets/', true, /messy-desk-(300|768|1280)w\.png$/);
const plant = require.context('../../../public/images/sets/', true, /plant-(300|768|1280)w\.png$/);
const floatWeb = require.context('../../../public/images/sets/', true, /float-web-(300|768|1280)w\.png$/);
const floatCode = require.context('../../../public/images/sets/', true, /float-code-(300|768|1280)w\.png$/);
const paperFall = require.context('../../../public/images/sets/', true, /paper-fall-(300|768|1280)w\.gif$/);

export default function NotFound() {
  const navigate = useNavigate();
  const root = useRef(null);
  const text = useRef(null);
  const illustration = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const paddingTop = parseInt(getComputedStyle(root.current)['padding-top'], 10);

    function handleResize() {
      const rw = root.current.offsetWidth;
      const rh = root.current.offsetHeight - paddingTop;

      if (rw < rh) { // portrait
        const space = rh - text.current.offsetHeight;
        setWidth(rw < space ? rw : 'auto');
        setHeight(rw < space ? 'auto' : space);
      } else { // landscape
        const space = rw - text.current.offsetWidth;
        setWidth(rh < space ? 'auto' : space);
        setHeight(rh < space ? rh : 'auto');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="intro" className="error" ref={root}>
      <section className="text" ref={text}>
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
      <section className="illustration" ref={illustration} style={{ width, height }}>
        <Image loader={floatWeb} className="img float-web" alt="Float website image." />
        <Image loader={floatCode} className="img float-code" alt="Float code image." />
        <Image loader={messyDesk} className="img messy-desk" alt="Messy desk image." />
        <Image loader={plant} className="img plant" alt="Plant image." />
        <Image loader={paperFall} className="img paper-fall" alt="Paper falling animation image." />
      </section>
    </section>
  );
}
