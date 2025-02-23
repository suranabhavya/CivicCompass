"use client"; 

import Link from "next/link";
import styled from "styled-components";

const HomeButton = () => {
  return (
    <StyledButton>
      <Link href="/">
        HOME
      </Link>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: #ff135a;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #d0114f;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default HomeButton;
