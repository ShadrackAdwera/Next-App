import PostItem from './post-item';
import styles from './posts-grid.module.css';

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          date={post.date}
          shortText={post.shortText}
          slug={post.slug}
        />
      ))}
    </ul>
  );
};

export default PostGrid;
