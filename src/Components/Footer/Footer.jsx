import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer}`}>
        <div className={`content has-text-centered footer`}>
          <div className={`${styles.footerIcons}`}>
            <a href="https://www.linkedin.com/in/mariabeckles/" target="blank">
              <i className={`fab fa-linkedin ${styles.footerIcons}`}></i>
            </a>
            <a href="https://github.com/mj305" target="blank">
              <i className={`fab fa-github ${styles.footerIcons}`}></i>
            </a>
            <a href="https://twitter.com/MalyMjo" target="blank">
              <i className={`fab fa-twitter ${styles.footerIcons}`}></i>
            </a>
          </div>
          <p>
            <strong> Created by </strong>
            <a
              className={`${styles.footerAuthor}`}
              href="https://mariabeckles.herokuapp.com/"
              target="blank"
            >
              {" "}
              Me{" "}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
