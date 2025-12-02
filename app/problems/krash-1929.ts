import { ProblemElement } from "./types";

export const chart1929: ProblemElement = {
  id: "crash-1929",
  name: "Krach de 1929",
  description: "Dataset synthétique mais réaliste représentant le crash historique de 1929.",
  stock: "Dow Jones Industrial Average",
  data: [
    { time: '1929-10-23', open: '326.00', high: '329.50', low: '317.20', close: '320.40' },
    // Black Thursday
    { time: '1929-10-24', open: '320.40', high: '322.10', low: '285.00', close: '299.47' },
    // Vendredi de panique légère
    { time: '1929-10-25', open: '299.47', high: '308.20', low: '292.00', close: '301.90' },
    // Week-end puis lundi noir
    { time: '1929-10-28', open: '301.90', high: '303.10', low: '248.00', close: '260.64' },
    // Mardi noir
    { time: '1929-10-29', open: '260.64', high: '268.00', low: '219.00', close: '230.07' },
    // Rebond technique
    { time: '1929-10-30', open: '230.07', high: '245.00', low: '226.50', close: '238.50' },
    { time: '1929-10-31', open: '238.50', high: '244.60', low: '228.40', close: '232.13' },
    // Début novembre : volatilité extrême
    { time: '1929-11-01', open: '232.13', high: '239.70', low: '221.20', close: '228.60' },
    { time: '1929-11-04', open: '228.60', high: '232.40', low: '214.50', close: '216.80' },
    { time: '1929-11-05', open: '216.80', high: '220.10', low: '207.00', close: '210.40' },
    // 6 novembre : vrai point bas
    { time: '1929-11-06', open: '210.40', high: '214.30', low: '203.80', close: '206.30' },
    { time: '1929-11-07', open: '206.30', high: '214.00', low: '204.50', close: '212.90' },
    { time: '1929-11-08', open: '212.90', high: '226.40', low: '211.80', close: '223.10' },
    { time: '1929-11-11', open: '223.10', high: '229.50', low: '218.40', close: '224.30' },
    { time: '1929-11-12', open: '224.30', high: '231.00', low: '221.80', close: '227.60' },
    { time: '1929-11-13', open: '227.60', high: '244.50', low: '223.40', close: '241.40' },
    { time: '1929-11-14', open: '241.40', high: '247.20', low: '228.80', close: '233.50' },
    { time: '1929-11-15', open: '233.50', high: '239.00', low: '226.20', close: '230.10' }
  ],
};