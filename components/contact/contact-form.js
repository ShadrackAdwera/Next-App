import { useRef, useState } from 'react';

import Feedback from '../ui/notification';
import styles from './contact-form.module.css';

const ContactForm = props => {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        const data = { name, email, message };
        props.onSubmitData(data);
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    } 

    return <section className={styles.contact}>
        <h1>Send me a message</h1>
        <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' name='name' id='name' required ref={nameRef}/>
            </div>
            <div className={styles.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' name='email' id='email' required ref={emailRef}/>
            </div>
        </div>
        <div className={styles.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea name='message' id='message' rows={5} required ref={messageRef}></textarea>
        </div>
        <div className={styles.actions}>
            <button>Send Message</button>
        </div>
        </form>
    </section>
}

export default ContactForm;