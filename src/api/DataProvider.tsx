import data from "../data/stackline_frontend_assessment_data_2021.json";
import { ListProductSalesResponse } from "./types";

export const fetchAPIData = (): ListProductSalesResponse => {
  return { productData: data };
};
