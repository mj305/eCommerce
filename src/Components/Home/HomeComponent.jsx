import React from 'react'

import Layout from '../Layout'

import styles from './HomeComponent.module.scss';

const HomeComponent = () => {

  return (
    <>
      <Layout>
        
      <div className={`${styles.container}`} >
        <div className={styles.cardWrapper} >
           <div className="card-image">
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub 1</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 

        <div className={styles.cardWrapper} >
           <div class="card-image">
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub 2</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 

        <div className={styles.cardWrapper} >
           <div>
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub 3</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 

        <div className={styles.cardWrapper} >
           <div>
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub 4</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 

        <div className={styles.cardWrapper} >
           <div>
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub 5</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 

        <div className={styles.cardWrapper} >
           <div>
             <figure className="image is-4by3">
               <img src="https://homemadeforelle.com/wp-content/uploads/2018/09/homemade-scrub-apple-pie-spice.jpg" alt=""/>
             </figure>
           </div>
           <div className="card-content media-content">
              <p className="title is-4">Sugar Scrub</p>
              <p className="subtitle is-6">Exfoliator</p>
           </div>
           <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
        </div> 
      </div>


              

      </Layout>
    </>
  )
}

export default HomeComponent

