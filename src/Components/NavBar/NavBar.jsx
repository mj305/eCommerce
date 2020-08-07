import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (  
    <> 
      <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
              <Link class="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
              </Link>

              <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </Link>
          </div>

          <div class="navbar-end navbar-menu" id="navbarBasicExample"> 
              <div class="navbar-item">
                  <div class="buttons">
                      <Link class="button">Sign up</Link>
                      <Link class="button">Log in</Link>
                  </div>
              </div>
          </div>
      </nav>  
    </>
  )
}

export default NavBar