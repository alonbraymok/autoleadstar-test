import React from "react";
import TableRow from "./table.row";

export default function Table({ data = [], columns = [] }) {
  function renderData() {
    return data.map((item, index) => (
      <TableRow row={item} key={`${index}_${item}`} />
    ));
  }
  return (
    <>
      <TableRow row={columns} isHeader />
      {renderData()}
    </>
  );
}
