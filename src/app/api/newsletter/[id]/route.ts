import { contentfulClient } from '@/lib/contentful';
import { NewsletterPost } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const entry = await contentfulClient.getEntry<NewsletterPost>(params.id);
    
    if (!entry) {
      return NextResponse.json(
        { error: 'Newsletter post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error fetching newsletter post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter post' },
      { status: 500 }
    );
  }
} 