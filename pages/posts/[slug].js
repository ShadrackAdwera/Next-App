import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../utils/post-utils';

const Post = (props) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
      <title>{post.title}</title>
      <meta name="description" content={props.shortText} />
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
};

export default Post;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const data = getPostData(slug);
  return { props: { post: data }, revalidate: 600 };
};

export const getStaticPaths = () => {
  const fileNames = getPostFiles();
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const allPaths = slugs.map((sl) => ({ params: { slug: sl } }));
  return { paths: allPaths, fallback: false };
};
