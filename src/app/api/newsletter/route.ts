import { NextResponse } from 'next/server';
import { contentfulManagementClient } from '@/lib/contentful';
import { contentfulClient } from '@/lib/contentful';
import { NewsletterPost } from '@/types';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const space = await contentfulManagementClient.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment('master');
    
    await environment.createEntry('newsletterSubscriber', {
      fields: {
        email: { 'en-US': email },
        subscriptionDate: { 'en-US': new Date().toISOString() },
        status: { 'en-US': 'active' }
      }
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await contentfulClient.getEntries<NewsletterPost>({
      content_type: 'newsletterPost',
      order: ['sys.createdAt'],
    });
    
    return NextResponse.json(entries.items);
  } catch (error) {
    console.error('Error fetching newsletter posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter posts' },
      { status: 500 }
    );
  }
} 