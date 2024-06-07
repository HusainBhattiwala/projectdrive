/* eslint-disable max-len */
import propTypes from 'prop-types';
import H3 from 'components/typography/H3';
import P from 'components/typography/P';
import { Pic } from 'components/ui/Pic';

export default function PlacePointer({ head, para }) {
  return (
    <div className="my-3">
      <H3 className="text-black font-[700] text-[16px] mb-1 flex">
        <div className="h-6 w-4 mr-2">
          <Pic
            src="/images/icons/phonefinger.png"
            className="inline w-[16.57px] mr-4"
            alt="roldrive images"
          />
        </div>
        {head}
      </H3>
      <P className="!text-base text-[#2C2C2C] text-justify">
        { para }
      </P>
    </div>
  );
}

PlacePointer.propTypes = {
  head: propTypes.string,
  para: propTypes.string,
};

PlacePointer.defaultProps = {
  head: 'Enter Name in head',
  para: 'Enter Description in para',
};
