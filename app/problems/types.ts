export type ProblemElement = {
  id: string;
  name: string;
  description: string;
  data: {
    time: string;
    open: string;
    high: string;
    low: string;
    close: string;
  }[];
  futureData?: {
    time: string;
    open: string;
    high: string;
    low: string;
    close: string;
  }[];
};