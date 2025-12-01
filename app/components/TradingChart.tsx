"use client";

import { useEffect, useRef } from "react";
import { CandlestickSeries, createChart, IChartApi } from "lightweight-charts";

type CandlestickData = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

interface TradingChartProps {
  rawData: CandlestickData[];
}

export default function TradingChart({ rawData }: Readonly<TradingChartProps>) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart: IChartApi = createChart(chartRef.current, {
      width: 600,
      height: 300,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
    });
    candlestickSeries.setData(rawData);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [rawData]);

  return <div ref={chartRef} />;
}
