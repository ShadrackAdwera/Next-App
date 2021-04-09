import ContactForm from '../../components/contact/contact-form';

const ContactPage = () => {

    const onSubmitData = async(data) => {
        try {
            const response = await fetch('/api/contact', {
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data),
                method: 'POST'
            });
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            const resData = await response.json();
            alert(resData.message);
            } catch (error) {
                console.log(error.message || 'An error occured');
            }
    }

    return <ContactForm onSubmitData={onSubmitData}/>
}

export default ContactPage;