import { YesNoQuestionProps } from "@/types/types";

export default function YesNoQuestion({ question, onAnswer }: YesNoQuestionProps) {
  return (
    <div className="max-w-2xl p-8">
      <p className="text-gray-700 text-2xl text-center leading-relaxed mb-6">{question.text}</p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => onAnswer(true)} className="inline-block bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300 w-20 h-12 text-xl">Sí</button>
        <button onClick={() => onAnswer(false)} className="inline-block bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300 w-20 h-12 text-xl">No</button>
      </div>
    </div>
  );
}