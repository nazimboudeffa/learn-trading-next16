
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Motivational Hero Section */}
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
        <Link
          href="/configurations"
          className="relative z-10 inline-block rounded-full bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 px-10 py-5 text-2xl font-bold text-white shadow-xl transition hover:scale-105 hover:from-indigo-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
        >
          Explorer les configurations
        </Link>
      </section>
    </main>
  );
}
