/* eslint-disable max-len */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import H2 from 'components/typography/H2';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';
import { BackgroundImage } from 'components/ui/BackgroundImage';
import CarouselV4 from 'components/ui/CarouselV4';
import { Pic } from 'components/ui/Pic';

export default function CityLandmarks() {
  const london = [
    {
      id: 1,
      tileImage: '/images/city/london/landmarks/buckingham-palace.jpg',
      title: 'Buckingham Palace',
      des1: "Buckingham Palace, a symbol of British royalty and architectural splendour, has served as the official London residence of the United Kingdom's monarchs since 1837. Located in the heart of London, the palace is a popular tourist attraction, drawing countless visitors each year who seek a glimpse of the Changing of the Guard ceremony or hope to catch sight of the Royal Standard flag, which signifies the monarch's presence.",
      des2: "Sprawling over 39 acres, the palace grounds encompass 775 rooms, including 19 State Rooms, 52 Royal and guest bedrooms, 188 staff bedrooms, 92 offices, and 78 bathrooms. The State Rooms are adorned with exquisite artwork from the Royal Collection, featuring masterpieces by artists such as Rembrandt, Rubens, and Vermeer. These rooms are used for official functions, ceremonies, and banquets, while the palace's private quarters remain off-limits to the public.",
      des3: "During the summer months, the palace opens its doors, allowing visitors to explore the opulent State Rooms and marvel at the regal architecture, lavish furnishings, and historical artefacts. The palace's exterior features an elegant façade, beautifully manicured gardens, and the iconic Victoria Memorial, a monument dedicated to Queen Victoria.",
      des4: 'Visiting Buckingham Palace in style is made easy with a London chauffeur service, which offers a luxurious and comfortable means of transportation to and from the palace. This premium service provides an unforgettable experience, allowing guests to enjoy the grandeur of Buckingham Palace while travelling in the utmost elegance and sophistication.',
      posterImage: '/images/city/london/landmarks/buckingham-palace-big.jpg',
    },
    {
      id: 2,
      tileImage: '/images/city/london/landmarks/the-houses-of-parliament.jpg',
      title: 'The Houses of Parliament ',
      des1: "The Houses of Parliament, officially known as the Palace of Westminster, is an iconic symbol of London and one of the world's most famous legislative buildings. Nestled on the north bank of the River Thames, it is an architectural masterpiece, boasting an elaborate Gothic Revival design that evokes a sense of awe-inspiring grandeur.",
      des2: "Home to the UK Parliament's two houses, the House of Lords and the House of Commons, the Palace of Westminster is where key legislative decisions are made. Its significant history, dating back to the Middle Ages, and its vibrant political life make it an attraction of considerable interest to locals and tourists alike.",
      des3: 'Two of its most iconic features are the Elizabeth Tower, commonly known as Big Ben after its massive bell, and the Victoria Tower. The former is renowned for its accurate timekeeping and chimes, while the latter is the tallest square tower in the world and serves as a royal entrance and repository for parliamentary archives.',
      des4: 'Enhance your visit to the Houses of Parliament with a London chauffeur service. Offering a seamless and luxurious travel experience, this service guarantees a comfortable, stress-free journey, allowing you to focus on soaking in the rich history and architectural splendour of this British landmark.',
      posterImage:
        '/images/city/london/landmarks/the-houses-of-parliament-big.jpg',
    },
    {
      id: 3,
      tileImage: '/images/city/london/landmarks/tower-of-london.jpg',
      title: 'Tower of London',
      des1: "The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle located on the north bank of the River Thames in central London. Steeped in over a thousand years of history, this UNESCO World Heritage Site provides a fascinating journey through the UK's past.",
      des2: "Originally built in 1066 as part of the Norman Conquest of England, the Tower has served variously as a royal palace, treasury, prison, and even a menagerie. It is perhaps most famous for being a secure fortress and a place of execution during the 16th and 17th centuries. The Tower has also housed the Crown Jewels of England since the 14th century, a collection that remains one of the world's most significant and enduring symbols of the British monarchy.",
      des3: "Notable structures within the Tower include the White Tower, a keep built by William the Conqueror, and the Traitors' Gate, through which prisoners once entered the Tower. Ghost stories and tales of royal intrigue abound, adding to the Tower's allure as one of London's most captivating historical sites.",
      des4: 'Enhance your visit to this iconic landmark by using a London chauffeur service. This service offers a luxurious and hassle-free journey, allowing you to arrive at the Tower of London in comfort and style, ready to delve into the rich tapestry of its history.',
      posterImage: '/images/city/london/landmarks/tower-of-london-big.jpg',
    },
    {
      id: 4,
      tileImage:
        '/images/city/london/landmarks/the-neighbourhoods-of-notting-hill.jpg',
      title: 'The neighbourhoods of Notting Hill',
      des1: 'Notting Hill, a vibrant and culturally rich neighbourhood in West London, is renowned for its unique charm and character. This picturesque district is a delightful blend of the quaint and the contemporary, offering a varied array of attractions that cater to diverse tastes.',
      des2: "Known for its pastel-coloured Victorian townhouses, bustling antique markets, and trendy boutiques, Notting Hill is a haven for artists, foodies, and fashion enthusiasts alike. The famous Portobello Road Market, one of the world's largest antique markets, draws visitors from all corners of the globe, eager to peruse its eclectic array of vintage goods, bric-a-brac, and unique trinkets.",
      des3: 'Notting Hill is also home to a thriving food scene, with an array of restaurants, cafes, and gastropubs offering everything from traditional British fare to international cuisine. The annual Notting Hill Carnival, a vibrant celebration of Caribbean culture, music, and food, paints the neighbourhood with colourful parades and festive energy, attracting millions of visitors.',
      des4: "Notting Hill's allure extends to its role in popular culture, having been the setting for numerous films, most notably the romantic comedy 'Notting Hill.'",
      des5: 'Navigating this lively neighbourhood can be made more enjoyable and hassle-free with a London chauffeur service. Offering comfortable, reliable, and sophisticated transportation, this service lets you explore the enchanting streets of Notting Hill in style and at your own pace.',
      posterImage:
        '/images/city/london/landmarks/the-neighbourhoods-of-notting-hill-big.jpg',
    },
    {
      id: 5,
      tileImage: '/images/city/london/landmarks/greenwich.jpg',
      title: 'Greenwich',
      des1: 'Greenwich, a district in southeast London, is steeped in maritime history and brimming with a rich cultural heritage. This charming area, recognised as a UNESCO World Heritage Site, offers an idyllic retreat from the bustling city centre, with its royal connections, maritime landmarks, and vast green spaces.',
      des2: 'The Royal Observatory in Greenwich Park is a must-visit, being the home of Greenwich Mean Time (GMT) and the Prime Meridian, the imaginary line dividing the eastern and western hemispheres of the Earth. Visitors can enjoy panoramic views of London from the hill near the observatory, while the park itself is a perfect spot for leisurely walks and picnics.',
      des3: "The National Maritime Museum, the largest of its kind in the world, showcases Britain's significant naval history through a vast collection of artefacts and exhibits. Nearby, the Cutty Sark, a preserved 19th-century ship, offers another glimpse into the area's seafaring past.",
      des4: "Greenwich is also known for its thriving market, where visitors can find a wide range of antiques, crafts, and delicious street food. The district's historic pubs and riverside walks add to its unique charm.",
      des5: 'Exploring Greenwich can be an even more enjoyable experience with a London chauffeur service. Providing comfortable, stylish, and efficient transport, this service enables visitors to traverse the area with ease and sophistication.',
      posterImage: '/images/city/london/landmarks/greenwich-big.jpg',
    },
    {
      id: 6,
      tileImage: '/images/city/london/landmarks/fortnum-and-mason.jpg',
      title: 'Fortnum & Mason ',
      des1: "Fortnum & Mason, located in the heart of London's Piccadilly, is a quintessentially British institution renowned for its exceptional quality goods and exemplary service. Established in 1707, it has grown from a humble grocery store to an iconic department store, attracting locals and tourists alike with its unique charm and distinguished offerings.",
      des2: "The store is perhaps best known for its extraordinary selection of teas, luxury hampers, and fine foods, all presented in beautiful packaging synonymous with the Fortnum & Mason brand. The food hall, a veritable paradise for gourmands, is brimming with exquisite delicacies from around the world, while the store's various restaurants and tea salon offer a range of delectable dining options.",
      des3: "Fortnum & Mason also boasts a remarkable collection of wines and spirits, a stunning beauty and fragrance department, and a menswear section offering high-end fashion and accessories. The store's commitment to providing a delightful shopping experience is evident in its elegant interiors, personal shopping service, and attentive staff.",
      des4: 'To make your visit to Fortnum & Mason an even more memorable experience, consider using a London chauffeur service. This premium service ensures a comfortable and stress-free journey, allowing you to arrive in style and enjoy your shopping adventure at this iconic London landmark to the fullest.',
      posterImage: '/images/city/london/landmarks/fortnum-and-mason-big.jpg',
    },
  ];

  const [hover, setHover] = useState(0);

  function decreseIndex() {
    if (Number(hover) > 0) {
      setHover(Number(hover) - 1);
    }
  }

  function increseIndex() {
    if (Number(hover) < london.length - 1) {
      setHover(Number(hover) + 1);
    }
  }

  return (
    <section>
      <div className="xl:container mx-auto px-4 lg:px-[60px] md:my-20 -mt-5">
        <H2 className="!text-[20px] text-center md:text-left md:!text-[1.5rem] text-black uppercase !font-bold mb-6">
          London Landmarks
        </H2>
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 hidden md:grid">
          {london.map((data, index) => (
            <div
              className="bg-center my-1 w-full xl:h-40 h-36 p-6 relative cursor-pointer"
              key={data.title}
              onClick={() => setHover(index)}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <BackgroundImage
                  src={data.tileImage}
                  alt={data.title}
                  className={`${
                    hover === index && '!grayscale-0'
                  } w-full h-auto object-cover brightness-[0.7] rounded-xl grayscale`}
                />
              </div>
              <div className="absolute bottom-4">
                <H3 className="text-white font-bold !text-base uppercase">
                  {data.title}
                </H3>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden -mb-6">
          <CarouselV4>
            {london.map((data, index) => (
              <div
                className="bg-center mx-2 my-1 !w-40 xl:h-40 md:h-36 h-28 md:p-6 relative z-20 cursor-pointer"
                key={data.id}
                onClick={() => setHover(index)}
              >
                <div className="absolute top-0 left-0 w-full h-full">
                  <BackgroundImage
                    src={data.tileImage}
                    alt={data.title}
                    className={`${
                      hover === index && '!grayscale-0'
                    } w-full h-auto object-cover brightness-[0.7] rounded-xl grayscale`}
                  />
                </div>
              </div>
            ))}
          </CarouselV4>
        </div>

        <div className="my-20 border-2 rounded-2xl border-gray-200 lg:px-[112px] px-6 md:px-10 py-6 md:py-[70px] bg-[#f4f4f4]">
          <div className="mx-auto">
            <div className="relative top-80 -mb-20 justify-between -mx-20 hidden md:flex ">
              <button
                aria-label="decrease"
                type="button"
                className={`${hover === 0 && 'opacity-10'} rotate-180 -ml-14`}
                onClick={() => {
                  decreseIndex();
                }}
              >
                <Pic src="/images/icons/nextbw.svg" />
              </button>
              <button
                aria-label="increase"
                type="button"
                className={`${
                  hover === london.length - 1 && 'opacity-10'
                } -mr-14`}
                onClick={() => {
                  increseIndex();
                }}
              >
                <Pic src="/images/icons/nextbw.svg" />
              </button>
            </div>
          </div>
          {london.map((data, index) => (
            <div className={`${hover === index ? 'block' : 'hidden'}`}>
              <H3 className="text-black font-bold md:!text-[1.5rem] !leading-[1.5rem] !text-[14px] text-center sm:text-left uppercase md:mb-[33px] mb-[20px]">
                {data.title}
              </H3>
              <div className="grid grid-cols-1">
                <div className="order-2 md:order-1 text-center sm:text-left -mb-8 sm:mb-0">
                  <P className="font-robo !text-base !leading-[22px]">
                    {data.des1 || data.des}
                  </P>
                  <P className="font-robo !text-base !leading-[22px] my-[14px]">
                    {data.des2}
                  </P>
                  <P className="font-robo !text-base !leading-[22px]">
                    {data.des3}
                  </P>
                  <P className="font-robo !text-base !leading-[22px] my-[14px]">
                    {data.des4}
                  </P>
                  <P className="font-robo !text-base !leading-[22px] mb-10 md:mb-0">
                    {data.des5}
                  </P>
                </div>
                <div className="lg:h-72 md:h-64 h-80 w-full md:mt-[30px] mb-[20px] md:mb-0 order-1 md:order-2">
                  <Image
                    src={data.posterImage}
                    fill
                    className="!relative h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
