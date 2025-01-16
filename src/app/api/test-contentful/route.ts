import { contentfulClient } from '@/lib/contentful';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch all entries of type 'newsletterPost'
    const entries = await contentfulClient.getEntries({
      content_type: 'newsletterPost',
      limit: 1,
    });
    
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from Contentful' },
      { status: 500 }
    );
  }
} 