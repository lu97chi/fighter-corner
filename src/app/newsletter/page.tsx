'use client';

import { useEffect, useState } from 'react';
import { ContentfulNewsletterPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsletterIndex() {
  const [posts, setPosts] = useState<ContentfulNewsletterPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/newsletter');
        if (!response.ok) throw new Error('Failed to fetch newsletter posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="p-12 text-center">Loading...</div>;
  if (error) return <div className="p-12 text-center text-red-500">{error}</div>;
  if (!posts.length) return <div className="p-12 text-center">No newsletters found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Fight Club Newsletter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.sys.id} 
            href={`/newsletter/${post.sys.id}`}
            className="group"
          >
            <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors">
              {post.fields.heroImage?.fields?.file?.url && (
                <div className="relative h-48">
                  <Image
                    src={post.fields.heroImage.fields.file.url}
                    alt={post.fields.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {post.fields.title}
                </h2>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-4">📅 {new Date(post.fields.publishDate).toLocaleDateString()}</span>
                  <span>⏱️ {post.fields.readTime} read</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 