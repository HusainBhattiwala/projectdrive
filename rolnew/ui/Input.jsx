// "use client";

// import { useRef } from "react";
// import { twMerge } from "tailwind-merge";

// export default function Input({
//   label,
//   leadingIcon,
//   placeholder = "",
//   className,
//   value,
//   onChange = () => {},
//   onBlur = () => {},
//   type,
//   inputIcon,
//   inputIconAlt = "",
//   disabled,
//   onClick,
//   onFocus = () => {},
//   errorMsg,
//   rows,
//   labelClass,
//   readOnly,
//   showError = false,
//   isFullScreen = false,
//   closeFocus = () => {},
//   ...rest
// }) {
//   const inputRef = useRef(null);

//   const Component = rows ? "textarea" : "input";
//   return (
//     <div
//       className={`w-full ${
//         isFullScreen
//           ? "fixed h-full top-0 left-0 right-0 bottom-0 z-[99999999] bg-[#223544] py-4 px-4"
//           : "relative"
//       }`}
//     >
//       {showError && (
//         <p className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs !font-[400] z-10">
//           Required
//         </p>
//       )}
//       {!isFullScreen && (
//         <p className={`text-white text-sm mb-[2px] text-left ${labelClass}`}>
//           {label}
//         </p>
//       )}
//       <div className="flex w-full gap-x-3 items-center">
//         {isFullScreen && (
//           <button type="button" onClick={closeFocus}>
//             <img
//               alt="clear"
//               src="/rolnew/global/icons/x.svg"
//               className="w-6 h-6 cursor-pointer"
//             />
//           </button>
//         )}
//         <div className="relative flex-grow">
//           {leadingIcon && (
//             // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
//             <img
//               className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 cursor-pointer"
//               src={leadingIcon}
//               alt=""
//               onKeyDown={() => {
//                 inputRef.current?.focus();
//               }}
//               onClick={() => {
//                 inputRef.current?.focus();
//               }}
//             />
//           )}
//           <Component
//             onClick={onClick}
//             disabled={disabled}
//             autoComplete="off" // Disable autocomplete
//             spellCheck="false"
//             value={value}
//             onChange={onChange}
//             onBlur={onBlur}
//             type={type || "text"}
//             placeholder={placeholder}
//             className={twMerge(
//               `w-full ${
//                 !disabled && ""
//               } focus:outline-none focus:bg-opacity-100 !rounded-lg py-3 placeholder:text-sm ${
//                 leadingIcon || inputIcon ? "sm:px-10 px-0 pl-9 pr-4" : "px-6"
//               } bg-[#223544D9] bg-opacity-85 !text-[#B2B2B2] border !border-[#E1E1E140] overflow-ellipsis autofill:!bg-[#223544D9] ${
//                 inputIcon && "pr-12"
//               } ${className}`
//             )}
//             ref={inputRef}
//             onFocus={onFocus}
//             rows={rows}
//             readOnly={readOnly}
//             {...rest}
//           />
//           {inputIcon && (
//             // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
//             <img
//               className="absolute w-5 h-5 -translate-y-1/2 right-3 top-1/2 cursor-pointer"
//               src={inputIcon}
//               alt={inputIconAlt || ""}
//               onKeyDown={() => {
//                 inputRef.current?.focus();
//               }}
//               onClick={() => {
//                 inputRef.current?.focus();
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {errorMsg && (
//         <p className="text-red-600 text-sm font-semibold mt-1">{errorMsg}</p>
//       )}
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  label,
  leadingIcon,
  placeholder = "",
  className,
  value,
  onChange = () => {},
  onBlur = () => {},
  type,
  inputIcon,
  inputIconAlt = "",
  disabled,
  onClick,
  onFocus = () => {},
  errorMsg,
  rows,
  labelClass,
  readOnly,
  showError = false,
  isFullScreen = false,
  closeFocus = () => {},
  ...rest
}) {
  const inputRef = useRef(null);

  const Component = rows ? "textarea" : "input";
  return (
    <div
      className={`w-full ${
        isFullScreen
          ? "fixed h-full top-0 left-0 right-0 bottom-0 z-[99999999] bg-[#223544] py-4"
          : "relative"
      }`}
    >
      {showError && (
        <p className="animate-bounce absolute right-0 bg-red-500 text-white px-1 py-1 !text-xs !font-[400] z-10">
          Required
        </p>
      )}
      {!isFullScreen && (
        <p className={`text-white text-sm mb-[2px] text-left ${labelClass}`}>
          {label}
        </p>
      )}
      <div
        className={`flex ${
          isFullScreen ? "flex-col gap-5 w-full" : "w-full gap-x-3 items-center"
        }`}
      >
        {isFullScreen && (
          <div className="flex justify-end w-full">
            <button type="button" onClick={closeFocus}>
              <img
                alt="clear"
                src="/rolnew/global/icons/x.svg"
                className="w-6 h-6 cursor-pointer"
              />
            </button>
          </div>
        )}
        <div className="relative flex-grow w-full">
          {leadingIcon && (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
            <img
              className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 cursor-pointer"
              src={leadingIcon}
              alt=""
              onKeyDown={() => {
                inputRef.current?.focus();
              }}
              onClick={() => {
                inputRef.current?.focus();
              }}
            />
          )}
          <Component
            onClick={onClick}
            disabled={disabled}
            autoComplete="off" // Disable autocomplete
            spellCheck="false"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={type || "text"}
            placeholder={placeholder}
            className={twMerge(
              `w-full ${
                !disabled && ""
              } focus:outline-none focus:bg-opacity-100 !rounded-lg py-3 placeholder:text-sm ${
                leadingIcon || inputIcon ? "sm:px-10 px-0 pl-9 pr-4" : "px-6"
              } bg-[#223544D9] bg-opacity-85 !text-[#B2B2B2] border !border-[#E1E1E140] overflow-ellipsis autofill:!bg-[#223544D9] ${
                inputIcon && "pr-12"
              } ${className}`
            )}
            ref={inputRef}
            onFocus={onFocus}
            rows={rows}
            readOnly={readOnly}
            {...rest}
          />
          {inputIcon && !value && (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
            <img
              className="absolute w-5 h-5 -translate-y-1/2 right-3 top-1/2 cursor-pointer"
              src={inputIcon}
              alt={inputIconAlt || ""}
              onKeyDown={() => {
                inputRef.current?.focus();
              }}
              onClick={() => {
                inputRef.current?.focus();
              }}
            />
          )}
        </div>
      </div>

      {errorMsg && (
        <p className="text-red-600 text-sm font-semibold mt-1">{errorMsg}</p>
      )}
    </div>
  );
}
