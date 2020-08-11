import React from 'react'

import { Link } from 'react-router-dom';

import Layout from '../Layout'

import styles from './HomeComponent.module.scss';

import sugarScrub from './sugarScrub.png';
import nailsCard from './nailsCard.png';

const HomeComponent = () => {

  return (
    <>
      <Layout>

        
          <div className={`${styles.homeHeaderContainer}`}> 
            <h1 className={`${styles.homeContainer}`} >The Reign Experience </h1>
          </div>
           

              <div className={`${styles.cardsContainer}`} >

                  <div className={`card ${styles.cardContainer}`} >
                    <div className="card-image" >
                      <figure className="image is-4by3">
                        <img src={nailsCard} alt=""/>
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="media">                    
                        <div className="media-content">
                          <Link className={`title is-4 ${styles.cardGroup}`}> Services </Link>
                        </div>
                      </div>

                      <div className="content">
                        Nails, Lashes, and Skin. 
                      </div>
                    </div>
                  </div>





                  <div className={`card ${styles.cardContainer}`} >
                    <div className="card-image" >
                      <figure className="image is-4by3">
                        <img src={sugarScrub} alt=""/>
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="media">                    
                        <div className="media-content">
                          <Link className={`title is-4 ${styles.cardGroup}`}> Products </Link>
                        </div>
                      </div>

                      <div className="content">
                        Hair, Face, and Body.
                      </div>
                    </div>
                  </div>
              </div>

      </Layout>
    </>
  )
}

export default HomeComponent

