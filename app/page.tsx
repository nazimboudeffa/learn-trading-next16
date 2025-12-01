

import Link from "next/link";
import Navbar from "./components/Navbar";
import { charts } from "./charts/index";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-linear-to-br from-indigo-200 via-blue-100 to-cyan-100 dark:from-indigo-900 dark:via-blue-900 dark:to-cyan-900 py-20 px-4 flex flex-col items-center text-center relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#6366f1" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <h1 className="relative z-10 text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 dark:from-indigo-200 dark:via-blue-200 dark:to-cyan-200 drop-shadow-lg">
          Apprenez le Trading, <br />Maîtrisez Votre Avenir
        </h1>
        <p className="relative z-10 max-w-2xl text-xl sm:text-2xl mb-10 text-blue-900 dark:text-blue-100 font-medium">
          Rejoignez une communauté de passionnés et accédez à des configurations de trading prêtes à l&apos;emploi pour booster votre apprentissage et transformer votre passion en expertise.
        </p>
      </section>

      {/* Configurations Section */}
      <section id="configurations" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-100 text-center">Configurations Populaires</h2>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
          {charts.map((chart) => (
            <li key={chart.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-cyan-300 mb-1">{chart.name}</h3>
                <p className="text-zinc-700 dark:text-zinc-200 text-base">{chart.description}</p>
              </div>
              <Link
                href={`/configurations/${chart.id}`}
                className="mt-3 sm:mt-0 sm:ml-6 px-5 py-2 rounded-full bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition"
              >
                Voir le graphique
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <Link href="/configurations" className="inline-block px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-bold shadow-md hover:from-indigo-700 hover:to-cyan-600 transition">
            Voir toutes les configurations
          </Link>
        </div>
      </section>

    </div>
  );
}
