import {QuizAnswer} from "./QuizAnswer";

export type QuizQuestionType = 'open' | 'closed';
export type QuizAnswerType = 'single' | 'multiple';

export class QuizQuestion<T = string> {
  constructor(public question: string,
              public type: QuizQuestionType,
              public answerType: QuizAnswerType,
              public answers: QuizAnswer<T>[]) {
  }

  isCorrectAnswer(answers: T[]): boolean {
    if (this.type === 'open') {
      return true;
    }

    if (this.answerType === 'single') {
      const answer = answers[0];
      return this.answers.filter((e) => e.isCorrect && e.answer === answer).length == 1;
    }

    return false;
  }

}
