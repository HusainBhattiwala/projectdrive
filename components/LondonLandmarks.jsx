import Container from 'rolnew/comp/Container';
import Title from 'rolnew/comp/Title';
import Pic from 'rolnew/util/Pic';

export default function LondonLandmarks() {
  return (
    <Container className='bg-[#223544] text-white py-[80px] text-center'>
      <Title
        subTitle='Tailored Chauffeur Services'
        mainTitle='London Landmarks'
        description='These attractions can be busy and difficult to navigate, especially during peak tourist season. By hiring a chauffeur service such as a Mercedes Sprinter hire in London, tourists can sit back and relax while their experienced driver navigates through the busy city streets, making their way to each attraction without the added stress of finding a parking spot or figuring out public transportation.'
        descClass='text-center py-11'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-4'>
        <div className='col-span-1 rounded-b-xl rounded-t-xl h-full'>
          <div className='bg-[#E5EAFA] bg-opacity-10 rounded'>
            <div className='w-full h-[180px] relative'>
              <Pic
                src='/images/city/london/buckingham.png'
                className='rounded-t-xl'
                alt=''
                objectFit='cover'
              />
            </div>
            <div className='px-[30px] py-6 text-left'>
              <h3 className='text-[#BBBCC0] font-medium text-lg leading-7'>
                Buckingham Palace
              </h3>
              <p className='text-[#95979B] text-sm font-normal leading-5'>
                The London residence and administrative headquarters of the
                monarch of the United Kingdom. It has 775 rooms, including the
                famous balcony.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-[#E5EAFA] bg-opacity-10 rounded w-[370px] h-[328px]'>
          <div className='w-[370px] h-[180px]'>
            <Pic
              src='/images/city/london/parliament.png'
              alt=''
              objectFit='cover'
            />
          </div>
          <div className='rounded-bl-lg rounded-br-lg w-[370px] h-[148px] p-4 px-[30px] gap-x-4'>
            <h3 className='text-[#BBBCC0] font-medium text-lg leading-7'>
              The Houses of Parliament
            </h3>
            <p className='text-[#95979B] text-sm font-normal leading-5'>
              Also known as the Palace of Westminster, is the home of the
              UK&apos;s legislative body and iconic landmark on the River
              Thames.{' '}
            </p>
          </div>
        </div>
        <div className='bg-[#E5EAFA] bg-opacity-10 rounded w-[370px] h-[328px]'>
          <div className='w-[370px] h-[180px]'>
            <Pic
              src='/images/city/london/parliament.png'
              alt=''
              objectFit='cover'
            />
          </div>
          <div className='rounded-bl-lg rounded-br-lg w-[370px] h-[148px] p-4 px-[30px] gap-x-4'>
            <h3 className='text-[#BBBCC0] font-medium text-lg leading-7'>
              Tower of London
            </h3>
            <p className='text-[#95979B] text-sm font-normal leading-5'>
              A historic castle located in central London, known for its dark
              past, crown jewels, and royal menagerie.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <Title subTitle='Hidden Gems' mainTitle='Tourist Attraction' />
      </div>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-6 px-[40px]'>
        <div className='col-span-1 bg-[#223544] rounded flex'>
          <div className='w-[128px] h-[114px] flex-none'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className='py-3 px-4 text-left'>
            <h3 className='text-[#BBBCC0] font-medium text-xl'>
              The neighbourhoods of Notting Hill
            </h3>
            <p className='text-[#95979B] text-sm'>
              A vibrant and affluent neighborhood in West London, known for its
              colourful houses, Portobello Road Market, and annual carnival.
            </p>
          </div>
        </div>
        <div className='bg-[#223544] h-[114px] w-[500px] rounded flex flex-row'>
          <div className='w-[225px] h-[114px]'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='w-[128px] rounded-md'
            />
          </div>
          <div className='p-2'>
            <h3 className='text-[#BBBCC0] font-sans font-medium text-lg leading-7 '>
              Greenwich
            </h3>
            <p className='text-[#95979B] text-sm'>
              Where you can enjoy the stunning views from the Royal Observatory
              and take a walk in Greenwich Park.
            </p>
          </div>
        </div>
        {/* ... other hidden gems ... */}
      </div>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:w-[1044px] md:h-[114px] gap-4'>
        {/* Repeat this block for each hidden gem */}
        <div className='bg-[#223544] h-[114px] w-[500px] rounded flex flex-row'>
          <div className='w-[270px] h-[114px]'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='rounded-md'
            />
          </div>
          <div className='p-2'>
            <h3 className='text-[#BBBCC0] font-sans font-medium text-lg leading-7 '>
              Harrods
            </h3>
            <p className='text-[#95979B] text-sm'>
              A luxury department store in Knightsbridge, London, known for its
              opulent interior, high-end fashion, and exquisite food hall.{' '}
            </p>
          </div>
        </div>
        <div className='bg-[#223544] h-[114px] w-[500px] rounded flex flex-row'>
          <div className='w-[270px] h-[114px]'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='rounded-md'
            />
          </div>
          <div className='p-2'>
            <h3 className='text-[#BBBCC0] font-sans font-medium text-lg leading-7 '>
              Selfridges
            </h3>
            <p className='text-[#95979B] text-sm'>
              A high-end department store in Oxford Street, London, known for
              its luxury fashion, cosmetics, and iconic window displays.{' '}
            </p>
          </div>
        </div>
        {/* ... other hidden gems ... */}
      </div>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:w-[1044px] md:h-[114px] gap-4'>
        {/* Repeat this block for each hidden gem */}
        <div className='bg-[#223544] h-[114px] w-[500px] rounded flex flex-row'>
          <div className='w-[230px] h-[114px]'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='rounded-md'
            />
          </div>
          <div className='p-2'>
            <h3 className='text-[#BBBCC0] font-sans font-medium text-lg leading-7 '>
              Fortnum & Mason
            </h3>
            <p className='text-[#95979B] text-sm'>
              A luxury department store in Piccadilly, London, known for its
              exquisite food hall, fine teas, and hampers.
            </p>
          </div>
        </div>
        <div className='bg-[#223544] h-[114px] w-[500px] rounded flex flex-row'>
          <div className='w-[310px] h-[114px]'>
            <Pic
              src='/images/city/london/tourist.png'
              alt=''
              objectFit='cover'
              className='rounded-md'
            />
          </div>
          <div className='p-2 te'>
            <h3 className='text-[#BBBCC0] font-sans font-medium text-lg leading-7 '>
              Buckingham Palace
            </h3>
            <p className='text-[#95979B] text-sm'>
              The London residence and administrative headquarters of the
              monarch of the United Kingdom. It has 775 rooms, including the
              famous balcony.{' '}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
