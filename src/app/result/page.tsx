'use client';
import TransitionLink from '@/components/TransitionLink';
import { Answer } from '@/types/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [answers, setAnswers] = useState<Answer[] | null>(null);
  const [loading, setLoading] = useState(true);

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

        body?.classList.add('page-transition')

        await sleep(500);

        setLoading(false);

        await sleep(500);

        body?.classList.remove('page-transition');
      }
    };

    loadPage();

  }, [id]);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="max-w-2xl p-8">
            <h1 className="text-6xl font-bold text-center text-gray-700 mb-4">Creando tu dieta...</h1>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          Hola pepe
          <TransitionLink href='/'>
            <button className="inline-block bg-green-600 text-white font-semibold py-3 px-5 rounded hover:bg-green-700 transition duration-300">Reintentar</button>
          </TransitionLink>
        </div>
      )}
    </>
  );
}
