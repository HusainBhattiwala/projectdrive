// ServicesOffering.jsx

function ServiceOfferings({ servicesData }) {
  return (
    <div className="bg-[#11202D] text-white py-10">
      <div className={`container px-6`}>
        <article className="sm:mx-4 mx-0 text-left">
          <h2 className="my-10 text-center text-3xl font-bold text-[#FFFFFF]">
            {servicesData?.heading.mainTitle}
          </h2>
          {servicesData?.data?.map((data, index) => (
            <div className="space-y-4 mb-8 sm:p-6 p-4 bg-[#1A2A3A] rounded-lg" key={index}>
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
