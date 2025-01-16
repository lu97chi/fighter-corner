'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide flex items-center justify-center md:justify-start">
              <span className="text-[var(--primary)] mr-2">🥊</span>
              Fight Club
            </h3>
            <p className="text-gray-400">Professional MMA Training & Coaching</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-300">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-[var(--primary)] transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="block text-gray-400 hover:text-[var(--primary)] transition-colors">
                Schedule Training
              </Link>
              <Link href="/newsletter" className="block text-gray-400 hover:text-[var(--primary)] transition-colors">
                Newsletter
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-[var(--primary)] transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-[var(--primary)] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-300">Contact</h3>
            <p className="text-gray-400">Email: contact@fightclub.com</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fight Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 