// PortfolioChangeTable.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "ticker", headerName: "Ticker", width: 150 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "value", headerName: "Value", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "price_change", headerName: "Price Change", width: 150 },
  { field: "value_change", headerName: "Value Change", width: 150 },
];

const PortfolioChangeTable = ({ rows }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
    </div>
  );
};

export default PortfolioChangeTable;
