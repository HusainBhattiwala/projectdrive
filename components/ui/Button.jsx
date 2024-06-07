'use client';

import { useEffect, useState } from 'react';

function Button({
  className,
  children,
  type = 'button',
  kind = '',
  onClick = () => {},
  disabled = false,
  isLoading,
}) {
  const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

  useEffect(() => {
    setShouldShowSpinner(isLoading);
    return () => setShouldShowSpinner(null);
  }, [isLoading]);

  const handleClick = async (...args) => {
    if (shouldShowSpinner) return;
    setShouldShowSpinner(() => true);
    await onClick(...args);
    setShouldShowSpinner(() => false);
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${
        disabled || shouldShowSpinner
          ? 'cursor-not-allowed !bg-gray-400 border-none !no-animation !text-white'
          : 'cursor-pointer'
      } ${
        kind ? 'btn-primary' : ''
      } btn text-white rounded-md min-h-0 sm:text-sm text-xs !pointer-events-auto ${
        className || 'px-3 py-3 h-auto'
      } `}
      onClick={handleClick}
      disabled={disabled || shouldShowSpinner}
    >
      {children}
      {shouldShowSpinner && (
        <span className="loading-xs loading loading-spinner" />
      )}
    </button>
  );
}

export default Button;
