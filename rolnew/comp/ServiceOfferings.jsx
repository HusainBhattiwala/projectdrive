function ServiceOfferings({ servicesData }) {
  return (
    <div className="bg-[#11202D] text-black py-2 pb-10">
      <div className="container mx-auto px-6">
        <article className="sm:mx-10 sm:px-4 sm:text-left">
          <h2 className="my-10 sm:text-center sm:my-14 text-lg font-bold sm:text-3xl text-[#FFFFFF]">
            {servicesData?.heading.mainTitle}
          </h2>
          {servicesData?.data?.map((data, index) => (
            <div className="space-y-2" key={index}>
              <h2 className="mt-5 sm:mt-10 sm:text-xl text-lg font-medium text-[#B2B2B2]">
                {data?.title}
              </h2>
              <div className="text-lg text-[#B2B2B2]">{data?.desc}</div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}

export default ServiceOfferings;
