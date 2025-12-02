import { ProblemElement } from "./types";

export const chart1987: ProblemElement = {
  id: "krach-dowjones-1987",
  name: "Krach d'Octobre 1987 (Dow Jones)",
  description: "Dataset synthétique et cohérent représentant le mouvement du Dow Jones pendant le krach d’octobre 1987.",
  data: [
    { time: '1987-10-05', open: '2590', high: '2608', low: '2562', close: '2585' },
    { time: '1987-10-06', open: '2585', high: '2602', low: '2551', close: '2571' },
    { time: '1987-10-07', open: '2571', high: '2588', low: '2530', close: '2539' },
    { time: '1987-10-08', open: '2539', high: '2544', low: '2470', close: '2496' },
    { time: '1987-10-09', open: '2496', high: '2514', low: '2418', close: '2439' },
    { time: '1987-10-12', open: '2439', high: '2456', low: '2360', close: '2389' },
    { time: '1987-10-13', open: '2389', high: '2405', low: '2305', close: '2340' },
    { time: '1987-10-14', open: '2340', high: '2397', low: '2290', close: '2322' },
    { time: '1987-10-15', open: '2322', high: '2358', low: '2204', close: '2246' },
    { time: '1987-10-16', open: '2246', high: '2268', low: '2128', close: '2164' },
    // ⚫ BLACK MONDAY — 19 octobre 1987 (−22,6 %)
    { time: '1987-10-19', open: '2164', high: '2164', low: '1670', close: '1738' },

    { time: '1987-10-20', open: '1738', high: '1954', low: '1582', close: '1841' },
    { time: '1987-10-21', open: '1841', high: '1938', low: '1801', close: '1857' },
    { time: '1987-10-22', open: '1857', high: '1930', low: '1780', close: '1812' },
    { time: '1987-10-23', open: '1812', high: '1880', low: '1750', close: '1862' },
    { time: '1987-10-26', open: '1862', high: '1875', low: '1680', close: '1793' },
    { time: '1987-10-27', open: '1793', high: '1820', low: '1654', close: '1677' },
    { time: '1987-10-28', open: '1677', high: '1790', low: '1660', close: '1760' },
    { time: '1987-10-29', open: '1760', high: '1815', low: '1728', close: '1798' },
    { time: '1987-10-30', open: '1798', high: '1830', low: '1755', close: '1812' }
  ]
};