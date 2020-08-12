import React from 'react'

import { Link } from 'react-router-dom';

import GooComponent from '../Goo/GooComponent';
import Layout from '../Layout'

import styles from './HomeComponent.module.scss';

import sugarScrub from './sugarScrub.png';
import nailsCard from './nailsCard.png';

const HomeComponent = () => {

  return (
    <>
      <Layout>

         <div className={`${styles.homeHeaderContainer}`}> 
            <GooComponent/>                
          </div>   


            <div>
            
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 1440 320">
                 <path 
                 fill="#FAE7E7" 
                 fill-opacity="1" 
                 d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,176C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                
                <h1 className={`${styles.homeContainer}`} >The Reign Experience </h1>
            
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
            </div>


      </Layout>
    </>
  )
}

export default HomeComponent

/* 


 */