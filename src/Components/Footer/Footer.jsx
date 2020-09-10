import React from "react";

import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer}`}>
        <div className={`content has-text-centered footer`}>
          <div className={`${styles.footerIcons}`}>
            <Link to="https://www.linkedin.com/in/mariabeckles/" target="blank">
              <i className={`fab fa-linkedin ${styles.footerIcons}`}></i>
            </Link>
            <Link>
              <i className={`fab fa-github ${styles.footerIcons}`}></i>
            </Link>
            <Link>
              <i
                to="https://twitter.com/MalyMjo"
                className={`fab fa-twitter ${styles.footerIcons}`}
              ></i>
            </Link>
          </div>
          <p>
            <strong> Created by </strong>
            <Link
              className={`${styles.footerAuthor}`}
              to="https://mariabeckles.herokuapp.com/"
              target="blank"
            >
              {" "}
              Me{" "}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
