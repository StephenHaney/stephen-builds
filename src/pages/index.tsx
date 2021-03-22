import React from 'react';
import Head from 'next/head';
import { getAllPosts } from '../utils/getPosts';
import { Post } from '../types/Post';

export default function Home({ posts }: { posts: Array<Post> }) {
  return (
    <>
      <Head>
        <title>Stephen Haney — Learnings from a developer, architect, founder, and author</title>
      </Head>

      <div style={{ margin: 'auto', maxWidth: 750, paddingBottom: 64, paddingTop: 64 }}>
        {posts.map((post) => (
          <a key={post.slug} href={post.slug}>
            {post.data?.title || post.slug}
          </a>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
