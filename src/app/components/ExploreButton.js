import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
        Explore
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: #3388cc;
    border-radius: 30px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 5px 5px 10px rgba(51, 136, 204, 0.8);
    padding-left: 8px;
    transition-duration: .5s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  .bell path {
    fill: rgb(255, 255, 255);
  }

  .button:hover {
    background-color: rgb(209, 194, 255);
    box-shadow: 5px 5px 10px rgba(209, 194, 255, 0.8);
    transition-duration: .5s;
  }

  .button:active {
    transform: scale(0.97);
    transition-duration: .2s;
  }

  .button:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }`;

export default Button;
