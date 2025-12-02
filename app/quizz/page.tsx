
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ChallengesIndex() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-cyan-300 mb-8">Challenges Chartistes</h1>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Veuillez trouver ci-dessous les sources de quelques graphiques utilisés dans les quizz.
        </p>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            Aucune explication n&apos;est donnée dans les quizz relatifs pour respecter les droits d&apos;auteur des livres et vous inciter à les lire, merci de votre compréhension.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
          <a
            href="https://amzn.eu/d/hfZs5IN"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition"
            title="Trading Classic Chart Patterns, Thomas N. Bulkowski (Amazon)"
          >
            <img
              src="/bibliographie/516Jbi4nVkL._SY466_.jpg"
              alt="Trading Classic Chart Patterns, Thomas N. Bulkowski"
              className="w-32 h-auto rounded shadow border border-zinc-200 dark:border-zinc-700"
            />
          </a>
          <a
            href="https://amzn.eu/d/jbQJFQh"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition"
            title="Le chartisme, François Baron (Amazon)"
          >
            <img
              src="/bibliographie/51jYIidKgRL._SY342_.jpg"
              alt="Le chartisme, François Baron"
              className="w-32 h-auto rounded shadow border border-zinc-200 dark:border-zinc-700"
            />
          </a>
        </div>
        <p className="text-center text-lg text-zinc-700 dark:text-zinc-200 mb-10 max-w-2xl mx-auto">
          Teste ta reconnaissance des figures chartistes à travers des exercices interactifs&nbsp;!
        </p>
        <ul className="max-w-xl mx-auto flex flex-col gap-6">
          <li className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-cyan-300 mb-1">Triangle Symétrique</h2>
              <p className="text-zinc-700 dark:text-zinc-200">Identifie la figure sur le graphique et réponds au quiz&nbsp;!</p>
            </div>
            <Link href="/quizz/triangle-symetrique" className="mt-4 sm:mt-0 sm:ml-6 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Commencer</Link>
          </li>
          <li className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-cyan-300 mb-1">Double Top</h2>
              <p className="text-zinc-700 dark:text-zinc-200">Repère le double sommet et valide ta réponse.</p>
            </div>
            <Link href="/quizz/double-top" className="mt-4 sm:mt-0 sm:ml-6 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Commencer</Link>
          </li>
          <li className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-cyan-300 mb-1">Épaule-Tête-Épaule</h2>
              <p className="text-zinc-700 dark:text-zinc-200">Analyse la figure et réponds au challenge interactif.</p>
            </div>
            <Link href="/quizz/ete" className="mt-4 sm:mt-0 sm:ml-6 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Commencer</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
