import { WeeklySales } from "../../api/types";
import DataTable from "react-data-table-component";
import { getColumns } from "./SalesTable.config";

interface SalesTableProps {
  data: WeeklySales[];
}

export const SalesTable = (props: SalesTableProps) => {
  const { data } = props;
  return <DataTable columns={getColumns()} data={data} />;
};
