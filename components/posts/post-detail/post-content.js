import ReactMakdown from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-content.module.css';

const DUMMY_POST = {
    title: 'Why Nextjs over React.js',
    image: 'getting-started-nextjs.png',
    date: '2021-04-04',
    content:
      '[I am an inline-style link to this post](https://www.google.com)',
    slug: 'why-nextjs-over-reactjs'
  }

const PostContent = props => {
    return <article className={styles.content}>
        <PostHeader title={DUMMY_POST.title} image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}/>
        <ReactMakdown>
        {DUMMY_POST.content}
        </ReactMakdown>
    </article>
}

export default PostContent;