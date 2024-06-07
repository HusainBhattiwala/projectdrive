import Button from 'components/Button';
import P from 'components/typography/P';
import React from 'react';

function ConfirmAlert({ onRequestClose, handleConfirm, label }) {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] transition-[filter] duration-[0.3s]">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative h-[300px] w-[524px] rounded-lg bg-white p-6 shadow-lg">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="ml-auto mt-[-5px] h-10 w-10 cursor-pointer rounded-full p-2 font-extrabold text-primary hover:bg-red-100"
            onClick={() => { onRequestClose(false); }}
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
          <div className="mt-[-25px]">
            <center>
              <div className="mx-auto p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="62"
                  viewBox="0 0 70 62"
                  fill="none"
                >
                  <path
                    d="M68.7171 48.2224L42.8699 4.47504C41.1725 1.69743 38.2405 0 35 0C31.7595 0 28.8275 1.69743 27.1301 4.47504L1.28288 48.2224C-0.414544 51-0.414545 54.472 1.20573 57.2497C2.90316 60.1816 5.83508 61.879 9.07563 61.879H60.9244C64.1649 61.879 67.174 60.1816 68.7943 57.2497C70.4145 54.472 70.4145 51 68.7171 48.2224ZM65.708 55.4751C64.705 57.1725 62.9304 58.2527 61.0015 58.2527H8.99847C7.06957 58.2527 5.21783 57.2497 4.29196 55.4751C3.28894 53.7776 3.28894 51.6944 4.29196 50.0742L30.2935 6.24963C31.2965 4.5522 33.0711 3.62633 35 3.62633C36.9289 3.62633 38.7806 4.62935 39.7065 6.24963L65.708 49.997C66.6339 51.6944 66.6339 53.7776 65.708 55.4751Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M35 18C33.9032 18 33 18.984 33 20.1789V37.8211C33 39.016 33.9032 40 35 40C36.0968 40 37 39.016 37 37.8211V20.1789C37 18.984 36.0968 18 35 18Z"
                    fill="#A8A8A8"
                  />
                  <path
                    d="M35 44C33.9032 44 33 45.0769 33 46.3846V47.6154C33 48.9231 33.9032 50 35 50C36.0968 50 37 48.9231 37 47.6154V46.3846C37 44.9231 36.0968 44 35 44Z"
                    fill="#A8A8A8"
                  />
                </svg>
              </div>
            </center>
            <P className="text-center text-xl font-semibold leading-7 text-neutral-700">
              {label}
            </P>
            <div className="mt-4 flex justify-center gap-4">
              <Button
                type="button"
                onClick={() => { onRequestClose(false); }}
                className="btn mr-2 !h-10 w-auto !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white hover:border-primary hover:text-primary"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConfirm}
                className="btn mr-2 !h-10 w-auto !rounded-[5px] border border-orange-600 px-5 text-xs font-semibold capitalize !text-primary hover:!border-[#F6F6F6] hover:bg-primary hover:!text-white"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAlert;
