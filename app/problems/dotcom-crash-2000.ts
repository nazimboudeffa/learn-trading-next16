import { ProblemElement } from "./types";

export const chartDotCom: ProblemElement = {
  id: "dotcom-crash-2000",
  name: "Éclatement de la bulle Internet (2000)",
  description: "Dataset synthétique réaliste représentant le début du crash du NASDAQ en 2000.",
  stock: "NASDAQ Composite",
  data: [
    // Sommet historique
    { time: '2000-03-10', open: '5008', high: '5048', low: '4950', close: '5046' },

    // Début de la chute
    { time: '2000-03-13', open: '5046', high: '5060', low: '4780', close: '4820' },
    { time: '2000-03-14', open: '4820', high: '4875', low: '4680', close: '4700' },
    { time: '2000-03-15', open: '4700', high: '4770', low: '4520', close: '4608' },
    { time: '2000-03-16', open: '4608', high: '4650', low: '4400', close: '4470' },
    { time: '2000-03-17', open: '4470', high: '4575', low: '4380', close: '4465' },
    // SOS rebond technique
    { time: '2000-03-20', open: '4465', high: '4590', low: '4420', close: '4548' },
    { time: '2000-03-21', open: '4548', high: '4620', low: '4480', close: '4512' },

    // Deuxième phase de chute
    { time: '2000-03-22', open: '4512', high: '4530', low: '4300', close: '4342' },
    { time: '2000-03-23', open: '4342', high: '4385', low: '4210', close: '4251' },
    { time: '2000-03-24', open: '4251', high: '4300', low: '4110', close: '4146' },

    // Avril = début de la panique
    { time: '2000-04-03', open: '4146', high: '4180', low: '3920', close: '3954' },
    { time: '2000-04-04', open: '3954', high: '4010', low: '3825', close: '3910' },
    { time: '2000-04-05', open: '3910', high: '3985', low: '3730', close: '3802' },

    // Effondrement majeur
    { time: '2000-04-10', open: '3802', high: '3840', low: '3500', close: '3601' },
    { time: '2000-04-11', open: '3601', high: '3660', low: '3400', close: '3440' },
    { time: '2000-04-12', open: '3440', high: '3520', low: '3310', close: '3360' },
    { time: '2000-04-13', open: '3360', high: '3425', low: '3250', close: '3315' },

    // Rebond faussement rassurant
    { time: '2000-04-17', open: '3315', high: '3460', low: '3280', close: '3435' },
    { time: '2000-04-18', open: '3435', high: '3560', low: '3410', close: '3501' },
    { time: '2000-04-19', open: '3501', high: '3540', low: '3350', close: '3384' },

    // Reprise de la chute
    { time: '2000-04-20', open: '3384', high: '3400', low: '3200', close: '3250' },
    { time: '2000-04-21', open: '3250', high: '3320', low: '3140', close: '3182' },

    // Début du mois de mai, toujours en descente
    { time: '2000-05-01', open: '3182', high: '3230', low: '3050', close: '3104' },
    { time: '2000-05-02', open: '3104', high: '3135', low: '2980', close: '3020' },
    { time: '2000-05-03', open: '3020', high: '3070', low: '2920', close: '2958' }
  ]
};