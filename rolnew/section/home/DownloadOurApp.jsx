import Container from 'rolnew/comp/Container';
import Image from 'next/image';

function DownloadOurApp() {
  return (
    <>
      <Container className="bg-[url('/rolnew/home/cities.png')] bg-[#081017] w-full bg-no-repeat bg-bottom bg-auto py-12 text-center">
        <div className="boxes w-full flex gap-4 justify-center items-center flex-col md:flex-row">
          <div className="box">
            <p className="text-zinc-400 text-md font-normal">Download The App</p>
          </div>
          <div className="box hidden md:block pop cursor-pointer">
            <Image src="/rolnew/home/playstore.png" width={150} height={150} alt="playstore" />
          </div>
          <div className="box block md:hidden w-full h-[58px] relative pop cursor-pointer">
            <Image src="/rolnew/home/googleplay-mobile.svg" fill alt="playstore" />
          </div>
          <div className="box hidden md:block pop cursor-pointer">
            <Image src="/rolnew/home/appstore.png" width={150} height={150} alt="playstore" />
          </div>
          <div className="box block md:hidden w-full h-[58px] relative pop cursor-pointer">
            <Image src="/rolnew/home/appstore-mobile.svg" fill alt="playstore" />
          </div>
          <div className="box hidden md:block pop cursor-pointer">
            <Image src="/rolnew/home/OR.svg" alt="or" width={20} height={20} />
          </div>
          <div className="box block md:hidden">
            <Image src="/rolnew/home/or-horizantal.svg" alt="or" width={315} height={58} />
          </div>
          <div className="box ">
            <Image src="/rolnew/home/qrCode.png" alt="qrcode" width={150} height={150} />
            <div className="mt-2 text-[#B2B2B2]">Scan QR Code</div>
          </div>
        </div>
      </Container>
      {/* <div className="w-full h-[1px] mx-auto">
        <Pic src="/rolnew/global/hr.svg" alt="hr" objectFit="cover" />
      </div> */}
    </>
  );
}

export default DownloadOurApp;
