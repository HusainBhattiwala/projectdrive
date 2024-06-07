import propTypes from 'prop-types';

export default function ImageText({
  img1,
  head1,
  subHead11,
  s1p1,
  s1p2,
  s1p3,
  img2,
  head2,
  subHead21,
  subHead22,
  subHead23,
  s2p1,
  s2p2,
  s2p3,
  s2p4,
  s2p5,
  s2p6,
  s2p7,
  s2p8,
  img3,
  head3,
  s3p1,
  s3p2,
  s3p3,
  img4,
  head4,
  subHead41,
  s4p1,
  s4p2,
  s4p3,
  s4p4,
  s4p5,
  s4p6,
  s4p7,
  s4p8,
  s4p9,
  img1Alt,
  img2Alt,
  img3Alt,
  img4Alt,
}) {
  return (
    <section>
      <div className="container mx-auto !md:py-12 px-4 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <img
              src={img1}
              alt={img1Alt || ''}
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center my-3 lg:pl-20">
            <div className="block text-center md:text-left">
              <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                {head1}
              </h2>
              <p className="mt-3 text-justify">{s1p1}</p>
              <h2 className="mt-3 font-bold text-justify">{subHead11}</h2>
              <p className="mt-3 text-justify">{s1p2}</p>
              <p className="mt-3 text-justify">{s1p3}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="order-1 lg:order-2 xl:order-2 ">
            <img
              src={img2}
              alt={img2Alt || ''}
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center order-1 order-2 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
            <div className="block my-3 text-center  md:text-left">
              <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                {head2}
              </h2>
              <h3 className="mt-3 font-bold">{subHead21}</h3>
              <p className="mt-3 text-justify">{s2p1}</p>
              <h3 className="mt-3 font-bold">{subHead22}</h3>
              <p className="mt-3 text-justify">{s2p2}</p>
              <h3 className="mt-3 font-bold">{subHead23}</h3>
              <p className="mt-3 text-justify">{s2p3}</p>
              <p className="mt-3 text-justify">{s2p4}</p>
              <p className="mt-3 text-justify">{s2p5}</p>
              <p className="mt-3 text-justify">{s2p6}</p>
              <p className="mt-3 text-justify">{s2p7}</p>
              <p className="mt-3 text-justify">{s2p8}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <img
              src={img3}
              alt={img3Alt || ''}
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center lg:pl-20">
            <div className="block my-3 text-center  md:text-left">
              <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                {head3}
              </h2>
              <p className="mt-3 text-justify">{s3p1}</p>
              <p className="mt-3 text-justify">{s3p2}</p>
              <p className="mt-3 text-justify">{s3p3}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="order-1 lg:order-2 xl:order-2 ">
            <img
              src={img4}
              alt={img4Alt || ''}
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center order-1 order-2 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
            <div className="block my-3 text-center  md:text-left">
              <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                {head4}
              </h2>
              <p className="mt-3 text-justify">{s4p1}</p>
              <h3 className="mt-3 font-bold text-justify">{subHead41}</h3>
              <p className="mt-3 text-justify">{s4p2}</p>
              <p className="mt-3 text-justify">{s4p3}</p>
              <p className="mt-3 text-justify">{s4p4}</p>
              <p className="mt-3 text-justify">{s4p5}</p>
              <p className="mt-3 text-justify">{s4p6}</p>
              <p className="mt-3 text-justify">{s4p7}</p>
              <p className="mt-3 text-justify">{s4p8}</p>
              <p className="mt-3 text-justify">{s4p9}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ImageText.propTypes = {
  img1: propTypes.string,
  head1: propTypes.string,
  s1p1: propTypes.string,
  s1p2: propTypes.string,
  s1p3: propTypes.string,
  img2: propTypes.string,
  head2: propTypes.string,
  s2p1: propTypes.string,
  s2p2: propTypes.string,
  s2p3: propTypes.string,
  img3: propTypes.string,
  head3: propTypes.string,
  s3p1: propTypes.string,
  s3p2: propTypes.string,
  s3p3: propTypes.string,
};

ImageText.defaultProps = {
  img1: 'Enter details',
  head1: 'Enter details',
  s1p1: 'Enter details',
  s1p2: '',
  s1p3: '',
  img2: 'Enter details',
  head2: 'Enter details',
  s2p1: 'Enter details',
  s2p2: '',
  s2p3: '',
  img3: 'Enter details',
  head3: 'Enter details',
  s3p1: 'Enter details',
  s3p2: '',
  s3p3: '',
};
