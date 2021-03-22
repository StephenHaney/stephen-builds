import React from 'react';
import { GetStaticProps } from 'next';
import { Post } from '../../types/Post';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '../../utils/getPosts';

export default function BlogPost({ data, source, slug }: Post) {
  if (!source) {
    return null;
  }

  const content = hydrate(source);

  return (
    <>
      <Head>
        <title>{data?.title} — Stephen Haney</title>
      </Head>

      <div style={{ margin: 'auto', maxWidth: 750, paddingBottom: 64, paddingTop: 64 }}>{content}</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params && typeof context.params.slug === 'string') {
    const { data, content, slug } = getPostBySlug(context.params.slug);

    const mdxContent = await renderToString(content);

    return { props: { data, source: mdxContent, slug } };
  }

  return { props: {} };
};

export async function getStaticPaths() {
  const docs = getAllPosts();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
