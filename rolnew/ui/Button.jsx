"use client";

import { forwardRef, useEffect, useState } from "react";

import { motion } from "framer-motion";
import Spinner from "./Spinner";

const Button = forwardRef(
  (
    {
      children,
      className,
      white,
      cta,
      disabled,
      onClick = () => {},
      submit,
      isLoading = false,
    },
    ref
  ) => {
    const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

    useEffect(() => {
      setShouldShowSpinner(isLoading);
      return () => setShouldShowSpinner(false);
    }, [isLoading]);

    const handleClick = async (event) => {
      if (shouldShowSpinner) return;
      setShouldShowSpinner(true);
      await onClick(event);
      setShouldShowSpinner(false);
    };

    return (
      <motion.button
        {...(!disabled && {
          whileHover: {
            scale: 1.02,
          },
        })}
        {...(!disabled && {
          whileTap: {
            scale: 0.98,
          },
        })}
        ref={ref}
        layout
        className={`cursor-pointer rounded-lg ${
          white ? "bg-[#FDE8E1] text-[#223544]" : "bg-[#EC5C29] text-white"
        } ${
          cta
            ? "px-10 py-3 font-bold text-lg"
            : "px-6 py-2 font-semibold shadow-md hover:shadow-lg active:shadow-inner"
        } ${className} ${shouldShowSpinner && "disabled"}`}
        transition={{ duration: 0.1, ease: "easeOut" }}
        onClick={handleClick}
        disabled={disabled || shouldShowSpinner}
        type={submit ? "submit" : "button"}
      >
        <div className="flex gap-2 items-center text-inherit justify-center">
          {shouldShowSpinner && <Spinner clear={white} />}
          {children}
          {shouldShowSpinner}
        </div>
      </motion.button>
    );
  }
);

export default Button;
