import React, { useState } from 'react'
import styled from 'styled-components'

// create styled component OUTSIDE OF YOUR REACT COMPONENT!!!
// capitalized the first letter of the styled component name (bc it is a react component)
// everything inside of the backticks is css, we need to end lines with semicolons
const StyledFriend = styled.div`
  color: ${props => props.good ? "green" : "red"};
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.h2size};

  &:hover {
    background-color: black;
    transition: 0.5s ease-in-out;
  }
  transition: 0.5s ease-in-out;

  button {
    color: red;
  }
`;

// const StyledButton = styled.button`
//   color: red;
// `;

export default function Friend({ info, action }) {
  const [isGood, setIsGood] = useState(info.name === "Devin" ? false : true)
 
  return (
    <StyledFriend good={isGood}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
