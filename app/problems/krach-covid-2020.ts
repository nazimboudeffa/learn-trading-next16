import { ProblemElement } from "./types";

export const chartCovid: ProblemElement = {
  id: "krach-covid-2020",
  name: "Krach du COVID-19 (2020)",
  description: "Un graphique représentant la chute violente des marchés lors du début de la pandémie.",
  data: [
    { time: '2020-03-09', open: 3020.10, high: 3058.20, low: 2814.40, close: 2851.90 },
    { time: '2020-03-10', open: 2851.90, high: 2931.40, low: 2720.80, close: 2888.50 },
    { time: '2020-03-11', open: 2888.50, high: 2910.20, low: 2658.00, close: 2705.30 },
    { time: '2020-03-12', open: 2705.30, high: 2712.40, low: 2470.80, close: 2491.60 },
    { time: '2020-03-13', open: 2491.60, high: 2750.90, low: 2375.40, close: 2630.40 }
  ],
};