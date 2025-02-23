import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="paste-button">
        <button className="button">Type of Business &nbsp; ▼</button>
        <div className="dropdown-content">
          <a id="top" href="#">Grocery Store</a>
          <a id="middle" href="#">Stationery</a>
          <a id="bottom" href="#">Food Chain</a>
          <a id="bottom" href="#">Gym Center</a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .paste-button {
    position: relative;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .button {
    background-color: #4CAF50;
    color: #212121;
    padding: 10px 15px;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 15px;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    font-size: 13px;
    position: absolute;
    z-index: 1;
    min-width: 200px;
    background-color: #212121;
    border: 2px solid #4CAF50;
    border-radius: 0px 15px 15px 15px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .dropdown-content a {
    color: #4CAF50;
    padding: 8px 10px;
    text-decoration: none;
    display: block;
    transition: 0.1s;
  }

  .dropdown-content a:hover {
    background-color: #4CAF50;
    color: #212121;
  }

  .dropdown-content a:focus {
    background-color: #212121;
    color: #4CAF50;
  }

  .dropdown-content #top:hover {
    border-radius: 0px 13px 0px 0px;
  }

  .dropdown-content #bottom:hover {
    border-radius: 0px 0px 13px 13px;
  }

  .paste-button:hover button {
    border-radius: 15px 15px 0px 0px;
  }

  .paste-button:hover .dropdown-content {
    display: block;
  }`;

export default Button;
