export type PostMeta = {
  title: string;
  publishedDate?: string;
  draft?: boolean;
  readingTime?: { text: string; minutes: number; time: number; words: number };
};
export type Post = {
  data?: PostMeta;
  source?: any;
  slug: any;
};
