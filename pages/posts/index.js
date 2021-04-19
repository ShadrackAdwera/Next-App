import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../utils/post-utils';

const Posts = (props) => {
  const { posts } = props;
return <Fragment>
  <Head>
  <title>All Blog Posts</title>
  <meta name="description" content="Web blog posts" />
  </Head>
<AllPosts posts={posts}/>
</Fragment>  
}

export default Posts;

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts }, revalidate: 60 }
}