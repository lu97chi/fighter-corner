import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMA Fighter Portfolio",
  description: "Professional MMA Fighter Portfolio and Training Booking Site",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100`}>
        <nav className="bg-black text-white sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
              Fighter&apos;s Corner
            </Link>
            <div className="space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/schedule" className="nav-link">Schedule Training</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-black text-white mt-16">
          <div className="container mx-auto py-8 px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg mb-4">Fighter&apos;s Corner</h3>
                <p className="text-gray-400">Professional MMA Training & Coaching</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                  <Link href="/schedule" className="block text-gray-400 hover:text-white transition-colors">Schedule Training</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <p className="text-gray-400">Email: contact@fightercorner.com</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Fighter&apos;s Corner. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
