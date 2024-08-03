import { MultipleChoiceQuestionProps } from "@/types/types";

export default function MultipleChoiceQuestion({ question, onAnswer }: MultipleChoiceQuestionProps) {
  return (
    <div className="max-w-2xl p-8 flex flex-col items-center">
      <p className="text-gray-700 text-2xl text-center leading-relaxed mb-6">{question.text}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)} className="inline-block bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition duration-300 text-xl p-3">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}