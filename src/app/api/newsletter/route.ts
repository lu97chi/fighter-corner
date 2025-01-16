import { NextResponse } from 'next/server';
import { contentfulManagementClient } from '@/lib/contentful';

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