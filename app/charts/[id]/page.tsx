import TradingChart from "../../components/TradingChart";
import { problems } from "../../problems/index";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";

interface PageProps {
  params: { id: string };
}

export default async function Page(props: Readonly<PageProps>) {
  const { id } = await props.params;
  const problem = problems.find((c) => c.id === id);
  if (!problem) return notFound();
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-blue-950 dark:via-cyan-950 dark:to-indigo-900">
    <Navbar />
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-blue-950 dark:via-cyan-950 dark:to-indigo-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-indigo-700 dark:text-cyan-300 text-center drop-shadow-lg">{problem.name}</h1>
        <p className="mb-6 text-zinc-700 dark:text-zinc-200 text-center text-lg">{problem.description}</p>
        <div className="w-full flex flex-col items-center mb-4 gap-6">
          <TradingChart rawData={problem.data} />
          <div className="flex gap-6 mt-4">
            <button className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2">
              Acheter
            </button>
            <button className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2">
              Vendre
            </button>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}