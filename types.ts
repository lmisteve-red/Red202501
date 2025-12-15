export enum PageStep {
  Challenge = 1,
  Quiz = 2,
  Process = 3,
  Outcome = 4,
  Form = 5,
  Success = 6
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    icon: string;
    value: string;
  }[];
}

export interface FormData {
  parentName: string;
  contact: string;
  grade: string;
  concerns: string[];
}