import Link from 'next/link';
import Image from 'next/image';

import styles from './post-item.module.css';

const PostItem = props => {
    const { title, image, date, shortText, slug  } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day:'numeric',
        month:'long',
        year:'numeric'
    }) 

    return <li className={styles.post}>
        <Link href={`/posts/${slug}`}>
            <a>
                <div className={styles.image}>
                <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200} layout="responsive"/>
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{readableDate}</time>
                    <p>{shortText}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem;