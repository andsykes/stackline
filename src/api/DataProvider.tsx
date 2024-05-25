import data from '../data/stackline_frontend_assessment_data_2021.json'
import { SalesAPIResponse } from "./types";

export const fetchAPIData = (): SalesAPIResponse => {
    return {
        productSales: data
    }
}