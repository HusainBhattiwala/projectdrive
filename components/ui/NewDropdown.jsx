import React, { useRef, useState } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

function NewDropdown({
  label,
  children,
  className,
  btnClass = '',
  dropDownClass = '',
  noDrop = true,
  isHeader = false,
  width = 1024,
  imageSrc = '',
  disable = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => setIsOpen(false));

  // eslint-disable-next-line no-unused-vars
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative transition-all duration-300 ${className} ${
        disable ? 'pointer-events-none !bg-gray-100' : ''
      }`}
      ref={outSideClickRef}
      onClick={toggleDropdown}
    >
      <button
        type="button"
        className={`text-gray-800 py-2 px-1 rounded items-center uppercase lg:text-[14px] md:text-[11px] font-semibold w-full flex justify-between ${btnClass}`}
      >
        {imageSrc && (
          <div className="absolute left-1 flex items-center pointer-events-none">
            <img src={imageSrc} alt="" />
          </div>
        )}
        {imageSrc ? (
          <span className="text-white pl-4 text-sm font-medium capitalize tracking-tight">
            {label}
          </span>
        ) : (
          <span className="text-white text-sm font-medium capitalize tracking-tight">
            {label}
          </span>
        )}
        {noDrop && imageSrc ? (
          <svg
            className={`w-2.5 h-2.5 ml-auto fill-current flex-none ${
              width < 786 && isHeader && !isOpen && 'rotate-[270deg]'
            } `}
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8723 0.292444C10.7797 0.199741 10.6699 0.126193 10.5489 0.0760116C10.4279 0.0258302 10.2982 -3.79325e-08 10.1673 -4.36573e-08C10.0363 -4.93821e-08 9.9066 0.0258301 9.78563 0.0760116C9.66466 0.126193 9.55477 0.199741 9.46225 0.292444L5.58225 4.17244L1.70225 0.292444C1.51528 0.105466 1.26168 0.000422998 0.997254 0.000422987C0.732828 0.000422975 0.47923 0.105466 0.292253 0.292444C0.105275 0.479421 0.000233618 0.733017 0.000233607 0.997444C0.000233595 1.26187 0.105275 1.51547 0.292252 1.70244L4.88225 6.29244C4.97477 6.38515 5.08466 6.4587 5.20563 6.50888C5.3266 6.55906 5.45628 6.58489 5.58725 6.58489C5.71822 6.58489 5.8479 6.55906 5.96888 6.50888C6.08985 6.4587 6.19974 6.38515 6.29225 6.29244L10.8823 1.70244C11.2623 1.32244 11.2623 0.682444 10.8723 0.292444Z"
              fill="#FF4E00"
            />
          </svg>
        ) : (
          <svg
            className={`w-3 h-3 ml-10 fill-current ${
              width < 786 && isHeader && !isOpen && 'rotate-[270deg]'
            } `}
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8723 0.292444C10.7797 0.199741 10.6699 0.126193 10.5489 0.0760116C10.4279 0.0258302 10.2982 -3.79325e-08 10.1673 -4.36573e-08C10.0363 -4.93821e-08 9.9066 0.0258301 9.78563 0.0760116C9.66466 0.126193 9.55477 0.199741 9.46225 0.292444L5.58225 4.17244L1.70225 0.292444C1.51528 0.105466 1.26168 0.000422998 0.997254 0.000422987C0.732828 0.000422975 0.47923 0.105466 0.292253 0.292444C0.105275 0.479421 0.000233618 0.733017 0.000233607 0.997444C0.000233595 1.26187 0.105275 1.51547 0.292252 1.70244L4.88225 6.29244C4.97477 6.38515 5.08466 6.4587 5.20563 6.50888C5.3266 6.55906 5.45628 6.58489 5.58725 6.58489C5.71822 6.58489 5.8479 6.55906 5.96888 6.50888C6.08985 6.4587 6.19974 6.38515 6.29225 6.29244L10.8823 1.70244C11.2623 1.32244 11.2623 0.682444 10.8723 0.292444Z"
              fill="#FF4E00"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 left-0 w-full bg-white rounded-none shadow-lg menu !p-0 py-2 ${dropDownClass}`}
        >
          <ul className="lg:text-[14px] md:text-[12px]">{children}</ul>
        </div>
      )}
    </div>
  );
}

export default NewDropdown;
