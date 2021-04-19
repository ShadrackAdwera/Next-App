import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '../components/home/hero/hero';
import FeaturedPosts from '../components/home/featured-posts/featured-posts';
import { getFeaturedPosts } from '../utils/post-utils';

export default function Home(props) { 
  const { featuredPosts } = props;
  return (
    <Fragment>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Programming Blogs" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
}

export const getStaticProps = () => {
  const featured = getFeaturedPosts();
  return { props: { featuredPosts: featured }, revalidate: 60 };
} 
