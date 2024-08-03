export interface Question {
  type: 'yesno' | 'multiple' | 'number';
  text: string;
  options?: string[];
}

export interface YesNoQuestionProps {
  question: {
    text: string;
  };
  onAnswer: (answer: boolean) => void;
}

export interface MultipleChoiceQuestionProps {
  question: {
    text: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export interface NumberInputQuestionProps {
  question: {
    text: string;
  };
  onAnswer: (answer: number) => void;
}

export type Answer = boolean | string | number;