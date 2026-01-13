"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <nav className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span className="text-2xl">📚</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Study Notes
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            홈
          </Link>
          <Link
            href="/blog"
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            블로그
          </Link>
          <Link
            href="/categories"
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            카테고리
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
            aria-label="테마 전환"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
