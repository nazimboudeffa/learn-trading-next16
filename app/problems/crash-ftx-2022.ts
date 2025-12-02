import { ProblemElement } from "./types";

export const chartFTX2022: ProblemElement = {
  id: "crash-ftx-2022",
  name: "Crash Crypto - Effondrement de FTX (2022)",
  description: "Un graphique montrant la chute brutale du Bitcoin lors de la débâcle FTX.",
  data: [
    { time: '2022-11-06', open: "21500.00", high: "21780.00", low: "20800.00", close: "21140.00" },
    { time: '2022-11-07', open: "21140.00", high: "21220.00", low: "19810.00", close: "20100.00" },
    { time: '2022-11-08', open: "20100.00", high: "20350.00", low: "17180.00", close: "17890.00" },
    { time: '2022-11-09', open: "17890.00", high: "18040.00", low: "15750.00", close: "16240.00" },
    { time: '2022-11-10', open: "16240.00", high: "17290.00", low: "16010.00", close: "16850.00" }
  ],
  futureData: [
    { time: '2022-11-11', open: '16850.00', high: '17000.00', low: '16500.00', close: '16700.00' },
    { time: '2022-11-12', open: '16700.00', high: '16900.00', low: '16400.00', close: '16550.00' },
    { time: '2022-11-13', open: '16550.00', high: '16800.00', low: '16300.00', close: '16600.00' },
    { time: '2022-11-14', open: '16600.00', high: '17000.00', low: '16500.00', close: '16900.00' },
    { time: '2022-11-15', open: '16900.00', high: '17200.00', low: '16800.00', close: '17100.00' },
  ],
};