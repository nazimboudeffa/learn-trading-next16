"use client";

import { useEffect, useRef } from "react";
import { CandlestickSeries, createChart, IChartApi } from "lightweight-charts";
import type { CandlestickData } from "lightweight-charts";

interface TradingChartProps {
  rawData: CandlestickData[];
}

export default function TradingChart({ rawData }: Readonly<TradingChartProps>) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Responsive width/height
    const resize = () => {
      if (chartInstance.current && chartRef.current) {
        chartInstance.current.resize(chartRef.current.offsetWidth, chartRef.current.offsetHeight);
      }
    };

    chartInstance.current = createChart(chartRef.current, {
      width: chartRef.current.offsetWidth,
      height: chartRef.current.offsetHeight || 300,
    });

    const candlestickSeries = chartInstance.current.addSeries(CandlestickSeries, {
      upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
      wickUpColor: '#26a69a', wickDownColor: '#ef5350',
    });
    candlestickSeries.setData(rawData);
    chartInstance.current.timeScale().fitContent();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      chartInstance.current?.remove();
    };
  }, []);

  // Update data on change
  useEffect(() => {
    if (chartInstance.current) {
      const series = chartInstance.current.addSeries(CandlestickSeries, {
        upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
      });
      series.setData(rawData);
      chartInstance.current.timeScale().fitContent();
    }
  }, [rawData]);

  return (
    <div
      ref={chartRef}
      className="w-full h-[40vw] max-h-[400px] min-h-[220px] md:h-[300px] md:max-h-[400px] rounded-lg overflow-hidden bg-white dark:bg-zinc-800 shadow"
      style={{ minWidth: 0 }}
    />
  );
}
