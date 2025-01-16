import { Entry, EntrySkeletonType } from 'contentful';

interface ContentfulFile {
  url: string;
}

interface ContentfulFields {
  file: ContentfulFile;
}

interface ContentfulImage {
  fields: ContentfulFields;
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
  monday: string[];
  tuesday: string[];
}

export interface NewsletterPost extends EntrySkeletonType {
  contentTypeId: 'newsletterPost';
  fields: {
    title: string;
    publishDate: string;
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