import React from 'react';
import styled from 'styled-components';

const Card = ({ message }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <span />
        <div className="content">
          {message || "Hover Me : )"}
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
    background: linear-gradient(45deg, #C8B6FF,rgb(149, 182, 247));
    border-radius: 1.2em;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #C8B6FF,rgb(120, 78, 247));
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
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5em;
  }
`;

export default Card;