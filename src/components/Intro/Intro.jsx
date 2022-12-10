import React, { useRef, useState, useEffect } from 'react';
import './home.scss';
import Image from '../ResponsiveImage';
import TextScramble from '../TextScramble';

const desk = require.context('../../../public/images/sets/', true, /desk-(300|768|1280)w\.png$/);
const plant = require.context('../../../public/images/sets/', true, /plant-(300|768|1280)w\.png$/);
const floatWeb = require.context('../../../public/images/sets/', true, /float-web-(300|768|1280)w\.png$/);
const floatCode = require.context('../../../public/images/sets/', true, /float-code-(300|768|1280)w\.png$/);

export default function Intro() {
  const root = useRef(null);
  const text = useRef(null);
  const illustration = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const textSet = [
    'Developer Front End',
    'Developer Back End',
    'Developer Full Stack',
    'Open Source Contributor',
  ];

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
    <section id="intro" ref={root}>
      <section className="text" ref={text}>
        <h1>
          <em>Hi</em>
          &nbsp;
          There
        </h1>
        <h2>
          I
          <em>&apos;</em>
          m
          {' '}
          <em>Bruno García</em>
        </h2>
        <br />
        <TextScramble set={textSet} duration={0.8} waitTime={2} className="text-scramble" />
      </section>
      <section className="illustration" ref={illustration} style={{ width, height }}>
        <Image loader={floatWeb} className="img float-web" alt="Float website image." />
        <Image loader={floatCode} className="img float-code" alt="Float code image." />
        <Image loader={desk} className="img desk" alt="Messy desk image." />
        <Image loader={plant} className="img plant" alt="Plant image." />
      </section>
    </section>
  );
}
