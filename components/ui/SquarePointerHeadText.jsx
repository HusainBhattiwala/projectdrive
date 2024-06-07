import { FaSquare } from 'react-icons/fa';
import P from 'components/typography/P';

export default function SquarePointerHeadText({ head, para, className }) {
  return (
    <div className={`${className} my-2`}>
      <P className="flex font-[500] !text-base text-black">
        <FaSquare className="text-primary mt-[3px] mr-2" />
        {head}
      </P>
      <P>{para}</P>
    </div>
  );
}
