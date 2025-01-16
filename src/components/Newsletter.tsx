'use client';

import { useState } from 'react';

interface NewsletterProps {
  onSubscribe: (email: string) => Promise<void>;
}

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus('loading');
      await onSubscribe(email);
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-[var(--primary)] opacity-10"></div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Fight Club Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Get exclusive training tips, event updates, and special offers delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg 
                     focus:outline-none focus:border-[var(--accent)] text-white
                     placeholder:text-gray-500"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold
                     hover:bg-[var(--primary-dark)] transition-colors duration-300
                     uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`text-sm mt-4 ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
        <p className="text-gray-500 text-sm mt-4">
          No spam ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
} 