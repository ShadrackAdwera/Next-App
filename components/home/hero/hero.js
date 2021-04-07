import styles from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
return <section className={styles.hero}>
    <div className={styles.image}>
    <Image src='/images/site/logo.png' alt='Image' width={300} height={300}/>
    </div>
    <h1>Hi, I'm Pennywise</h1>
    <p>I blog about everything JavaScript</p>
</section>
}

export default Hero;