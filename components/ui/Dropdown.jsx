/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useRef, useState } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

function Dropdown({
  label,
  children,
  className,
  btnClass = '',
  dropDownClass = '',
  noDrop = true,
  isHeader = false,
  width = 1024,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => setIsOpen(false));

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div className={`relative transition-all duration-300 ${className}`} ref={outSideClickRef} onMouseLeave={handleClickOutside} onClick={toggleDropdown}>
      <button
        type="button"
        className={`text-gray-800 py-2 px-4 rounded inline-flex items-center uppercase lg:text-[14px] md:text-[11px] font-semibold ${btnClass}`}
        onMouseEnter={toggleDropdown}
      >
        <span>{label}</span>
        {
          noDrop
        && (
        <svg
          className={`w-4 h-4 ml-2 fill-current ${width < 786 && isHeader && !isOpen && 'rotate-[270deg]'} `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        )
        }
      </button>

      {isOpen && (
        <div className={`md:absolute z-50 left-0 w-full md:w-48 bg-white rounded-none shadow-lg menu !p-0 py-2 ${dropDownClass}`} onClick={toggleDropdown}>
          <ul className="lg:text-[14px] md:text-[12px]">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
