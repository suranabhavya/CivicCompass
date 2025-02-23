import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <span />
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
    width: 480px;
    height: 320px;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-20px);
  }

  .card::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #C8B6FF, rgb(149, 182, 247));
    border-radius: 1.2em;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #C8B6FF, rgb(120, 78, 247));
    filter: blur(30px);
  }

  .card span {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    border-radius: 1em;
  }

  .card span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .card .content {
    position: relative;
    padding: 10px;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card .content .title {
    font-size: 2em; /* Larger text for title */
    font-weight: 800;
    margin: 0 0 10px 0;
  }

  .card .content .description {
    font-size: 1em; /* Smaller text for description */
    margin: 0;
  }
`;

export default Card;
