"use client";

import React, { useState } from "react";
import Container from "rolnew/comp/Container";
import Title from "rolnew/section/home/Title";
import Collaspe from "./Collaspe";
import FleetFaqCat from "./FleetFaqCat";

function FAQ({ faq }) {
  const [faqCat, setFaqCat] = useState("General");

  const selectedCat =
    faq?.find((item) => item.faqCat === faqCat)?.faqData || [];

  return (
    <Container className="bg-[#081017] sm:py-[60px] py-[32px] text-center">
      <Title subTitle="Have Queries?" mainTitle="Frequently Asked Questions" />
      <FleetFaqCat categorys={faq} setFaqCat={setFaqCat} />
      {selectedCat.length > 0 && <Collaspe list={selectedCat} />}

      {/* <button className="mt-10 text-[18px] font-medium text-[#828282] pop">
        View All
      </button> */}
    </Container>
  );
}

export default FAQ;
