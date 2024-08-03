'use client';
import { Answer } from '@/types/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        await Promise.all([fetchData(), delay(2000)]);
        setLoading(false);
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
        <div>
          Hola pepe
          <Link href={'/'}>Reintentar</Link>
        </div>
      )}
    </>
  );
}
