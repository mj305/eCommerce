import React from "react";

import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer}`}>
        <div className={`content has-text-centered footer`}>
          <div className={`${styles.footerIcons}`}>
            <Link>
              <i className={`fab fa-linkedin ${styles.footerIcons}`}></i>
            </Link>
            <Link>
              <i className={`fab fa-github ${styles.footerIcons}`}></i>
            </Link>
            <Link>
              <i className={`fas fa-portrait ${styles.footerIcons}`}></i>
            </Link>
          </div>
          <p>
            <strong> Created by </strong>
            <Link
              className={`${styles.footerAuthor}`}
              href="https://mariabeckles.herokuapp.com/"
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
