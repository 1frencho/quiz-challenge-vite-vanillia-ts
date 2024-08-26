export interface Answer {
  id: number;
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  possibleAnswers: Answer[];
  correctAnswer: number;
}
