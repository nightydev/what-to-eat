import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl p-8">
        <h1 className="text-6xl font-bold text-center text-green-600 mb-4">🍎 What to eat?</h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed mb-6">
          ¿Quieres cambiar tu alimentación y no sabes cómo empezar?<br /> <b>What to eat?</b> es la herramienta que te ayudará a obtener la dieta perfecta para ti. El mejor momento para empezar fue ayer, el segundo mejor momento es ahora. ¡Da el primer paso hacia tu cambio hoy!
        </p>
        <div className="text-center">
          <Link href="/assessment" className="inline-block bg-green-600 text-white font-semibold py-3 px-5 rounded hover:bg-green-700 transition duration-300">
            Empezar
          </Link>
        </div>
      </div>
    </main>
  );
}
