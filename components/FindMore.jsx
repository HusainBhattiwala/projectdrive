/* eslint-disable react/no-array-index-key */
export default function FindMoreComponent({ findMoreData }) {
  //const items = new Array(24).fill('Name');

  return (
    <div className="bg-[#11202D] text-black py-12">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-center text-3xl font-bold mb-8">Find More</h2>
        <div className="grid grid-cols-4 gap-4 border-b pb-10">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-lg">{item}</p>
            </div>
          ))}
          <div className="col-span-4">
            <hr className="border-t border-gray-300 my-6" />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className="text-center">
              <p className="text-lg">{item}</p>
            </div>
          ))}
          <div className="col-span-4">
            <hr className="border-t border-gray-300 my-6" />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className="text-center">
              <p className="text-lg">{item}</p>
            </div>
          ))}
          <div className="col-span-4 mx-4">
            <hr className="border-t border-gray-300 my-6 mx-6 px-8" />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className="text-center">
              <p className="text-lg">{item}</p>
            </div>
          ))}
          <div className="col-span-4 mx-4">
            <hr className="border-t border-gray-300 my-6 mx-6 px-8" />
          </div>
          {items.map((item, index) => (
            <div key={`second-set-${index}`} className="text-center">
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div> */}

        <article className="sm:mt-4 sm:mx-10 sm:px-4 sm:text-left">
          <h2 className="sm:text-center sm:my-10 text-lg font-bold sm:text-3xl text-[#FFFFFF]">
            More about RolDrive’s Luxury Personal Chauffeur Services
          </h2>
          {findMoreData?.map((data, index) => (
            <div className="space-y-2" key={index}>
              <h3 className="mt-5 sm:mt-10 sm:text-xl text-lg font-medium text-[#B2B2B2]">
                {data?.title}
              </h3>
              <p className="text-sm text-[#B2B2B2]">{data?.desc}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
