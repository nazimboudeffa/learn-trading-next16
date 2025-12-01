import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-indigo-700 dark:text-cyan-300 tracking-tight">
          Apprendre le Trading
        </Link>
        <div className="flex gap-6">
          <Link href="/configurations" className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Configurations
          </Link>
        </div>
      </div>
    </nav>
  );
}
