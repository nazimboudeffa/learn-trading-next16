import { ProblemElement } from "./types";

export const chart1: ProblemElement = {
  id: "example-chart",
  name: "Graphique de Trading Simple",
  description: "Un graphique simple affichant des chandeliers japonais.",
  data: [
    { time: '2018-12-22', open: '75.16', high: '82.84', low: '36.16', close: '45.72' },
    { time: '2018-12-23', open: '45.12', high: '53.90', low: '45.12', close: '48.09' },
    { time: '2018-12-24', open: '60.71', high: '60.71', low: '53.39', close: '59.29' },
    { time: '2018-12-25', open: '68.26', high: '68.26', low: '59.04', close: '60.50' },
    { time: '2018-12-26', open: '67.71', high: '105.85', low: '66.67', close: '91.04' },
    { time: '2018-12-27', open: '91.04', high: '121.40', low: '82.70', close: '111.40' },
    { time: '2018-12-28', open: '111.51', high: '142.83', low: '103.34', close: '131.25' },
    { time: '2018-12-29', open: '131.33', high: '151.17', low: '77.68', close: '96.43' },
    { time: '2018-12-30', open: '106.33', high: '110.20', low: '90.39', close: '98.10' },
    { time: '2018-12-31', open: '109.87', high: '114.69', low: '85.66', close: '111.26' },
  ],
  futureData: [
    { time: '2019-01-01', open: '111.26', high: '115.00', low: '110.00', close: '113.00' },
    { time: '2019-01-02', open: '113.00', high: '117.00', low: '112.00', close: '116.00' },
    { time: '2019-01-03', open: '116.00', high: '120.00', low: '115.00', close: '119.00' },
    { time: '2019-01-04', open: '119.00', high: '123.00', low: '118.00', close: '122.00' },
    { time: '2019-01-05', open: '122.00', high: '125.00', low: '121.00', close: '124.00' },
  ],
};