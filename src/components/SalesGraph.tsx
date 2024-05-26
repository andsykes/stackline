import { LineChart } from "@mui/x-charts";
import { WeeklySales } from "../api/types";
import { format } from "date-fns";

interface SalesGrapProps {
  data: WeeklySales[];
}

export const SalesGraph = (props: SalesGrapProps) => {
  const { data } = props;
  const timeSeriesData = data.map((entry) => ({
    ...entry,
    weekEnding: new Date(entry.weekEnding).getTime(),
  }));

  return (
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
      series={[
        // {
        //   dataKey: "retailSales",
        //   label: "Retail Sales",
        //   showMark: false,
        // },

        {
          dataKey: "retailerMargin",
          label: "Retailer Margin",
          showMark: false,
        },
        // {
        //   dataKey: "unitsSold",
        //   label: "Units Sold",
        // },
        {
          dataKey: "wholesaleSales",
          label: "Wholesale Sales",
          showMark: false,
        },
      ]}
      dataset={timeSeriesData}
      legend={{ hidden: true }}
    />
  );
};
