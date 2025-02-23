"use client";

import React from "react";
import styled from "styled-components";

const CardTest = ({ title, description, speed, color }) => {
  return (
    <StyledWrapper animationspeed={speed} blobColor={color}>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 500px; /* 200px * 2.5 */
    height: 625px; /* 250px * 2.5 */
    border-radius: 35px; /* 14px * 2.5 */
    z-index: 10;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 50px 50px 150px #bebebe, -50px -50px 150px #ffffff;
  }

  .bg {
    position: absolute;
    top: 12.5px;
    left: 12.5px;
    width: 475px;
    height: 600px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 25px;
    overflow: hidden;
    outline: 5px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 375px;
    height: 375px;
    border-radius: 50%;
    background-color: ${({ blobColor }) => blobColor || "#0056b3"};
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce ${({ animationspeed }) =>
      animationspeed || "9s"} infinite ease;
  }

  .content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 0 1rem;
  }

  .title {
    font-size: 1.5rem;
    color: #333;
    margin: 0;
  }

  .description {
    font-size: 1rem;
    color: #666;
    margin-top: 0.5rem;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default CardTest;
