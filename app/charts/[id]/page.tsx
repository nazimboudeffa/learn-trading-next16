"use client";
import { useParams, useRouter } from "next/navigation";
import TradingChart from "../../components/TradingChart";
import { useState, useRef } from "react";
// Fonction utilitaire pour calculer le résultat du trade
function getTradeResult({ entryCandle, futureData, buyClicked, sellClicked }: {
  entryCandle: unknown,
  futureData?: { close: number | string }[],
  buyClicked: boolean,
  sellClicked: boolean
}): "win" | "lose" {
  let result: "win" | "lose" = "lose";
  const entry = entryCandle as { close?: number | string } | undefined;
  const last = futureData?.at(-1);
  if (entry && last) {
    if (buyClicked && Number(last.close) > Number(entry.close)) result = "win";
    if (sellClicked && Number(last.close) < Number(entry.close)) result = "win";
  }
  return result;
}
import { problems } from "../../problems/index";
import Navbar from "../../components/Navbar";

export default function ChartPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const problem = problems.find((c) => c.id === id);
  const entryCandle = problem?.data?.at(-1);

  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);
  const [chartData, setChartData] = useState(() => problem?.data.map(d => ({
    ...d,
    open: Number(d.open),
    high: Number(d.high),
    low: Number(d.low),
    close: Number(d.close),
  })) || []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState<null | "win" | "lose">(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ajoute les candles futureData au fur et à mesure après un trade
  const startFutureDataAnimation = () => {
    if (!problem?.futureData || isPlaying) return;
    setIsPlaying(true);
    let i = 0;
    intervalRef.current = setInterval(() => {
      setChartData(prev => {
        if (i < (problem.futureData?.length ?? 0)) {
          const next = problem.futureData?.[i];
          i++;
          if (!next) return prev;
          return [
            ...prev,
            {
              ...next,
              open: Number(next.open),
              high: Number(next.high),
              low: Number(next.low),
              close: Number(next.close),
              time: String(next.time ?? ""),
            },
          ];
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsPlaying(false);
          // Calcul du résultat à la fin de l'animation
          setShowResult(getTradeResult({
            entryCandle,
            futureData: problem.futureData,
            buyClicked,
            sellClicked
          }));
          return prev;
        }
      });
    }, 1000);
  };

  if (!problem) {
    return <div>Problème non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-blue-950 dark:via-cyan-950 dark:to-indigo-900">
      <Navbar />
      <main className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-blue-950 dark:via-cyan-950 dark:to-indigo-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 md:p-8 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold mb-2 text-indigo-700 dark:text-cyan-300 text-center drop-shadow-lg">{problem.name}</h1>
          <p className="mb-6 text-zinc-700 dark:text-zinc-200 text-center text-lg">{problem.description}</p>
          <div className="w-full flex flex-col items-center mb-4 gap-4 sm:gap-6">
            <TradingChart rawData={chartData} />
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full justify-center">
              <button
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 ${buyClicked || sellClicked ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                onClick={() => {
                  setBuyClicked(true);
                  setSellClicked(false);
                  startFutureDataAnimation();
                }}
                disabled={buyClicked || sellClicked}
              >
                Acheter
              </button>
              <button
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 ${buyClicked || sellClicked ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                onClick={() => {
                  setSellClicked(true);
                  setBuyClicked(false);
                  startFutureDataAnimation();
                }}
                disabled={buyClicked || sellClicked}
              >
                Vendre
              </button>
            </div>
          </div>
          {buyClicked && entryCandle && (
            <div className="mt-6 w-full p-3 sm:p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center text-sm sm:text-base">
              <div className="font-bold text-lg mb-2">Trade à l&apos;achat</div>
              <div>Date d&apos;entrée : <b>{entryCandle.time}</b></div>
              <div>Prix d&apos;entrée : <b>{entryCandle.close}</b></div>
              <div>Type : <b>Achat (Long)</b></div>
            </div>
          )}
          {sellClicked && entryCandle && (
            <div className="mt-6 w-full p-3 sm:p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-center text-sm sm:text-base">
              <div className="font-bold text-lg mb-2">Trade à la vente</div>
              <div>Date d&apos;entrée : <b>{entryCandle.time}</b></div>
              <div>Prix d&apos;entrée : <b>{entryCandle.close}</b></div>
              <div>Type : <b>Vente (Short)</b></div>
            </div>
          )}

          {/* Toast résultat centré avec overlay flou */}
          {showResult && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-2">
              {/* Overlay flou */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
              {/* Modal résultat */}
              <div className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-8 py-6 rounded-xl shadow-2xl text-white text-base sm:text-lg font-bold flex flex-col items-center ${showResult === "win" ? "bg-green-600" : "bg-red-600"}`}>
                {/* Bouton croix fermer */}
                <button
                  className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-200 focus:outline-none"
                  aria-label="Fermer"
                  onClick={() => setShowResult(null)}
                  style={{ lineHeight: 1 }}
                >
                  ×
                </button>
                {showResult === "win" ? "Vous avez gagné !" : "Vous avez perdu."}
                <div className="flex gap-4 mt-6 justify-center">
                  <button
                    className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                    onClick={() => {
                      // Reset tout
                      setBuyClicked(false);
                      setSellClicked(false);
                      setShowResult(null);
                      setChartData(problem.data.map(d => ({
                        ...d,
                        open: Number(d.open),
                        high: Number(d.high),
                        low: Number(d.low),
                        close: Number(d.close),
                      })));
                    }}
                  >
                    Réinitialiser
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white font-semibold"
                    onClick={() => router.push("/charts")}
                  >
                    Retour à la liste
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}