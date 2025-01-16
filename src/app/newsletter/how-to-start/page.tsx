'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ContentfulNewsletterPost } from '@/types';

export default function HowToStart() {
  const [post, setPost] = useState<ContentfulNewsletterPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/api/newsletter/1');
        if (!response.ok) throw new Error('Failed to fetch newsletter post');
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) return <div className="p-12 text-center">Loading...</div>;
  if (error) return <div className="p-12 text-center text-red-500">{error}</div>;
  if (!post?.fields) return <div className="p-12 text-center">No content found</div>;

  const { fields } = post;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-12">
        {fields.heroImage?.fields?.file?.url && (
          <Image
            src={fields.heroImage.fields.file.url}
            alt={fields.title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {fields.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-invert mx-auto">
        <div className="text-gray-400 mb-8 flex items-center">
          <span className="mr-4">📅 Published: {new Date(fields.publishDate).toLocaleDateString()}</span>
          <span>⏱️ {fields.readTime} read</span>
        </div>

        {fields.content.content.map((section, index) => (
          <div key={index}>
            {section.content.map((content, i) => (
              <p key={i}>{content.value}</p>
            ))}
          </div>
        ))}

        {fields.equipment && fields.focusAreas && (
          <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-[var(--primary)] mr-3">1</span>
                Basic Equipment
              </h3>
              <ul className="space-y-2 text-gray-300">
                {fields.equipment.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-[var(--primary)] mr-3">2</span>
                Initial Focus Areas
              </h3>
              <ul className="space-y-2 text-gray-300">
                {fields.focusAreas.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {fields.schedule && (
          <>
            <h2>Training Schedule</h2>
            <div className="bg-gray-800 rounded-xl p-6 my-8 not-prose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Monday</h4>
                  <ul className="space-y-2 text-gray-300">
                    {fields.schedule.monday.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">Tuesday</h4>
                  <ul className="space-y-2 text-gray-300">
                    {fields.schedule.tuesday.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {fields.nutritionTips && (
          <>
            <h2>Nutrition Tips</h2>
            <ul>
              {fields.nutritionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </>
        )}

        <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl p-6 my-8">
          <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-gray-300">
            Book your first training session and begin your MMA journey today.
            Our experienced coaches will guide you every step of the way.
          </p>
          <a 
            href="/schedule"
            className="inline-block mt-4 px-6 py-3 bg-[var(--primary)] text-white rounded-lg
                     hover:bg-[var(--primary-dark)] transition-colors duration-300"
          >
            Schedule Training
          </a>
        </div>
      </div>
    </article>
  );
} 