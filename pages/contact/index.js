import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';

import Notification from '../../components/ui/notification';
import ContactForm from '../../components/contact/contact-form';

const ContactPage = () => {
  let notification;
  const [requestStatus, setRequestStatus] = useState();

  useEffect(()=>{
    if(requestStatus==='success' || requestStatus==='error') {
        const timer = setTimeout(()=>{
            setRequestStatus();
          },3000);
          return () => clearTimeout(timer);
    }
  }, [requestStatus])

  const onSubmitData = async (data) => {
    setRequestStatus('pending');
    try {
      const response = await fetch('/api/contact', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        method: 'POST',
      });
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || 'An error occured');
      }
      setRequestStatus('success');
    } catch (error) {
      setRequestStatus('error');
    }
  };

  if (requestStatus === 'pending') {
    notification = {
      title: 'Sending Message...',
      message: 'Your message is being sent...',
      status: 'pending',
    };
  } else if (requestStatus === 'success') {
    notification = {
      title: 'Success',
      message: 'Your message was sent successfully...',
      status: 'success',
    };
  } else if (requestStatus === 'error'){
    notification = {
      title: 'Error',
      message: 'Unable to send your message...',
      status: 'error',
    };
  } else {
     notification = undefined;
  }

  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Hit me up" />
      </Head>
      <ContactForm onSubmitData={onSubmitData} />
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Fragment>
  );
};

export default ContactPage;
