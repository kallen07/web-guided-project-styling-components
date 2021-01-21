import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend danger={info.name === "Devin"}>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

// OUTSIDE THE COMPONENT FUNCTION

const StyledFriend = styled.div`
  color: ${(pr) => (pr.danger ? pr.theme.primaryColor : pr.theme)};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
  }

  button {
    color: ${(pr) => pr.theme.tertiaryColor};
  }
`;
