import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loader() {
  return <LoaderContainer>Loading...</LoaderContainer>;
}
