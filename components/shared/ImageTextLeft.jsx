import propTypes from 'prop-types';

export default function ImageTextLeft({ sections }) {
  return (
    <section>
      <div className="container mx-auto !md:py-12 px-4 lg:px-8 xl:px-10 2xl:px-12">
        {sections.map((section, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="grid lg:grid-cols-2 md:grid-cols-1">
            <div className="order-1 lg:order-2 xl:order-2">
              <img
                src={section.img}
                alt={section.alt || ''}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center order-1 order-2 lg:pr-20 md:order-1 lg:order-1 xl:order-1">
              <div className="block my-3 text-center  md:text-left">
                <h2 className="text-primary font-semibold md:text-[28px] sm:text-[22px]">
                  {section.head}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={i} className="mt-3 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
ImageTextLeft.propTypes = {
  sections: propTypes.arrayOf(
    propTypes.shape({
      img: propTypes.string,
      head: propTypes.string,
      paragraphs: propTypes.arrayOf(propTypes.string),
    }),
  ),
};
ImageTextLeft.defaultProps = {
  sections: [
    {
      img: 'Enter details',
      head: 'Enter details',
      paragraphs: ['Enter details'],
    },
  ],
};
