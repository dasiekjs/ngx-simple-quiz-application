export interface QuizAnswer<T = string> {
  answer: T;
  isCorrect?: boolean;
}
