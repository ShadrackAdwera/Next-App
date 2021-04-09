import ReactMakdown from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-content.module.css';

const PostContent = props => {
  const { title, content, slug, image} = props.post;
    return <article className={styles.content}>
        <PostHeader title={title} image={`/images/posts/${slug}/${image}`}/>
        <ReactMakdown>
        {content}
        </ReactMakdown>
    </article>
}

export default PostContent;