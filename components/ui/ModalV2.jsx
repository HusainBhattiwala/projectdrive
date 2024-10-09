import { useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function ModalV2({
  enabled = false,
  header = '',
  body = () => {},
  footer = '',
  setModal = () => {},
  noOutSideClose = false,
  ...rest
}) {
  const outSideClickRef = useRef();

  // Hook to close modal on outside click
  useOnClickOutside(outSideClickRef, () => {
    if (!noOutSideClose && enabled) {
      setModal((prev) => ({ ...prev, enabled: false }));
    }
  });

  return (
    <div>
      {/* Checkbox to control modal visibility */}
      <input
        type="checkbox"
        className="modal-toggle"
        checked={enabled}
        onChange={() => {}}
      />
      <div className={`mx-auto modal ${enabled ? 'modal-open' : ''}`}>
        <div className="p-0 modal-box relative" ref={outSideClickRef}>
          {/* Cross icon to close modal with increased size and z-index */}
          <button
            type="button"
            className="absolute top-2 right-4 text-gray-500 hover:text-black text-3xl z-50" // Added z-50 for z-index
            onClick={() => setModal((prev) => ({ ...prev, enabled: false }))}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Header section */}
          <div
            className={`${
              header && 'bg-[#fef8f4]'
            } px-6 py-3 sticky top-0 w-full z-10 flex gap-4 justify-between items-center`}
          >
            <h3 className="text-xl font-bold text-gray-700">{header}</h3>
          </div>

          {/* Body section */}
          <div className="sm:px-6 px-2 py-4 overflow-y-auto">{body(rest)}</div>

          {/* Footer section */}
          {footer && (
            <div className="justify-center modal-action bg-[#fef8f4] px-6 py-4 sticky bottom-0 z-10">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
