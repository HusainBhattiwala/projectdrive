import Link from 'next/link';
import propTypes from 'prop-types';
import P from 'components/typography/P';
import { Pic } from './Pic';

export default function ClickableCards({ url, img, title }) {
  return (
    <Link href={url}>
      <div className="!h-32 overflow-hidden w-auto object-contain rounded-lg">
        <Pic
          src={img}
          alt={title}
        />
        <div />
      </div>
      <P className="text-black !text-base font-[500] text-center my-3">{title}</P>
    </Link>
  );
}
ClickableCards.propTypes = {
  url: propTypes.string,
  img: propTypes.string,
  title: propTypes.string,
};

ClickableCards.defaultProps = {
  url: 'Enter image url',
  img: 'Enter image url',
  title: 'Enter title',
};
