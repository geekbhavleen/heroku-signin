import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const App = ({
  children
}) => (
    <Fragment>
      <NavBar />
      <section>
        {children}
      </section>
      <Footer />
    </Fragment>
  );

export default App;
