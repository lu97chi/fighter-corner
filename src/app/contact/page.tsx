'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-12">
        <Image
          src="/portrait-13.jpg"
          alt="Contact Fight Club"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg 
                         focus:outline-none focus:border-[var(--primary)] text-white
                         placeholder:text-gray-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg 
                         focus:outline-none focus:border-[var(--primary)] text-white
                         placeholder:text-gray-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg 
                         focus:outline-none focus:border-[var(--primary)] text-white
                         placeholder:text-gray-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold
                       hover:bg-[var(--primary-dark)] transition-colors duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
          
          {/* Location */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="text-[var(--primary)] mr-2">📍</span>
              Location
            </h3>
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src="/portrait-14.jpg"
                alt="Map"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">
              123 Fighter Street<br />
              Downtown District<br />
              City, State 12345
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="text-[var(--primary)] mr-2">📞</span>
                Phone
              </h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="text-[var(--primary)] mr-2">✉️</span>
                Email
              </h3>
              <p className="text-gray-300">contact@fightclub.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="text-[var(--primary)] mr-2">⏰</span>
                Hours
              </h3>
              <div className="text-gray-300">
                <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                <p>Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 