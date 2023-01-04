import React from "react";
import styled from "styled-components";

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const RowItem = styled.span`
  background-color: ${({ isHeader }) => (isHeader ? "#fafafa" : "#fff")};
  border-bottom: solid 1px #fafafa;
  border-right: ${({ isHeader }) =>
    isHeader ? "solid 2px #c3c3c3" : "solid 0px"};
  font-weight: ${({ isHeader }) => (isHeader ? 700 : 400)};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2%;
`;

export default function TableRow({ row = [], isHeader }) {
  function renderRow() {
    return row.map((item) => (
      <RowItem isHeader={isHeader} key={item}>
        {item}
      </RowItem>
    ));
  }

  return <RowContainer> {renderRow()}</RowContainer>;
}
