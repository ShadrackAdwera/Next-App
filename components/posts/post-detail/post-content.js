import ReactMakdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './post-header';
import styles from './post-content.module.css';

const PostContent = props => {
  const { title, content, slug, image} = props.post;

  const customRendered = {
    // image(image) {
    //   return <Image src={`/images/posts/${slug}/${image.src}`} alt={image.alt} width={600} height={300} layout='responsive'/>
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if(node.children[0].type==='image') {
        const image = node.children[0];
        return <div className={styles.image}>
          <Image src={`/images/posts/${slug}/${image.url}`} alt={image.alt} width={600} height={300} layout='responsive'/>
        </div>
      }
      return <p>{paragraph.children}</p>
    }
  }

    return <article className={styles.content}>
        <PostHeader title={title} image={`/images/posts/${slug}/${image}`}/>
        <ReactMakdown renderers={customRendered}>
        {content}
        </ReactMakdown>
    </article>
}

export default PostContent;