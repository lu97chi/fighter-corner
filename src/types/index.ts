import { Entry, EntrySkeletonType } from 'contentful';

interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ContentNode {
  value: string;
  nodeType: string;
}

interface ContentSection {
  nodeType: string;
  content: ContentNode[];
}

interface ContentDocument {
  content: ContentSection[];
}

interface Schedule {
  monday: Array<string>;
  tuesday: Array<string>;
}

export interface NewsletterPost extends EntrySkeletonType {
  contentTypeId: 'newsletterPost';
  fields: {
    title: string;
    publishDate?: string;
    readTime: string;
    heroImage: ContentfulImage;
    content: ContentDocument;
    equipment?: string[];
    focusAreas?: string[];
    schedule?: Schedule;
    nutritionTips?: string[];
  }
}

export type ContentfulNewsletterPost = Entry<NewsletterPost>; 