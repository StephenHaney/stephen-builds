import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { PostMeta } from '../types/Post';

const ROOT_PATH = process.cwd();
export const POSTS_PATH = path.join(ROOT_PATH, 'src/blog');

/** Run in node — the list of all mdx files inside the `POSTS_PATH` directory */
export const postFilePaths = fs.readdirSync(POSTS_PATH);

/** Run in node — the front matter and content of all mdx files based on `postFilePaths` */
export const getAllPosts = () => {
  return postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8');
      const { data, content } = matter(source);

      return {
        data: {
          ...(data as PostMeta),
          wordCount: content.split(/\s+/g).length,
          readingTime: readingTime(content),
        },
        content,
        slug: filePath.replace('.mdx', ''),
      };
    })
    .sort((a, b) => Number(new Date(b.data.publishedDate || 0)) - Number(new Date(a.data.publishedDate ?? 0)));
};

export const getPostBySlug = (slug: string) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    data: {
      ...data,
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
    },
    content,
    slug,
  };
};
