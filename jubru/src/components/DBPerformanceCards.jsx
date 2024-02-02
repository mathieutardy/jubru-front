import PerformanceCard from "../components/PerformanceCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Grid } from "@mui/material";

const DBPerformanceCards = ({ data, selectedDays, unrealisedGains }) => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12} md={4}>
        <PerformanceCard
          title="Value (€)"
          icon={AccountBalanceWalletIcon}
          number={`${data.portfolio_value}€`}
          description={`${unrealisedGains}€`}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <PerformanceCard
          title="Change (€)"
          icon={TrendingUpIcon}
          number={`${data.value_change}€`}
          description={`${selectedDays} days change`}
          showArrow={true}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <PerformanceCard
          title="Change (%)"
          icon={PercentIcon}
          number={`${data.pct_change}%`}
          description={`${selectedDays} days change`}
          showArrow={true}
        />
      </Grid>
    </Grid>
  );
};

export default DBPerformanceCards;
