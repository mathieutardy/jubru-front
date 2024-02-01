// PortfolioChangeTable.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  // { field: "id", headerName: "ID", width: 150},
  { field: "ticker", headerName: "Ticker", width: 180 },
  { field: "quantity", headerName: "Quantity", width: 180 },
  { field: "value", headerName: "Value", width: 180 },
  { field: "price_change", headerName: "Price Change", width: 180 },
  { field: "value_change", headerName: "Value Change", width: 180 },
];

const PortfolioChangeTable = ({ rows }) => {
  return (
    <div style={{ height: "100%", width: "100%", marginTop: "40px" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
    </div>
  );
};

export default PortfolioChangeTable;
