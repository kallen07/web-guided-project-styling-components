import React from "react";
import styled from "styled-components";

export default function Friend({ bold, info, action }) {
  return (
    <StyledFriend bold={bold} danger={info.name === "Devin"}>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

// OUTSIDE THE COMPONENT FUNCTION

const StyledFriend = styled.div`
  color: ${(pr) => (pr.danger ? pr.theme.danger : pr.theme.primaryColor)};
  font-weight: ${(pr) => (pr.bold ? "bold" : "initial")};
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: cyan;
  }

  button {
    color: ${(pr) => pr.theme.tertiaryColor};
  }
`;
