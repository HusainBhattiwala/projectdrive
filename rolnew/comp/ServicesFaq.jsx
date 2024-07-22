import Container from "rolnew/comp/Container";
import Title from "rolnew/section/home/Title";
import Collaspe from "./Collaspe";

function ServicesFaq({ faqData }) {
  return (
    <Container className="bg-[#081017] sm:py-[60px] py-[32px] text-center">
      <Title subTitle="Have queries?" mainTitle={faqData?.title} />
      <Collaspe list={faqData?.data} />

      {/* <button className="mt-10 text-[18px] font-medium text-[#828282] pop">
        View All
      </button> */}
    </Container>
  );
}

export default ServicesFaq;
