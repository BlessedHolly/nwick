import { useEffect, useState } from "react";
import styles from "./Securities.module.scss";
import { useGetStockQuotesQuery } from "../../store/ApiSlice";

type Stock = {
  symbol: string;
  c: number;
  pc: number;
};

function Securities() {
  const { data, isSuccess } = useGetStockQuotesQuery(undefined);
  const [stockData, setStockData] = useState<Stock[]>([]);

  useEffect(() => {
    if (isSuccess) setStockData(data);
  }, [isSuccess, data]);

  return (
    <div className={`${styles.topContainer} globalPadding`}>
      <h1>Top promotions</h1>
      <div className={styles.cards}>
        {stockData.map((stock) => (
          <div key={stock.symbol} className={styles.card}>
            <div className={styles.symbol}>{stock.symbol}</div>
            <div className={styles.price}>
              ${stock.c?.toFixed(2) || "No data"}
            </div>
            <div className={stock.c > stock.pc ? styles.up : styles.down}>
              {stock.c > stock.pc ? "+" : ""}
              {(stock.c - stock.pc)?.toFixed(2) || "No data"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Securities;
