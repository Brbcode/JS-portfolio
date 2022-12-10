// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

// Style imports
import './scss/main.scss';
// Components imports
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App({ children }) {
  return (
    <>
      <Header />
      <main>
        { children }
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

App.defaultProps = {
  children: null,
};
