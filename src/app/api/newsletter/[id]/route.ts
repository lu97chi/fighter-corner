import { contentfulClient } from '@/lib/contentful';
import { NewsletterPost } from '../../../../types';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: Promise<{ id: string }>
}

export async function GET(
  _request: NextRequest,
  context: Context
): Promise<NextResponse> {
  try {
    const entry = await contentfulClient.getEntry<NewsletterPost>((await context.params).id);
    
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