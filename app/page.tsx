

import Link from "next/link";
import Navbar from "./components/Navbar";
import { problems } from "./problems/index";

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
        <Link href="/" className="relative z-10 text-2xl sm:text-3xl font-extrabold text-indigo-700 dark:text-cyan-300 tracking-tight leading-tight mb-6">
          Apprendre le Trading
        </Link>
        <h1 className="relative z-10 text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 dark:from-indigo-200 dark:via-blue-200 dark:to-cyan-200 drop-shadow-lg">
          Maitrisez les Actifs Financiers
        </h1>
        <p className="relative z-10 max-w-2xl text-xl sm:text-2xl mb-10 text-blue-900 dark:text-blue-100 font-medium">
          Plateforme interactive pour apprendre le trading, reconnaître les figures chartistes et s&apos;entraîner sur des graphiques historiques.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center text-center py-10 px-4">
        <h1 className="relative z-10 text-3xl font-extrabold mb-6 text-indigo-700 dark:text-cyan-300">Fonctionnalités Clés</h1>
        <p className="relative z-10 max-w-2xl text-lg sm:text-xl mb-10 text-blue-900 dark:text-blue-100 font-medium">
          Commencez par explorer les graphiques ou relevez les <span className="font-bold text-pink-600">challenges chartistes</span> pour perfectionner votre œil de trader !
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full mb-8">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center">
            <span className="text-4xl mb-3">📈</span>
            <h3 className="text-lg font-bold text-indigo-700 dark:text-cyan-300 mb-2">Graphiques Historiques</h3>
            <p className="text-zinc-700 dark:text-zinc-200">Entraînez-vous sur des scénarios réels issus de l&apos;histoire des marchés.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center">
            <span className="text-4xl mb-3">🧩</span>
            <h3 className="text-lg font-bold text-indigo-700 dark:text-cyan-300 mb-2">Challenges Chartistes</h3>
            <p className="text-zinc-700 dark:text-zinc-200">Reconnaissez les figures techniques et testez vos connaissances avec des quiz interactifs.</p>
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section id="configurations" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-100 text-center">Graphiques Populaires</h2>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 mx-auto max-w-2xl flex flex-col items-center">
          {problems
            .filter(
              (problem) =>
                problem.id === "dotcom-crash-2000" ||
                problem.id === "crash-financier-2008" ||
                problem.id === "bullrun-bitcoin-2017"
            )
            .map((problem) => (
              <li key={problem.id} className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-cyan-300 mb-1">{problem.name}</h3>
                  <p className="text-zinc-700 dark:text-zinc-200 text-base">{problem.description}</p>
                </div>
                <Link
                  href={`/charts/${problem.id}`}
                  className="mt-3 sm:mt-0 sm:ml-6 px-5 py-2 rounded-full bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition"
                >
                  Voir le graphique
                </Link>
              </li>
            ))}
        </ul>
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/charts" className="inline-block px-8 py-3 rounded-full bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-bold shadow-md hover:from-indigo-700 hover:to-cyan-600 transition">
            Graphiques Historiques
          </Link>
          <Link href="/quizz" className="inline-block px-8 py-3 rounded-full bg-pink-600 text-white font-bold shadow-md hover:bg-pink-700 transition">
            Quizz Chartistes
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-16 py-6 px-4 text-center text-zinc-600 dark:text-zinc-400 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Apprendre le Trading. Tous droits réservés.</span>
          <a href="https://github.com/nazimboudeffa/learn-trading-next16" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-cyan-300 hover:underline">Code source sur GitHub</a>
        </div>
      </footer>
    </div>
  );
}
