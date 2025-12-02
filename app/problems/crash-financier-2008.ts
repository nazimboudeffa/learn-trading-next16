import { ProblemElement } from "./types";

export const chart2008: ProblemElement = {
  id: "crash-financier-2008",
  name: "Crash Financier 2008",
  description: "Un graphique représentant le crash financier de 2008.",
  data: [
    { time: '2008-09-15', open: '1250.92', high: '1250.92', low: '1192.70', close: '1192.70' },
    { time: '2008-09-16', open: '1188.31', high: '1214.84', low: '1169.28', close: '1213.60' },
    { time: '2008-09-17', open: '1210.34', high: '1210.34', low: '1155.88', close: '1156.39' },
    { time: '2008-09-18', open: '1157.08', high: '1211.14', low: '1133.50', close: '1206.51' },
    { time: '2008-09-19', open: '1213.11', high: '1265.12', low: '1213.11', close: '1255.08' },
  ],
  futureData: [
    { time: '2008-09-22', open: '1255.00', high: '1260.00', low: '1240.00', close: '1245.00' },
    { time: '2008-09-23', open: '1245.00', high: '1255.00', low: '1235.00', close: '1240.00' },
    { time: '2008-09-24', open: '1240.00', high: '1248.00', low: '1220.00', close: '1225.00' },
    { time: '2008-09-25', open: '1225.00', high: '1235.00', low: '1210.00', close: '1215.00' },
    { time: '2008-09-26', open: '1215.00', high: '1220.00', low: '1200.00', close: '1205.00' },
  ],
};