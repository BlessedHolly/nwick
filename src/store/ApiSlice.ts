import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/query";

export type Stock = {
  symbol: string;
  c: number;
  pc: number;
};

const token = "cvueqf1r01qjg139c34gcvueqf1r01qjg139c350";
const companies = ["AAPL", "MSFT", "GOOGL", "AMZN"];

export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://finnhub.io/api/v1/" }),
  endpoints: (builder) => ({
    getStockQuotes: builder.query<Stock[], void>({
      async queryFn(
        _arg,
        _api,
        _extraOptions,
        baseQuery
      ): Promise<
        QueryReturnValue<Stock[], FetchBaseQueryError, FetchBaseQueryMeta>
      > {
        try {
          const results = await Promise.all(
            companies.map(async (symbol) => {
              const result = await baseQuery(
                `quote?symbol=${symbol}&token=${token}`
              );

              if (
                result.error ||
                !result.data ||
                typeof result.data !== "object"
              ) {
                throw new Error(`Error ${symbol}`);
              }

              const data = result.data as { c: number; pc: number };
              return {
                symbol,
                c: data.c,
                pc: data.pc,
              };
            })
          );

          const manual: Stock[] = [
            { symbol: "NVDA", c: 913, pc: 900 },
            { symbol: "TSLA", c: 176, pc: 180 },
            { symbol: "META", c: 410, pc: 405 },
            { symbol: "NFLX", c: 600, pc: 590 },
            { symbol: "BABA", c: 78, pc: 80 },
            { symbol: "AMD", c: 152, pc: 149 },
            { symbol: "INTC", c: 35, pc: 34 },
            { symbol: "SHOP", c: 68, pc: 70 },
            { symbol: "BA", c: 180, pc: 175 },
            { symbol: "ORCL", c: 120, pc: 118 },
          ];

          return {
            data: [...results, ...manual],
            meta: undefined,
          };
        } catch (error) {
          let message = "Error";

          if (error instanceof Error) {
            message = error.message;
          }

          return {
            error: {
              status: "FETCH_ERROR",
              error: message,
            },
            meta: undefined,
          };
        }
      },
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetStockQuotesQuery } = stockApi;
