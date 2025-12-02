"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-indigo-700 dark:text-cyan-300 tracking-tight leading-tight mb-0">
          Apprendre le Trading
        </Link>
        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link href="/charts" className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Graphiques Historiques
          </Link>
          <Link href="/quizz" className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition">
            Quizz Chartistes
          </Link>
          <a href="https://fr.tipeee.com/nazimboudeffa" target="_blank" rel="noopener noreferrer" title="Soutenir sur Tipeee" className="ml-2 flex items-center">
            <img src="/tipeee_tip_btn.svg" alt="Tipeee" width={32} height={32} className="inline-block align-middle" />
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center px-2 py-1 text-2xl text-indigo-700 dark:text-cyan-300 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-4 pb-4 pt-2 flex flex-col gap-3 animate-fade-in-down">
          <Link
            href="/charts"
            className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >
            Graphiques Historiques
          </Link>
          <Link
            href="/quizz"
            className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >
            Quizz Chartistes
          </Link>
          <a
            href="https://fr.tipeee.com/nazimboudeffa"
            target="_blank"
            rel="noopener noreferrer"
            title="Soutenir sur Tipeee"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <img src="/tipeee_tip_btn.svg" alt="Tipeee" width={32} height={32} className="inline-block align-middle" />
            <span className="ml-2 text-base font-medium text-pink-600">Merci!</span>
          </a>
        </div>
      )}
    </nav>
  );
}
