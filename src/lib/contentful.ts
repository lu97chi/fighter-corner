import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID environment variable is not defined');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN environment variable is not defined');
}

if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error('CONTENTFUL_MANAGEMENT_TOKEN environment variable is not defined');
}

// Client for fetching content
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Client for managing content (creating subscribers, etc.)
export const contentfulManagementClient = createManagementClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export interface NewsletterPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  featuredImage: {
    url: string;
    title: string;
  } | null;
}

// interface ContentfulNewsletterFields {
//   title: { 'en-US': string };
//   slug: { 'en-US': string };
//   excerpt: { 'en-US': string };
//   content: { 'en-US': string };
//   publishDate: { 'en-US': string };
//   featuredImage?: {
//     fields: {
//       url: { 'en-US': string };
//       title: { 'en-US': string };
//     };
//   };
// }

// interface ContentfulNewsletterPost extends EntrySkeletonType {
//   contentTypeId: 'newsletterPost';
//   fields: ContentfulNewsletterFields;
// }

export async function getNewsletterPosts(limit = 3): Promise<NewsletterPost[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'newsletterPost',
    order: ['-sys.createdAt'],
    limit,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.items.map((item: any) => {
    const { fields } = item;
    return {
      title: fields.title['en-US'],
      slug: fields.slug['en-US'],
      excerpt: fields.excerpt['en-US'],
      content: fields.content['en-US'],
      publishDate: fields.publishDate['en-US'],
      featuredImage: fields.featuredImage ? {
        url: fields.featuredImage.fields.url['en-US'],
        title: fields.featuredImage.fields.title['en-US']
      } : null,
    };
  });
} 