import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend className="friend">
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

// OUTSIDE THE COMPONENT FUNCTION

const StyledFriend = styled.div`
  color: red;
  font-weight: bold;
`;
