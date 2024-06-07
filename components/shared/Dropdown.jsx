import { useRef, useState } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function Dropdown({
  children,
  options,
  onChange,
  optionRenderer,
  disabled,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const outSideClickRef = useRef();

  useOnClickOutside(outSideClickRef, () => setIsOpen(false));

  return (
    <div className={`relative w-full ${className}`} ref={outSideClickRef}>
      <div
        className={`flex items-center gap-[6px] w-full justify-between ${
          !disabled && ''
        } bg-white border border-solid border-neutral-200 h-[2.75rem] px-3 rounded-lg ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={() => {
          if (!disabled) {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        {children}
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-none w-5 h-5 text-primary"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          />
        </svg>
      </div>
      <div className="absolute w-full z-50 mt-2 bg-white rounded-b-lg shadow-2xl top-10 max-h-[260px] overflow-y-auto  mb-10">
        {!disabled
          && isOpen
          && options.map((item, index) => (
            <div
              className="py-2 px-2 hover:bg-slate-100 gap-[6px] flex cursor-pointer"
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {optionRenderer(item)}
            </div>
          ))}
      </div>
    </div>
  );
}
