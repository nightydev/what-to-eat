'use client';

import { useSearchParams } from 'next/navigation';
import TransitionLink from '@/components/TransitionLink';
import { Answer } from '@/types/types';
import { useEffect, useState, Suspense } from 'react';
import { createMealPlan } from '@/data/mealPlanner';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ResultContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [answers, setAnswers] = useState<Answer[] | null>(null);
  const [loading, setLoading] = useState(true);

  let TMB = 0;

  function motor(answers: Answer[]) {
    switch (answers[1]) {
      case 'Femenino':
        TMB = parseFloat((447.6 + (9.2 * (answers[4] as number)) + (3.1 * ((answers[3] as number) / 100)) - (4.3 * (answers[2] as number))).toFixed(0));
        break;

      case 'Masculino':
        TMB = parseFloat((88.36 + (13.4 * (answers[4] as number)) + (4.8 * ((answers[3] as number) / 100)) - (5.7 * (answers[2] as number))).toFixed(0));
        break;
    }

    switch (answers[5]) {
      case 'No realizo':
        TMB = parseFloat((TMB * 1.2).toFixed(0));
        break;

      case '1 a 2 veces':
        TMB = parseFloat((TMB * 1.37).toFixed(0));
        break;

      case '3 a 4 veces':
        TMB = parseFloat((TMB * 1.55).toFixed(0));
        break;

      case '5 a 6 veces':
        TMB = parseFloat((TMB * 1.72).toFixed(0));
        break;

      case 'Toda la semana':
        TMB = parseFloat((TMB * 1.9).toFixed(0));
        break;
    }

    switch (answers[0]) {
      case 'Perder peso':
        TMB = TMB - 500;
        break;

      case 'Ganar masa muscular':
        TMB = TMB + 500;
        break;

      case 'Mantener el peso':
        break;
    }

    const plan = createMealPlan(answers, TMB);

    return plan;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/?id=${id}`);
      const result = await response.json();
      setAnswers(result.data);
    };

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const loadPage = async () => {
      if (id) {
        await Promise.all([fetchData(), delay(3000)]);

        const body = document.querySelector('body');

        body?.classList.add('page-transition');

        await sleep(500);

        setLoading(false);

        await sleep(500);

        body?.classList.remove('page-transition');
      }
    };

    loadPage();

  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="max-w-2xl p-8">
          <h1 className="text-6xl font-bold text-center text-gray-700 mb-4">Creando tu dieta...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 p-6 text-gray-900">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <p className="text-lg font-semibold mb-6">
          A continuación te proporciono una dieta que cumple con las calorías adecuadas a tus características:
        </p>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {motor(answers as Answer[]).map((meal, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-bold mb-2">
                {meal.meal} <span className="text-green-600">({meal.totalCalories} calorías)</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                {meal.items.map((food, index) => (
                  <li key={index} className="text-gray-700">{food.name} <span className="text-gray-500">({food.caloriesPerServing} calorías)</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <TransitionLink href='/'>
            <button className="bg-green-600 text-white font-semibold py-3 px-5 rounded-full hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
              Regresar
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
