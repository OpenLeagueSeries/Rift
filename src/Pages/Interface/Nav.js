import React, { Component, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router';
import lolPittLogo from '../../assets/newestPittLogo.png';
import RegisterForm from '../../Pages/components/RegisterForm';

import './Nav.css';

class Nav extends Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.animatedNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animatedNav);
  }

  animatedNav = () => {
    const docElem = document.documentElement;
    const header = document.querySelector('#navbar');
    const logo = document.querySelector('.logo');
    let didScroll = false;
    const changeNavOn = 200;

    function init() {
      window.addEventListener(
        'scroll',
        event => {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 150);
          }
        },
        false
      );
    }

    function scrollPage() {
      const sy = scrollY();
      if (sy >= changeNavOn) {
        header.classList.add('nav-shrink');
        logo.classList.add('logo-shrink');
      } else {
        header.classList.remove('nav-shrink');
        logo.classList.remove('logo-shrink');
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();
  };

  render() {
    return (
      <Fragment>
        <div id="navbar" class="sticky">
          <div className="link-wrap">
            <a href="#about">About OLS</a>
            <a href="/">
              <img src={lolPittLogo} alt="" className="logo" />
            </a>
            <a onClick={this.toggleDrawer('top', true)} href="#register">
              Register
            </a>
          </div>
        </div>
        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
          className="drawer"
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            <button className="closeButton">Close</button>
          </div>
          <RegisterForm />
        </Drawer>
      </Fragment>
    );
  }
}

const NavBar = withRouter(Nav);

export default NavBar;
