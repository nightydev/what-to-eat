import { NumberInputQuestionProps } from "@/types/types";
import { useState, useEffect } from "react";

export default function NumberInputQuestion({ question, onAnswer }: NumberInputQuestionProps) {
  const [answer, setAnswer] = useState<string>('');
  const [isInRange, setIsInRange] = useState<boolean>(false);

  const [questionText, min, max] = question.text.split('&');
  const [minValue, maxValue] = min.split('/').map(Number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setAnswer(value);
    }
  };

  useEffect(() => {
    const numericValue = Number(answer);
    if (numericValue >= minValue && numericValue <= maxValue) {
      setIsInRange(true);
    } else {
      setIsInRange(false);
    }
  }, [answer, minValue, maxValue]);

  const handleSubmit = () => {
    if (answer !== '' && isInRange) {
      onAnswer(Number(answer));
      setAnswer('');
    }
  };

  return (
    <div className="max-w-2xl p-8 flex flex-col items-center">
      <p className="text-gray-700 text-2xl text-center leading-relaxed mb-6">{questionText}</p>
      <input
        type="number"
        value={answer}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={handleSubmit}
        disabled={answer === '' || !isInRange}
        className={`mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${answer === '' || !isInRange ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Continuar
      </button>
    </div>
  );
}
