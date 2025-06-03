import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-color2   border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo / Nom */}
       

        {/* Lien contact */}
        <div className="mb-4">
          <Link href="/Contact" className="text-xl text-secondary hover:text-blue-600 hover:underline">
         Contacter Nous 
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.005 3.663 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.337 21.128 22 17.005 22 12z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6.011c-.793.352-1.645.59-2.538.697a4.477 4.477 0 001.963-2.465 8.948 8.948 0 01-2.83 1.082 4.467 4.467 0 00-7.61 4.073 12.676 12.676 0 01-9.21-4.668 4.468 4.468 0 001.383 5.964A4.44 4.44 0 012 10.06v.056a4.47 4.47 0 003.582 4.377 4.473 4.473 0 01-2.016.077 4.47 4.47 0 004.17 3.1A8.959 8.959 0 012 19.54a12.637 12.637 0 006.84 2.002c8.208 0 12.693-6.8 12.693-12.693 0-.193-.005-.386-.014-.577a9.063 9.063 0 002.238-2.3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-secondary">" LocaTunisie © 2025"</p>
      </div>
    </footer>
  );
}
