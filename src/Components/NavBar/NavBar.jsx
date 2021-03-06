import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../Context/AuthContext/authContext";
import cartContext from "../../Context/CartContext/cartContext";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { isAuthenticated, logOut } = useContext(authContext);

  const { cartCount, countCartItems } = useContext(cartContext);
  console.log(cartCount);
  console.log(countCartItems());

  return (
    <>
      <nav
        className={`navbar ${styles.navBarContainer}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" href="https://bulma.io">
            <p className={styles.navBarLogo}> Reign </p>
          </Link>

          <Link
            to="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className={`navbar-start`}>
            <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
              Our Services
            </Link>

            <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
              Best Sellers
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="#" className={`navbar-link ${styles.navbarItem}`}>
                More
              </Link>

              <div className="navbar-dropdown">
                <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
                  About
                </Link>
                <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
                  Jobs
                </Link>
                <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to="#" className={`navbar-item ${styles.navbarItem}`}>
                  Report an issue
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isAuthenticated ? (
                  <>
                    <div>
                      <Link
                        to="/"
                        onClick={logOut}
                        className={`button ${styles.signupButton}`}
                      >
                        <strong>Logout</strong>
                      </Link>
                    </div>

                    <div>
                      <Link to="/cart" className={` ${styles.cartIcon}`}>
                        <i className="fas fa-shopping-cart"></i>
                        {countCartItems()}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className={`button ${styles.signupButton}`}
                    >
                      <strong>Sign up</strong>
                    </Link>

                    <Link
                      to="/login"
                      className={`button ${styles.loginButton}`}
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

/*                     <Link to="/cart" className={` ${styles.cartIcon}`}>
                      <i class="fas fa-shopping-cart"></i>
                      {countCartItems()}
                    </Link> */

/*                     <button
                      to="/"
                      onClick={logOut}
                      className={`button ${styles.signupButton}`}
                    >
                      <strong>Logout</strong>
                    </button>

                    <Link to="/cart" className={` ${styles.cartIcon}`}>
                      <i class="fas fa-shopping-cart"></i>
                      {countCartItems()}
                    </Li */
