"use client";

import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap');

  * {
    font-family: Nunito, sans-serif;
  }

  .text-blk {
    margin: 0;
    line-height: 25px;
    padding: 0;
  }

  .responsive-cell-block {
    min-height: 75px;
  }

  .responsive-container-block {
    min-height: 75px;
    height: fit-content;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;
  }

  .responsive-container-block.bigContainer {
    padding: 0 50px;
    margin: 50px 0;
  }

  .responsive-container-block.Container {
    max-width: 1320px;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0 auto;
  }

  .mainImg {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }

  .blueDots {
    position: absolute;
    top: 150px;
    right: 15%;
    z-index: -1;
    left: auto;
    width: 80%;
    height: 500px;
    object-fit: cover;
  }

  .imgContainer {
    position: relative;
    width: 48%;
  }

  .responsive-container-block.textSide {
    width: 48%;
    padding: 0;
    z-index: 100;
  }

  .text-blk.heading {
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  .text-blk.subHeading {
    font-size: 18px;
    line-height: 26px;
    margin: 0 0 20px 0;
  }

  .cardImg {
    width: 31px;
    height: 31px;
  }

  .cardImgContainer {
    padding: 20px;
    border: 1px solid rgb(229, 229, 229);
    border-radius: 10px;
    margin: 0 10px 0 0;
  }

  .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px 10px 0;
  }

  .text-blk.cardHeading {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  .text-blk.cardSubHeading {
    color: rgb(153, 153, 153);
    line-height: 22px;
  }

  .explore {
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    color: white;
    background-color: rgb(0, 86, 179);
    box-shadow: rgba(0, 86, 179, 0.25) 0px 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 0;
    padding: 17px 40px;
  }

  .explore:hover {
    background-color: rgb(120, 8, 208);
  }

  #ixvck {
    margin: 60px 0 0 0;
  }

  .redDots {
    position: absolute;
    bottom: -350px;
    right: -100px;
    height: 500px;
    width: 400px;
    object-fit: cover;
    top: auto;
  }

  /* Responsive CSS */
  @media (max-width: 1024px) {
    .responsive-container-block.Container {
      position: relative;
      align-items: flex-start;
      justify-content: center;
    }

    .mainImg {
      bottom: 0;
    }

    .imgContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      height: auto;
      width: 60%;
    }

    .responsive-container-block.textSide {
      margin: 0 auto;
      width: 70%;
    }

    .responsive-container-block.Container {
      flex-direction: column-reverse;
    }

    .imgContainer {
      position: relative;
      width: auto;
      margin: 0 auto;
    }

    .responsive-container-block.textSide {
      margin: 0;
      width: 100%;
    }

    .responsive-container-block.Container {
      flex-direction: row-reverse;
    }

    .responsive-container-block.Container {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 768px) {
    .responsive-container-block.textSide {
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .text-blk.subHeading {
      text-align: center;
      font-size: 17px;
      max-width: 520px;
    }

    .text-blk.heading {
      text-align: center;
    }

    .imgContainer {
      opacity: 0.8;
      height: 500px;
    }

    .imgContainer {
      width: 30px;
    }

    .responsive-container-block.Container {
      flex-direction: column-reverse;
      flex-wrap: nowrap;
    }

    .responsive-container-block.textSide {
      width: 100%;
      margin: 0 0 20px 0;
    }

    .imgContainer {
      width: 90%;
    }

    .imgContainer {
      height: 450px;
      margin: 5px 33.9062px 0 33.9062px;
    }

    .redDots {
      display: none;
    }

    .explore {
      font-size: 16px;
      line-height: 14px;
    }
  }

  @media (max-width: 500px) {
    .imgContainer {
      position: static;
      height: 450px;
    }

    .mainImg {
      height: 100%;
    }

    .blueDots {
      width: 100%;
      left: 0;
      top: 0;
      bottom: auto;
      right: auto;
    }

    .imgContainer {
      width: 100%;
    }

    .responsive-container-block.textSide {
      margin: 0;
    }

    .responsive-container-block.Container {
      padding: 0;
      overflow-x: visible;
      overflow-y: visible;
    }

    .responsive-container-block.bigContainer {
      padding: 10px 30px;
    }

    .redDots {
      display: none;
    }

    .text-blk.subHeading {
      font-size: 16px;
      line-height: 23px;
    }

    .text-blk.heading {
      font-size: 28px;
      line-height: 28px;
    }

    .responsive-container-block.textSide {
      margin: 40px 0 50px 0;
    }

    .imgContainer {
      margin: 5px auto 0 auto;
      width: 100%;
      position: relative;
    }

    .explore {
      padding: 17px 0;
      width: 100%;
    }

    #ixvck {
      width: 90%;
      margin: 40px 0 0 0;
      font-size: 15px;
    }

    .blueDots {
      bottom: 0;
      width: 100%;
      height: 80%;
      top: 10%;
    }

    .text-blk.cardHeading {
      font-size: 16px;
      margin: 0 0 8px 0;
      line-height: 25px;
    }

    .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
      padding: 10px 0;
    }
  }

  /* Responsive utility classes */
  .wk-desk-1 { width: 8.333333%; }
  .wk-desk-2 { width: 16.666667%; }
  .wk-desk-3 { width: 25%; }
  .wk-desk-4 { width: 33.333333%; }
  .wk-desk-5 { width: 41.666667%; }
  .wk-desk-6 { width: 50%; }
  .wk-desk-7 { width: 58.333333%; }
  .wk-desk-8 { width: 66.666667%; }
  .wk-desk-9 { width: 75%; }
  .wk-desk-10 { width: 83.333333%; }
  .wk-desk-11 { width: 91.666667%; }
  .wk-desk-12 { width: 100%; }

  @media (max-width: 1024px) {
    .wk-ipadp-1 { width: 8.333333%; }
    .wk-ipadp-2 { width: 16.666667%; }
    .wk-ipadp-3 { width: 25%; }
    .wk-ipadp-4 { width: 33.333333%; }
    .wk-ipadp-5 { width: 41.666667%; }
    .wk-ipadp-6 { width: 50%; }
    .wk-ipadp-7 { width: 58.333333%; }
    .wk-ipadp-8 { width: 66.666667%; }
    .wk-ipadp-9 { width: 75%; }
    .wk-ipadp-10 { width: 83.333333%; }
    .wk-ipadp-11 { width: 91.666667%; }
    .wk-ipadp-12 { width: 100%; }
  }

  @media (max-width: 768px) {
    .wk-tab-1 { width: 8.333333%; }
    .wk-tab-2 { width: 16.666667%; }
    .wk-tab-3 { width: 25%; }
    .wk-tab-4 { width: 33.333333%; }
    .wk-tab-5 { width: 41.666667%; }
    .wk-tab-6 { width: 50%; }
    .wk-tab-7 { width: 58.333333%; }
    .wk-tab-8 { width: 66.666667%; }
    .wk-tab-9 { width: 75%; }
    .wk-tab-10 { width: 83.333333%; }
    .wk-tab-11 { width: 91.666667%; }
    .wk-tab-12 { width: 100%; }
  }

  @media (max-width: 500px) {
    .wk-mobile-1 { width: 8.333333%; }
    .wk-mobile-2 { width: 16.666667%; }
    .wk-mobile-3 { width: 25%; }
    .wk-mobile-4 { width: 33.333333%; }
    .wk-mobile-5 { width: 41.666667%; }
    .wk-mobile-6 { width: 50%; }
    .wk-mobile-7 { width: 58.333333%; }
    .wk-mobile-8 { width: 66.666667%; }
    .wk-mobile-9 { width: 75%; }
    .wk-mobile-10 { width: 83.333333%; }
    .wk-mobile-11 { width: 91.666667%; }
    .wk-mobile-12 { width: 100%; }
  }
`;

const About = () => {
  return (
    <>
      <GlobalStyle />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            <img
              className="blueDots"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
              alt="Blue Dots"
            />
            <img
              className="mainImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
              alt="Main Image"
            />
          </div>
          <div className="responsive-container-block textSide">
            <p className="text-blk heading">About Us</p>
            <p className="text-blk subHeading">
                At <span className="">idontknowwheretorent.biz</span>, we provide detailed analyses of potential business and residential locations to help you make informed decisions. Our platform offers insights into factors such as customer proximity, accessibility, safety, and amenities, ensuring you find the ideal space for your needs.
            </p>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                  alt="Card"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Value</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                  alt="Card"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Value</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                  alt="Card"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Value</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                  alt="Card"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Value</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <a href="#">
              <button className="explore">Find My Place</button>
            </a>
          </div>
          <img
            className="redDots"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
            alt="Red Dots"
          />
        </div>
      </div>
    </>
  );
};

export default About;
