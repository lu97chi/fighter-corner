import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fighter's Corner | Professional MMA Training",
  description: "Book personalized MMA training sessions with a professional fighter",
  manifest: "/manifest.json",
  themeColor: "#D20A0A",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0F0F]`}>
        <nav className="bg-[#1A1A1A] border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold hover:text-[var(--accent)] transition-colors tracking-tight flex items-center">
              <span className="text-[var(--primary)] mr-2">⚡</span>
              Fighter&apos;s Corner
            </Link>
            <div className="space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/schedule" className="nav-link">Schedule Training</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-12">
          {children}
        </main>
        <footer className="bg-[#1A1A1A] border-t border-gray-800 mt-16">
          <div className="container mx-auto py-12 px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg mb-4 uppercase tracking-wide flex items-center justify-center md:justify-start">
                  <span className="text-[var(--primary)] mr-2">⚡</span>
                  Fighter&apos;s Corner
                </h3>
                <p className="text-gray-400">Professional MMA Training & Coaching</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-300">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/" className="block text-gray-400 hover:text-[var(--accent)] transition-colors">Home</Link>
                  <Link href="/schedule" className="block text-gray-400 hover:text-[var(--accent)] transition-colors">Schedule Training</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 uppercase tracking-wide text-gray-300">Contact</h3>
                <p className="text-gray-400">Email: contact@fightercorner.com</p>
                <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    🐦
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                    <span className="sr-only">YouTube</span>
                    📺
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Fighter&apos;s Corner. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
