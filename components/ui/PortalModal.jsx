import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function PortalModal({
  children,
  isOpen = false,
  modalContentClasses,
  onClose,
  title,
  showCloseIcon = true,
  noPadding,
}) {
  const [modalElement, setModalElement] = useState();

  useEffect(() => {
    setModalElement(document.getElementById('mainModalContainer'));
  }, []);

  if (!modalElement || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000]">
      <div className="flex items-center justify-center w-full h-full bg-opacity-20 bg-black">
        <div
          className={`rounded-xl max-h-[95vh] bg-white border pt-20 ${
            !noPadding && ' py-4'
          } shadow-2xl relative flex flex-col modalContent ${modalContentClasses}`}
        >
          <h4 className="text-2xl font-bold !text-[#061b2cd9] absolute left-6 top-6">
            {title}
          </h4>
          {showCloseIcon && (
            <button
              aria-label="close"
              type="button"
              className="btn-circle hover:bg-red-100 stroke-red-500 btn-ghost absolute top-4 right-4"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  id="close_FILL0_wght400_GRAD0_opsz48_1_"
                  data-name="close_FILL0_wght400_GRAD0_opsz48(1)"
                  d="M12.2,34.35,10.35,32.5,20.5,22.35,10.35,12.2,12.2,10.35,22.35,20.5,32.5,10.35,34.35,12.2,24.2,22.35,34.35,32.5,32.5,34.35,22.35,24.2Z"
                  transform="translate(-10.35 -10.35)"
                />
              </svg>
            </button>
          )}
          <div className="max-h-full overflow-y-auto px-6">{children}</div>
        </div>
      </div>
    </div>,
    modalElement,
  );
}

export default PortalModal;
