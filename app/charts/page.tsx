
import Link from "next/link";
import Navbar from "../components/Navbar";
import { problems } from "../problems/index";
export default function ConfigurationsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-blue-950 dark:via-cyan-950 dark:to-indigo-900">
      <Navbar />
      <main className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 dark:text-indigo-100 drop-shadow-lg tracking-tight">
            Graphiques Prédéfinies
          </h1>
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
            {problems.map((problem) => (
              <li key={problem.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-indigo-700 dark:text-cyan-300 mb-1">{problem.name}</h2>
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
        </div>
      </main>
    </div>
  );
}