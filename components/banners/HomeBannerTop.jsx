/* eslint-disable max-len */
import propTypes from 'prop-types';
import Link from 'next/link';
import { BackgroundImage } from 'components/ui/BackgroundImage';
import H2 from 'components/typography/H2';
import H3 from '../typography/H3';
// import Button from '../ui/Button';

function HomeBannerTop({ bannerImg }) {
  return (
    <div className="bg-black w-full py-4">
      <div className="xl:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="w-full h-full relative object-cover">
            <BackgroundImage src={bannerImg} className="object-cover" alt="bannerimage" />
          </div>

          <div className="pt-5 pb-5 pl-6 pr-6 md:pr-12 md:text-left text-center">
            <H2 className="text-primary capitalize lg:!text-[32px] md:!text-3xl sm:!text-2xl !text-xl font-[500] !leading-loose">
              RolDrive! Your Trusted Travel Partner
            </H2>
            <H3 className="text-white my-5 mb-10 !font-robo !font-[300]">
              Keep your worries aside, as our services can be booked 24*7 online. Connect to your customer assistant team anytime and they will be more than happy to help you.
              <br />
              Optimum luxury and safety for personal and corporate travel.
              <br />
              Sophisticated vehicles and qualified drivers.
            </H3>

            <Link
              className="lg:px-14 md:px-10 py-3 px-4 font-normal normal-case text-base bg-primary text-white rounded-md hover:bg-white hover:text-primary"
              href="/contact-us"
            >
              Let&#39;s Connect!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

HomeBannerTop.propTypes = {
  bannerImg: propTypes.string,
};

HomeBannerTop.defaultProps = {
  bannerImg: '../public/images/banner/banner1.png',
};

export default HomeBannerTop;
