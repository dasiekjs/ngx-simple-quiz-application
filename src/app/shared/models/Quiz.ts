import {QuizQuestion} from "./QuizQuestion";

export interface Quiz {
  name: string;
  description?: string;
  questions: QuizQuestion[];
}
