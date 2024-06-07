import { useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function ModalV3({
  enabled = false,
  header = '',
  body = () => {},
  footer = '',
  setModal = () => {},
  noOutSideClose = false,
  ...rest
}) {
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {
    if (!noOutSideClose && enabled) {
      setModal((prev) => ({ ...prev, enabled: false }));
    }
  });

  return (
    <div>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={enabled}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="p-0 modal-box bg-white rounded-lg max-w-[900px]" ref={outSideClickRef}>
          <div
            className={`${
              header && 'bg-white'
            } px-6 py-3 sticky top-0 w-full z-10 flex gap-4 justify-between items-center text-center`}
          >
            <h3 className="text-xl font-bold text-primary">{header}</h3>

            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="p-2 rounded-full cursor-pointer text-primary font-extrabold w-10 h-10 hover:bg-red-100"
              onClick={() => setModal((prev) => ({ ...prev, enabled: false }))}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="overflow-y-auto bg-white">{body(rest)}</div>
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
