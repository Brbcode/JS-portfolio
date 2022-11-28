import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import './assets/style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';

export default function App({ children }) {
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
  children: PropTypes.element,
};

App.defaultProps = {
  children: <span>Hello world</span>,
};
