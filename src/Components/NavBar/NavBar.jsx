import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (  
    <> 
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <Link to='#' className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
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
                      <Link to='#' className="button">Sign up</Link>
                      <Link to='#' className="button">Log in</Link>
                  </div>
              </div>
          </div>
      </nav>  
    </>
  )
}

export default NavBar