import { useRef, useState } from 'react';
import P from 'components/typography/P';

export default function Input({
  placeholder,
  className,
  value,
  onChange,
  type,
  inputIcon,
  inputIconAlt,
  disabled,
  onClick,
  required,
  errorFn = () => {},
  onFocus = () => {},
  errorMsg,
  ...rest
}) {
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="relative w-full">
      {isError && (
        <P className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs font-bold z-10">
          {errorMsg || 'Required'}
        </P>
      )}

      <div className="relative">
        <input
          onClick={onClick}
          disabled={disabled}
          value={value}
          onChange={(event) => {
            onChange(event);
            if (errorFn(event.target.value)) {
              setIsError(true);
            } else {
              setIsError(false);
            }
            if (required && event.target.value === '') {
              setIsError(true);
            } else {
              setIsError(false);
            }
          }}
          type={type || 'text'}
          placeholder={placeholder}
          className={`w-full ${
            !disabled && ''
          } focus:outline-none focus:border-primary h-[2.75rem] px-3 input bg-white border border-solid border-neutral-200 overflow-ellipsis ${
            inputIcon && 'pr-8'
          } ${className}`}
          {...rest}
          ref={inputRef}
          onFocus={onFocus}
        />
        {inputIcon && (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            className="absolute w-4 h-4 -translate-y-1/2 right-3 top-1/2 cursor-pointer"
            src={inputIcon}
            alt={inputIconAlt || ''}
            onClick={() => { inputRef?.current.focus(); }}
          />
        )}
      </div>
    </div>
  );
}
