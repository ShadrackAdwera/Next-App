import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../utils/post-utils';

const Posts = (props) => {
  const { posts } = props;
return <AllPosts posts={posts}/>
}

export default Posts;

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts }, revalidate: 60 }
}