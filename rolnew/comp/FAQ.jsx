"use client";

import React, { useEffect, useState } from "react";
import Container from "rolnew/comp/Container";
import Title from "rolnew/section/home/Title";
import Collaspe from "./Collaspe";
import api from "components/utils/api";
import Category from "rolnew/section/home/Category";

function FAQ() {
  const [faq, setFaq] = useState();
  const [faqCat, setFaqCat] = useState("General");

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await api.get("/faq");
        // console.log("faq res:", response?.data);
        setFaq(response?.data);
        console.log(faq);
      } catch (error) {
        console.error("Error fetching FAQS:", error);
      }
    };

    fetchFaqs();
  }, []);

  const selectedCat = faq?.filter(
    (faq) => faq.category === (faqCat ? faqCat : "General")
  );
  console.log("selectCat:", selectedCat);

  return (
    <Container className='bg-[#081017] sm:py-[60px] py-[32px] text-center'>
      <Title subTile='Have queries?' mainTitle='Frequent Asked Questions' />
      <Category categorys={faq} setFaqCat={setFaqCat} />
      {selectedCat && selectedCat.length > 0 && <Collaspe list={selectedCat} />}
    </Container>
  );
}

export default FAQ;
