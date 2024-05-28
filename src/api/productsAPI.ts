import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { ListProductSalesResponse, ProductData, WeeklySales } from "./types";

import { fetchAPIData } from "./DataProvider";

const mockBaseQuery: BaseQueryFn<
  void,
  ListProductSalesResponse,
  unknown
> = async () => {
  try {
    const response = fetchAPIData();
    return { data: response };
  } catch (error) {
    return { error };
  }
};

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getProductData: builder.query<ProductData, void>({
      query: () => undefined,
      transformResponse: (response: ListProductSalesResponse) =>
        response.productData[0],
    }),
    listWeeklySales: builder.query<WeeklySales[], void>({
      query: () => undefined,
      transformResponse: (response: ListProductSalesResponse) =>
        response.productData[0].sales,
    }),
  }),
});
export const { useListWeeklySalesQuery, useGetProductDataQuery } = productsAPI;
