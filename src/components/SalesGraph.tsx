import {
  ChartContainer,
  LineChart,
  ResponsiveChartContainer,
} from "@mui/x-charts";
import { WeeklySales } from "../api/types";
import { format } from "date-fns";
import { Card } from "@mui/material";
import { useListWeeklySalesQuery } from "../api/productsAPI";

interface SalesGrapProps {
  data: WeeklySales[];
}

export const SalesGraph = (props: SalesGrapProps) => {
  const { data, error, isLoading } = useListWeeklySalesQuery();
  const timeSeriesData = data?.map((entry) => ({
    ...entry,
    weekEnding: new Date(entry.weekEnding).getTime(),
  }));

  return isLoading ? (
    <div />
  ) : (
    <Card>
      <h3 style={{ display: "flex", paddingLeft: "20px" }}>Retail Sales</h3>
      <LineChart
        height={300}
        xAxis={[
          {
            dataKey: "weekEnding",
            valueFormatter: (value) => {
              return format(value, "MMM");
            },
          },
        ]}
        yAxis={[{ tickInterval: [] }]}
        series={[
          {
            dataKey: "retailSales",
            label: "Retail Sales",
            showMark: false,
          },
        ]}
        dataset={timeSeriesData}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Card>
  );
};
