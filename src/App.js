import { Loader, Table } from "components"; //using src as base url for imports
import data from "utils/data.json";
import { useMemo } from "react";

const titleStyle = {
  textAlign: "center",
};

function App() {
  //improve performance by using useMemo hook, caching a value so that it does not need to be recalculated
  const tableData = useMemo(() => {
    const res = data.data.map((item) => Object.values(item));
    return res;
  }, [data]);

  const tableColumns = useMemo(() => {
    const columns = Object.keys(data.data[0]);
    return columns;
  }, [data]);

  return (
    <>
      <h1 style={titleStyle}>{data?.title}</h1>
      {tableData ? ( //improve ux bu showing loading when data loading
        <Table data={tableData} columns={tableColumns} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
