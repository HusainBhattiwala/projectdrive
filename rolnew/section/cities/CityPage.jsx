"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TopPicks from "rolnew/comp/TopPicks";
import Banner from "rolnew/section/cities/Banner";
import TrustedPartners from "rolnew/comp/TrustedPartners";
import OurFeet from "rolnew/section/home/OurFeet";
import Locations from "rolnew/comp/Locations";
import Contact from "rolnew/comp/Contact";
import Destinations from "rolnew/section/home/Destinations";
import DownloadOurApp from "rolnew/section/home/DownloadOurApp";
import CategoriesComponent from "components/AllCategories";
import FAQ from "rolnew/section/home/FAQ";
import Landmark from "rolnew/section/cities/LandMark";

const cities = ["london", "dubai", "newyork", "paris", "tokyo"];
const cityData = {
  london: {
    banner: {
      title: "London Chauffeur Service",
      subTitle: "Your exclusive and dependable chauffeur service indulgence",
      bannerImage: "/rolnew/cities/london.png",
    },
    title1: {
      subTile: "Tailored Chauffeur Services",
      mainTitle: "London Landmarks",
      description:
        "These attractions can be busy and difficult to navigate, especially during peak tourist season. By hiring a chauffeur service such as a Mercedes Sprinter hire in London, tourists can sit back and relax while their experienced driver navigates through the busy city streets, making their way to each attraction without the added stress of finding a parking spot or figuring out public transportation.",
    },
    landMarks: [
      {
        id: "land1",
        src: "/images/city/london/buckingham.png",
        title: "Buckingham Palace",
        description:
          "The London residence and administrative headquarters of the monarch of the United Kingdom. It has 775 rooms, including the famous balcony.",
      },
      {
        id: "land2",
        src: "/images/city/london/parliament.png",
        title: "The Houses of Parliament",
        description:
          "Also known as the Palace of Westminster, is the home of the UK&apos;s legislative body and iconic landmark on the River Thames.",
      },
      {
        id: "land3",
        src: "/images/city/london/tower.png",
        title: "Tower of London",
        description:
          "A historic castle located in central London, known for its dark past, crown jewels, and royal menagerie.",
      },
    ],
    touristAttraction: {
      title: "Tourist Attraction",
      subTile: "Hidden Gems",
      list: [
        {
          id: "touristAttraction1",
          src: "/images/city/london/notting_hill.png",
          title: "The neighbourhoods of Notting Hill",
          description:
            "A vibrant and affluent neighborhood in West London, known for its colourful houses, Portobello Road Market, and annual carnival.",
        },
        {
          id: "touristAttraction2",
          src: "/images/city/london/tourist.png",
          title: "Greenwich",
          description:
            "Where you can enjoy the stunning views from the Royal Observatory and take a walk in Greenwich Park.",
        },
        {
          id: "touristAttraction3",
          src: "/images/city/london/tourist.png",
          title: "Harrods",
          description:
            "A luxury department store in Knightsbridge, London, known for its opulent interior, high-end fashion, and exquisite food hall.",
        },
        {
          id: "touristAttraction4",
          src: "/images/city/london/tourist.png",
          title: "Selfridges",
          description:
            "A high-end department store in Oxford Street, London, known for its luxury fashion, cosmetics, and iconic window displays.",
        },
        {
          id: "touristAttraction5",
          src: "/images/city/london/tourist.png",
          title: "Fortnum & Mason",
          description:
            "A luxury department store in Piccadilly, London, known for its exquisite food hall, fine teas, and hampers.",
        },
        {
          id: "touristAttraction6",
          src: "/images/city/london/tourist.png",
          title: "Buckingham Palace",
          description:
            "The London residence and administrative headquarters of the monarch of the United Kingdom. It has 775 rooms, including the famous balcony.",
        },
      ],
    },
  },
  paris: {
    banner: {
      title: "Paris Chauffeur Service",
      subTitle: "Your exclusive and dependable chauffeur service indulgence",
      bannerImage: "/rolnew/cities/paris.png",
    },
    title1: {
      subTile: "Tailored Chauffeur Services",
      mainTitle: "Paris Landmarks",
      description:
        "Discover the iconic landmarks of Paris with our chauffeur service. Avoid the hassle of navigating through the city and let our experienced drivers take you to the must-see attractions in comfort and style.",
    },
    landMarks: [
      {
        id: "land1",
        src: "/images/city/paris/eiffel_tower.png",
        title: "Eiffel Tower",
        description:
          "One of the most famous landmarks in the world, offering breathtaking views of Paris from its observation decks.",
      },
      {
        id: "land2",
        src: "/images/city/paris/louvre.png",
        title: "The Louvre Museum",
        description:
          "Home to thousands of works of art, including the Mona Lisa and the Venus de Milo, the Louvre is the largest art museum in the world.",
      },
      {
        id: "land3",
        src: "/images/city/paris/notre_dame.png",
        title: "Notre-Dame Cathedral",
        description:
          "A masterpiece of French Gothic architecture, Notre-Dame Cathedral is a symbol of Paris and a UNESCO World Heritage Site.",
      },
    ],
    touristAttraction: {
      title: "Tourist Attraction",
      subTile: "Hidden Gems",
      list: [
        {
          id: "touristAttraction1",
          src: "/images/city/london/tourist.pn",
          title: "The neighbourhoods of Notting Hill",
          description:
            "A vibrant and affluent neighborhood in West London, known for its colourful houses, Portobello Road Market, and annual carnival.",
        },
        {
          id: "touristAttraction2",
          src: "/images/city/london/tourist.png",
          title: "Greenwich",
          description:
            "Where you can enjoy the stunning views from the Royal Observatory and take a walk in Greenwich Park.",
        },
        {
          id: "touristAttraction3",
          src: "/images/city/london/tourist.png",
          title: "Harrods",
          description:
            "A luxury department store in Knightsbridge, London, known for its opulent interior, high-end fashion, and exquisite food hall.",
        },
        {
          id: "touristAttraction4",
          src: "/images/city/london/tourist.png",
          title: "Selfridges",
          description:
            "A high-end department store in Oxford Street, London, known for its luxury fashion, cosmetics, and iconic window displays.",
        },
        {
          id: "touristAttraction5",
          src: "/images/city/london/tourist.png",
          title: "Fortnum & Mason",
          description:
            "A luxury department store in Piccadilly, London, known for its exquisite food hall, fine teas, and hampers.",
        },
        {
          id: "touristAttraction6",
          src: "/images/city/london/tourist.png",
          title: "Buckingham Palace",
          description:
            "The London residence and administrative headquarters of the monarch of the United Kingdom. It has 775 rooms, including the famous balcony.",
        },
      ],
    },
  },
};

function CityPage() {
  const [pageData, setPageData] = useState({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urls = pathName.split("/");
    const url = urls[urls.length - 1];
    if (!cities.includes(url)) {
      router.push("/404");
    } else {
      console.log(cityData[url]);
      setPageData(cityData[url]);
    }
  }, [pathName, router]);
  return (
    <>
      <Banner pageData={pageData} />
      <div className='bg-[#11202D] py-12'>
        <TrustedPartners
          img='/rolnew/cities/trust-banner.svg'
          showTitle={false}
        />
      </div>
      <OurFeet showBooking />
      <Landmark pageData={pageData} />
      <TopPicks />
      <Locations showPadding />
      <Contact />
      <Destinations />
      <DownloadOurApp />
      <CategoriesComponent />
      <FAQ />
    </>
  );
}

export default CityPage;
