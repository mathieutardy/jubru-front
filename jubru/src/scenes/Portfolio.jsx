import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchValueChange } from "../utils/apiCalls";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "ticker", headerName: "Ticker", width: 150 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "value", headerName: "Value", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "price_change", headerName: "Price Change", width: 150 },
  { field: "value_change", headerName: "Value Change", width: 150 },
];

const Portfolio = ({ days }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchValueChange(days);
      if (data) {
        setRows(data);
      }
    };

    fetchData();
  }, [days]);

  return (
    <div style={{ height: 400, width: "100%", marginTop: "40px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Portfolio;
