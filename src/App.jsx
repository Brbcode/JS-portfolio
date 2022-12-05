// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Style imports
import './scss/main.scss';
// Components imports
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import background from '../public/img/background.gif';

export default function App({ children }) {
  useEffect(() => {
    const root = document.getElementById('root');
    root.style.background = `repeat url('${background}')`;
  });

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

App.defaultProps = {
  children: <Error />,
};
