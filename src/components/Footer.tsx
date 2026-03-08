import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="container-page flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm muted">
          © 2026 Yassine Larbi — Tous droits réservés
        </p>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="https://www.linkedin.com/in/yassine--larbi"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/yassinelarbi"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
