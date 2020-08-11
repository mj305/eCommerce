import React from 'react';

import styles from './Footer.module.scss';


const Footer = () => {
  
  return (

    <>
      <footer className={`footer ${styles.footerContainer}`}>
        <div className="content has-text-centered">
          <p>
            <strong> Created by </strong>
            <a className={`${styles.footerAuthor}`} href="https://mariabeckles.herokuapp.com/" target='blank'> Maria Beckles </a>
          </p>
        </div>
      </footer>
    </>    
  )
}

export default Footer;