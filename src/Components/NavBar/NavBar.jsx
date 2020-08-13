import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {

  return (  
    <> 
      
        <nav className={`navbar ${styles.navBarContainer}`} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to='/' className="navbar-item" href="https://bulma.io">
               <p className={styles.navBarLogo} > Reign </p>
            </Link>

            <Link to='#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div  className="navbar-menu">
            <div className={`navbar-start`} >
              <Link to='#' className={`navbar-item`}>
                Our Services
              </Link>

              <Link to='#' className={`navbar-item`}>
                Best Sellers
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link to='#' className={`navbar-link`} >
                  More
                </Link>

                <div className="navbar-dropdown">
                  <Link to='#' className={`navbar-item`}>
                    About
                  </Link>
                  <Link to='#' className={`navbar-item`}>
                    Jobs
                  </Link>
                  <Link to='#' className={`navbar-item`}>
                    Contact
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link to='#' className={`navbar-item`}>
                    Report an issue
                  </Link>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to='/signup' className={`button ${styles.signupButton}`}>
                    <strong>Sign up</strong>
                  </Link>
                  <Link to='/login' className={`button ${styles.loginButton}`}>
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
     
    </>
  )
}

export default NavBar