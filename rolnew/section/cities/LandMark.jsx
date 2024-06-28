/* eslint-disable react/no-danger */
import Container from 'rolnew/comp/Container';
import Title from 'rolnew/comp/Title';
import Pic from 'rolnew/util/Pic';

export default function Landmark({ pageData }) {
  return (
    <div>
      {
      pageData
        && (
          <Container className="bg-[#223544] text-white py-[80px] text-center">
            <Title subTile={pageData?.title1?.subTile} mainTitle={pageData?.title1?.mainTitle} description={pageData?.title1?.description} descClass="text-center py-11" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-4">
              {
              pageData?.landMarks && pageData?.landMarks?.map((item) => (
                <div className="col-span-1 rounded-b-xl rounded-t-xl h-full bg-[#E5EAFA] bg-opacity-10">
                  <div className="w-full h-[180px] relative">
                    <Pic src={item?.src} className="rounded-t-xl" alt={item?.src} objectFit="cover" />
                  </div>
                  <div className="px-[30px] py-6 text-left">
                    <h3 className="text-[#BBBCC0] font-medium text-lg leading-7">{item?.title}</h3>
                    <p className="text-[#95979B] text-sm font-normal leading-5">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))
              }
            </div>
            <div className="mt-8">
              <Title subTile={pageData?.touristAttraction?.subTile} mainTitle={pageData?.touristAttraction?.title} />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-6 px-[40px] gap-x-4 gap-y-6">
              {pageData?.touristAttraction?.list && pageData?.touristAttraction?.list.map((item) => (
                <div className="col-span-1 bg-[#223544] rounded flex" key={item.id}>
                  <div className="w-[128px] h-[114px] flex-none">
                    <Pic src={item.src} alt="" objectFit="cover" className="rounded-lg" />
                  </div>
                  <div className="py-3 px-4 text-left">
                    <h3 className="text-[#BBBCC0] font-medium text-xl">{item.title}</h3>
                    <p className="text-[#95979B] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </Container>
        )
      }
    </div>

  );
}
