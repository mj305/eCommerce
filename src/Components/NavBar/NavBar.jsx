import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {

  return (  
    <> 
      
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                  <p className={styles.navBarLogo}> Reign </p>
                </Link>

                <Link to='#' role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </Link>
            </div>

            <div className="navbar-end navbar-menu" id="navbarBasicExample"> 
                <div className="navbar-item">
                    <div className="buttons">
                        <Link to='/signup' className={styles.signupButton} /* className="button" */>Sign up</Link>
                        <Link to='/login' className={styles.loginButton} /* className="button" */>Log in</Link>
                    </div>
                </div>
            </div>
        </nav>  
     
    </>
  )
}

export default NavBar