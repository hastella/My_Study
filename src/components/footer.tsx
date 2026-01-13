export default function Footer() {
  return (
    <footer className="bg-[var(--muted)] border-t border-[var(--border)] py-12">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/hastella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hastella@example.com"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 hastella. Made with ❤️ for learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
