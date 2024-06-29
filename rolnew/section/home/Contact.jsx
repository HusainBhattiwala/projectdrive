import React from 'react';
import Container from 'rolnew/comp/Container';
import Title from './Title';
import ContactDetails from './ContactDetails';

function Contact() {
  return (
    <Container className='bg-[#081017] sm:py-[100px] py-8 text-center'>
      <Title
        subTitle='Let’s get in touch!'
        mainTitle='Contact us for quick and friendly support.'
      />
      <ContactDetails />
    </Container>
  );
}

export default Contact;
