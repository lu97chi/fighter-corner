import Link from "next/link";

export default function Home() {
  // Mock data for Bible verse
  const verse = {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13"
  };

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to Fighter&apos;s Corner</h1>
          <p className="text-xl mb-8 text-gray-300">Professional MMA Fighter & Training Coach</p>
          <Link href="/schedule" className="hero-button">
            Book Training Session
          </Link>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="card p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-3">✨</span>
          Daily Inspiration
        </h2>
        <div className="text-center">
          <p className="text-xl italic mb-3 text-gray-700">&ldquo;{verse.text}&rdquo;</p>
          <p className="text-gray-500">{verse.reference}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="card p-8 group">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-3 group-hover:rotate-12 transition-transform">🥊</span>
            Professional Training
          </h3>
          <p className="text-gray-600">
            Get personalized MMA training from a professional fighter. Perfect for all skill levels.
          </p>
        </div>
        <div className="card p-8 group">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-3 group-hover:rotate-12 transition-transform">📅</span>
            Flexible Schedule
          </h3>
          <p className="text-gray-600">
            Book training sessions at your convenience with our easy-to-use scheduling system.
          </p>
        </div>
      </section>
    </div>
  );
}
