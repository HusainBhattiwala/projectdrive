import { useEffect, useState } from 'react';

function Button({
  className, children, onClick, disabled, isLoading,
}) {
  const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

  useEffect(() => {
    setShouldShowSpinner(isLoading);
    return () => setShouldShowSpinner(null);
  }, [isLoading]);

  const handleClick = async (...args) => {
    if (shouldShowSpinner) return;
    setShouldShowSpinner(true);
    await onClick(...args);
    setShouldShowSpinner(false);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`btn rounded-md text-white min-h-0 h-auto py-1 ${
        className || 'px-3 py-3'
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
