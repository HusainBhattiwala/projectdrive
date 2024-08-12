// ServicesOffering.jsx

function ServiceOfferings({ servicesData }) {
  return (
    <div className="bg-[#11202D] text-white py-10">
      <div className={`container mx-auto px-6`}>
        <article className="mx-4 text-left">
          <h2 className="my-10 text-center text-3xl font-bold text-[#FFFFFF]">
            {servicesData?.heading.mainTitle}
          </h2>
          {servicesData?.data?.map((data, index) => (
            <div className="space-y-4 mb-8 p-6 bg-[#1A2A3A] rounded-lg" key={index}>
              <h2 className="text-xl font-semibold text-[#B2B2B2]">
                {data?.title}
              </h2>
              <ul className="list-disc list-inside text-lg text-[#B2B2B2]">
                <div className="text-lg text-[#B2B2B2]">{data?.desc}</div>
              </ul>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}

export default ServiceOfferings;
