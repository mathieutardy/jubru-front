import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTheme } from "@mui/material/styles";

const PortfolioChangeTable = ({ rows }) => {
  const theme = useTheme();

  const renderChangeCell = (params) => {
    const isPositive = params.value > 0;
    const color = isPositive
      ? theme.palette.success.main
      : theme.palette.error.main;
    const Icon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon;

    return (
      <div style={{ color: color, display: "flex", alignItems: "center" }}>
        <Icon style={{ fontSize: 16, marginRight: 4 }} />
        {params.value}
      </div>
    );
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 150},
    { field: "ticker", headerName: "Ticker", width: 180 },
    { field: "quantity", headerName: "Quantity", width: 180 },
    { field: "value", headerName: "Value (€)", width: 180 },
    {
      field: "price_change",
      headerName: "Price Change (%)",
      width: 180,
      renderCell: renderChangeCell,
    },
    {
      field: "value_change",
      headerName: "Value Change (€)",
      width: 180,
      renderCell: renderChangeCell,
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%", marginTop: "20px" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
    </div>
  );
};

export default PortfolioChangeTable;
