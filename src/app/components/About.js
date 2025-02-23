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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M4 16.4999C4 18.1567 5.34315 19.4999 7 19.4999C7 20.8806 8.11929 21.9999 9.5 21.9999C10.8807 21.9999 12 20.8806 12 19.4999C12 20.8806 13.1193 21.9998 14.5 21.9998C15.8807 21.9998 17 20.8805 17 19.4998C18.6569 19.4998 20 18.1566 20 16.4998C20 15.9311 19.8418 15.3994 19.567 14.9463C20.9527 14.6812 22 13.4628 22 11.9998C22 10.5367 20.9527 9.31831 19.567 9.05325C19.8418 8.60012 20 8.06842 20 7.49976C20 5.8429 18.6569 4.49976 17 4.49976C17 3.11904 15.8807 1.99976 14.5 1.99976C13.1193 1.99976 12 3.11914 12 4.49985C12 3.11914 10.8807 1.99985 9.5 1.99985C8.11929 1.99985 7 3.11914 7 4.49985C5.34315 4.49985 4 5.843 4 7.49985C4 8.06851 4.15822 8.60022 4.43304 9.05335C3.04727 9.3184 2 10.5368 2 11.9999C2 13.4629 3.04727 14.6813 4.43304 14.9464C4.15822 15.3995 4 15.9312 4 16.4999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 14.4999L9.34189 8.97422C9.43631 8.69095 9.7014 8.49988 10 8.49988C10.2986 8.49988 10.5637 8.69095 10.6581 8.97422L12.5 14.4999M15.5 8.49988V14.4999M8.5 12.4999H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">AI Driven</p>
                <p className="text-blk cardSubHeading">
                  Leverage AI insights to generate expert analysis.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                  <path d="M11.6686 5.21225C11.8066 4.92946 12.1934 4.92947 12.3314 5.21225L13.1449 6.87978C13.1989 6.99046 13.3003 7.06749 13.4178 7.08703L15.1862 7.38122C15.4859 7.43108 15.6054 7.81473 15.391 8.0392L14.125 9.36513C14.0412 9.45297 14.0025 9.57736 14.021 9.69991L14.3 11.5504C14.3473 11.8638 14.0345 12.101 13.7638 11.957L12.1688 11.1083C12.0628 11.0518 11.9372 11.0518 11.8312 11.1083L10.2362 11.957C9.96554 12.101 9.65271 11.8638 9.69996 11.5504L9.979 9.69991C9.99748 9.57736 9.95882 9.45297 9.87495 9.36513L8.60896 8.0392C8.39464 7.81473 8.51408 7.43108 8.8138 7.38122L10.5822 7.08703C10.6997 7.06749 10.8011 6.99046 10.8551 6.87978L11.6686 5.21225Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 16.3424L14.6264 20.6513C14.9541 21.5195 15.118 21.9536 15.403 22C15.6887 21.9578 16.0387 21.4804 16.3808 20.6172C16.6258 19.9991 16.7482 19.6901 17.0005 19.5235C17.0779 19.4724 17.1625 19.432 17.252 19.4035C17.5436 19.3108 17.879 19.4015 18.5497 19.5828C19.2669 19.7767 19.7651 19.7226 19.9618 19.5828C20.0197 19.5417 19.9618 19.5797 19.9618 19.5797C20.0776 19.3743 19.9213 19.0539 19.6088 18.4131L17.4561 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 16.3421L9.3736 20.6503C9.0459 21.5183 8.72171 21.9536 8.43671 22C8.15097 21.9578 7.97992 21.5263 7.63781 20.6632C7.39287 20.0453 7.25175 19.6893 6.99948 19.5226C6.92213 19.4715 6.83745 19.4312 6.74803 19.4027C6.45638 19.31 6.12101 19.4007 5.45027 19.582C4.73308 19.7758 4.2349 19.7186 4.03815 19.5788C3.92237 19.3735 4.07866 19.0531 4.39123 18.4124L6.54387 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Top Rated</p>
                <p className="text-blk cardSubHeading">
                  One of the leading tools in the property industry.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                  <path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17 5.71429C17 5.71429 18 6.23573 18.5 7C18.5 7 20 4 22 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">100+ Users</p>
                <p className="text-blk cardSubHeading">
                  Guarenteed satisfaction for every user!
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 9C7.20949 9.5826 7.77476 10 8.43922 10C9.10367 10 9.66894 9.5826 9.87843 9M14.1216 9C14.3311 9.5826 14.8963 10 15.5608 10C16.2252 10 16.7905 9.5826 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 17.5C10 17.5 8 16 7.5 14" stroke="currentColor" strokeWidth="1.38889" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Curated For You</p>
                <p className="text-blk cardSubHeading">
                  Our goal is to ensure that you have all information to make an informed decision.
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
