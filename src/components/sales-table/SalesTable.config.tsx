import { TableColumn } from "react-data-table-component";
import { WeeklySales } from "../../api/types";

export const getColumns = (): TableColumn<WeeklySales>[] => {
  return [
    {
      name: "Week Ending",
      sortable: true,
      // TODO: use an actual date
      selector: (data) => data.weekEnding.toString(),
    },
    { name: "Units Sold", sortable: true, selector: (data) => data.unitsSold },
    {
      name: "Retail Sales",
      sortable: true,
      selector: (data) => data.retailSales,
    },
    {
      name: "Wholesale Sales",
      sortable: true,
      selector: (data) => data.wholesaleSales,
    },
    {
      name: "Retailer Margin",
      sortable: true,
      selector: (data) => data.retailerMargin,
    },
  ];
};
