// Format type pour un challenge chartiste
export interface ChartistQuizz {
  id: string;
  title: string;
  description: string;
  image: string; // chemin relatif depuis /public
  question: string;
  options: { value: string; label: string }[];
  answer: string; // valeur correcte
}

// Exemple de quizz (à compléter/étendre)
export const chartistQuizz: ChartistQuizz[] = [
  {
    id: "triangle-symetrique",
    title: "Triangle Symétrique",
    description: "Identifie la figure de triangle symétrique sur le graphique.",
    image: "/quizz/triangle-symetrique.png",
    question: "Où commence la figure ?",
    options: [
      { value: "A", label: "Point A" },
      { value: "B", label: "Point B" },
      { value: "C", label: "Point C" },
    ],
    answer: "A",
  },
  {
    id: "double-top",
    title: "Double Top",
    description: "Repère les deux sommets sur le graphique.",
    image: "/quizz/double-top.png",
    question: "Où sont les sommets ?",
    options: [
      { value: "AB", label: "Points A et B" },
      { value: "BC", label: "Points B et C" },
      { value: "AC", label: "Points A et C" },
    ],
    answer: "AB",
  },
  {
    id: "ete",
    title: "Épaule-Tête-Épaule",
    description: "Trouve la tête sur la figure Épaule-Tête-Épaule.",
    image: "/quizz/ete.png",
    question: "Où est la tête ?",
    options: [
      { value: "A", label: "Point A" },
      { value: "B", label: "Point B" },
      { value: "C", label: "Point C" },
    ],
    answer: "B",
  },
  {
    id: "quizz-exemple-1",
    title: "Identification de Figure Chartiste",
    description: "Voici un exemple de figure chartiste à identifier.",
    image: "/quizz/quizz-exemple-1.png",
    question: "Que représente cette figure chartiste ?",
    options: [
      { value: "A", label: "ETE" },
      { value: "B", label: "Triangle Symétrique" },
      { value: "C", label: "Double Top" },
    ],
    answer: "B",
  }
];
