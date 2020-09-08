import React, { useContext } from "react";

/* import { Link } from "react-router-dom";
 */
import ProductComponent from "../ProductComponent/ProductComponent";
import GooComponent from "../Goo/GooComponent";
import Layout from "../Layout";
import authContext from "../../Context/AuthContext/authContext";

import styles from "./HomeComponent.module.scss";

const HomeComponent = () => {
  const allState = useContext(authContext);
  console.log(allState);

  return (
    <>
      <Layout>
        <div className={`${styles.homeHeaderContainer}`}>
          <GooComponent />
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FAE7E7"
              fill-opacity="1"
              d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,176C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>

          <h1 className={`${styles.homeContainer}`}> The Reign Experience </h1>
        </div>
        <ProductComponent />
      </Layout>
    </>
  );
};

export default HomeComponent;
