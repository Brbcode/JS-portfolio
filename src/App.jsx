// React imports
import React from 'react';
import PropTypes from 'prop-types';
// Style imports
import './scss/main.scss';
// Components imports
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <div className="toremove" />
      </main>
      <Footer />
    </>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

App.defaultProps = {
  children: <NotFound />,
};
