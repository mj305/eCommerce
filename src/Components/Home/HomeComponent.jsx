import React from 'react'

import Layout from '../Layout'

import styles from './HomeComponent.module.scss';

import sugarScrub from './sugarScrub.png';

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
                        <img src={sugarScrub} alt=""/>
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="media">                    
                        <div className="media-content">
                          <p className="title is-4"> Sugar Scrub 1 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
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
                          <p className="title is-4"> Sugar Scrub 2 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
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
                          <p className="title is-4"> Sugar Scrub 3 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
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
                          <p className="title is-4"> Sugar Scrub 3 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
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
                          <p className="title is-4"> Sugar Scrub 3 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
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
                          <p className="title is-4"> Sugar Scrub 3 </p>
                          <p className="subtitle is-6"> Body Care </p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                      </div>
                    </div>
                  </div>


              </div>

      </Layout>
    </>
  )
}

export default HomeComponent

