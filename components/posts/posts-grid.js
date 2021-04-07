import PostItem from './post-item';
import styles from './posts-grid.module.css';

const PostGrid = (props) => {
    const {posts} = props;
    return <ul className={styles.grid}>
        {posts.map(post=>
            <PostItem />)}
    </ul>
}

export default PostGrid;