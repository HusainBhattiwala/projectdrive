import React from 'react';
import Container from 'rolnew/comp/Container';
import Title from 'rolnew/section/home/Title';
import Category from './Category';
import Collaspe from './Collaspe';

const faqCategoryList = [
  {
    id: 1,
    category: 'Booking',
  },
  {
    id: 2,
    category: 'Cancellation',
  },
  {
    id: 3,
    category: 'Vehicles',
  },
  {
    id: 4,
    category: 'Payment',
  },
  {
    id: 5,
    category: 'Chauffeur',
  },
  {
    id: 6,
    category: 'Airport Related',
  },
];
const collapseFaq = [
  {
    id: 'faq1',
    title: 'How to book a RolDrive chauffeur?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
  {
    id: 'faq2',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
  {
    id: 'faq3',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
  {
    id: 'faq4',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
  {
    id: 'faq5',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
  {
    id: 'faq6',
    title: 'When will I receive my chauffeur and vehicle details?',
    desc: "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com",
  },
];

function FAQ() {
  return (
    <Container className="bg-[#081017] sm:py-[60px] py-[32px] text-center">
      <Title subTile="Have queries?" mainTitle="Frequent Asked Questions" />
      <Category categorys={faqCategoryList} />
      <Collaspe list={collapseFaq} />
    </Container>
  );
}

export default FAQ;
