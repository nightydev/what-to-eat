'use client';
import { Answer } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion";
import NumberInputQuestion from "@/components/NumberInputQuestion";
import YesNoQuestion from "@/components/YesNoQuestion";
import questions from "@/data/Questions";

export default function AssesmentPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = async (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const id = Date.now().toString();

      await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, data: newAnswers }),
      });

      router.push(`/result?id=${id}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
      {currentQuestion.type === 'yesno' && (
        <YesNoQuestion question={currentQuestion} onAnswer={handleAnswer} />
      )}
      {currentQuestion.type === 'multiple' && currentQuestion.options && (
        <MultipleChoiceQuestion question={currentQuestion as { text: string; options: string[] }} onAnswer={handleAnswer} />
      )}
      {currentQuestion.type === 'number' && (
        <NumberInputQuestion question={currentQuestion} onAnswer={handleAnswer} />
      )}
    </div>
  );
}
