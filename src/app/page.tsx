'use client';

import Link from "next/link";
import { useState } from "react";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  
  const verse = {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13"
  };

  const handleNewsletterSubscribe = async (email: string) => {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section with Video/Image Background */}
      <section className="relative h-[80vh] -mt-12 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {!videoError ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("/hero-fallback.jpg")'
            }}
          />
        )}
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Train Like a Champion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional MMA Training & Coaching for All Skill Levels
          </p>
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
          <p className="text-xl italic mb-3 text-gray-300">&ldquo;{verse.text}&rdquo;</p>
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
          <p className="text-gray-400">
            Get personalized MMA training from a professional fighter. Perfect for all skill levels.
          </p>
        </div>
        <div className="card p-8 group">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-3 group-hover:rotate-12 transition-transform">📅</span>
            Flexible Schedule
          </h3>
          <p className="text-gray-400">
            Book training sessions at your convenience with our easy-to-use scheduling system.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter onSubscribe={handleNewsletterSubscribe} />
    </div>
  );
}
