export type ProblemElement = {
  id: string;
  name: string;
  description: string;
  data: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
};