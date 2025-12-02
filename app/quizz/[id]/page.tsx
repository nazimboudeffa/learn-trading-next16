
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { chartistQuizz } from "../quizz";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function ChallengePage() {
	const { id } = useParams<{ id: string }>();
	const quizz = chartistQuizz.find(c => c.id === id);
	const [answer, setAnswer] = useState<string | null>(null);
	const [showResult, setShowResult] = useState(false);
	if (!quizz) return <div className="p-8 text-center text-red-600">Challenge introuvable</div>;
	return (
		<>
			<Navbar />
			<div className="w-full max-w-3xl mx-auto mt-4 mb-2 px-2">
				<Link href="/quizz" className="inline-flex items-center text-indigo-600 dark:text-cyan-300 hover:underline text-sm font-medium">
					<svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="mr-1"><path d="M12 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
					Retour
				</Link>
			</div>
			<div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 flex flex-col items-center">
				<h1 className="text-3xl font-extrabold text-indigo-700 dark:text-cyan-300 mb-4">{quizz.title}</h1>
				<p className="mb-6 text-zinc-700 dark:text-zinc-200 text-center max-w-xl">{quizz.description}</p>
				<div className="mb-8">
					<Image src={quizz.image} alt={quizz.title} width={480} height={320} className="rounded-lg shadow border border-zinc-200 dark:border-zinc-700 bg-white" style={{maxWidth: 480, height: "auto"}} />
				</div>
				<div className="w-full max-w-xs flex flex-col gap-4">
					<label htmlFor="challenge-select" className="font-semibold">{quizz.question}</label>
					<select
						id="challenge-select"
						className="rounded border border-indigo-400 dark:border-cyan-400 px-4 py-3 text-base bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 shadow-sm transition"
						value={answer ?? ''}
						onChange={e => {
							setAnswer(e.target.value);
							if (e.target.value) setShowResult(true);
							else setShowResult(false);
						}}
						required
					>
						<option value="" disabled className="text-zinc-400 dark:text-zinc-500">Choisir…</option>
						{quizz.options.map(opt => (
							<option
								key={opt.value}
								value={opt.value}
								className="text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900"
							>
								{opt.label}
							</option>
						))}
					</select>
				</div>
				{showResult && (
					<div className={`mt-6 px-6 py-4 rounded-lg shadow text-white font-bold text-lg ${answer === quizz.answer ? "bg-green-600" : "bg-red-600"}`}>
						{answer === quizz.answer ? "Bravo, bonne réponse !" : "Ce n'est pas la bonne réponse, réessaie !"}
					</div>
				)}
			</div>
		</>
	);
}
