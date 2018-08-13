import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Officers from './components/Officers';
import Footer from './components/Footer';

import './Index.css';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Officers />
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
