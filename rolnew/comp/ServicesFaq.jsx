import Container from 'rolnew/comp/Container';
import Title from 'rolnew/section/home/Title';
import Collaspe from './Collaspe';

function ServicesFaq({ faqData }) {
  return (
    <Container className='bg-[#081017] sm:py-[60px] py-[32px] text-center'>
      <Title subTitle='Have queries?' mainTitle={faqData?.title} />
      <Collaspe list={faqData?.data} />
    </Container>
  );
}

export default ServicesFaq;
