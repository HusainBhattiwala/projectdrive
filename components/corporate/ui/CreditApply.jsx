import React, {
  useState, useRef, useEffect,
} from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Button from '../../ui/Button';
import P from '../../typography/P';
import 'react-toastify/dist/ReactToastify.css';

export default function CreditApply({
  isOpen,
  cancelEdit,
  onUpdate,
  onRequestClose,
  setModal = () => {},
}) {
  const divRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [showLoader, setShowLoader] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    // setError,
    // clearErrors,
  } = useForm();

  const [creditData, setCreditData] = useState({
    creditAmount: '', // Initialize as 0
    creditPeriod: '', // Initialize as 0
    creditNotes: '',
    // orgName: '',
  });

  useEffect(() => {
    setValue('creditAmount', ''); // Initialize as 0
    setValue('creditPeriod', ''); // Initialize as 0
    setValue('creditNotes', '');
    // setValue('orgName', credit?.orgName || '');
    divRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [setValue]);

  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {
    setModal((prev) => ({ ...prev, enabled: false }));
  });

  useEffect(() => {
    setCreditData((preData) => ({
      ...preData,
      creditAmount: '',
      creditPeriod: '',
      creditNotes: '',
    }));
  }, []);

  const handleFormSubmit = async (data) => {
    // Parse creditAmount and creditPeriod to numbers
    const parsedCreditAmount = parseFloat(data?.creditAmount || '');
    const parsedCreditPeriod = parseFloat(data?.creditPeriod || '');

    const payload = {
      creditAmount: parsedCreditAmount,
      creditPeriod: parsedCreditPeriod,
      creditNotes: data?.creditNotes || '',
      orgName: 'Company' || 'Companies',
    };
    onUpdate(payload);
    console.log(data);
    onRequestClose();

    // Reopen the modal with previous data
    setTimeout(() => {
      setModal((prev) => ({ ...prev, enabled: true }));
    }, 2000); // Delay before reopening the modal (adjust as needed)
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ToastContainer
        limit={1}
        onClose={cancelEdit}
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex z-[999] justify-center items-center left-0 top-0 transition-[filter] duration-[0.3s]">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 modal-box max-w-[900px] sm:max-w-[900px]">
            <div className="flex flex-row w-full justify between items-center">
              <h3 className="text-xl font-semibold ml-6 text-primary mb-5">
                Application for CREDIT Account
              </h3>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="p-2 mt-[-5px] ml-auto rounded-full cursor-pointer text-primary font-extrabold w-10 h-10 hover:bg-red-100"
                onClick={() => {
                  onRequestClose();
                  reset();
                }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="px-6">
              <form method="POST" onSubmit={handleSubmit(handleFormSubmit)} className="w-full rounded-lg">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="col-span-2 hidden">
                    <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                      Company Name
                    </P>
                    <div className="relative">
                      <input
                        type="text"
                        {...register('orgName')}
                        value="Company"
                        className="input input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-4 gap-4 rounded-md">
                      <div className="col-span-2 rounded-md">
                        <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                          Credit Amount
                          <span className="text-base font-medium text-red-600"> *</span>
                        </P>
                        <input
                          type="text"
                          {...register('creditAmount', {
                            required: 'Credit amount is required',
                          })}
                          defaultValue={creditData.creditAmount}
                          placeholder="Enter amount applying for"
                          className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                        />
                        {errors.creditAmount && (
                          <span className="text-red-500">{errors.creditAmount.message}</span>
                        )}
                      </div>
                      <div className="col-span-2 rounded-md text-sm">
                        <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                          Credit Period (days)
                          <span className="text-base font-medium text-red-600"> *</span>
                        </P>
                        <input
                          type="text"
                          {...register('creditPeriod', {
                            required: 'Credit period is required',
                          })}
                          defaultValue={creditData.creditPeriod}
                          placeholder="Enter credit period"
                          className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                        />
                        {errors.creditPeriod && (
                          <span className="text-red-500">{errors.creditPeriod.message}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="col-span-2">
                      <P className="py-2 text-sm !font-medium capitalize text-neutral-500">
                        Note
                      </P>
                      <div className="relative">
                        <textarea
                          {...register('creditNotes')}
                          defaultValue={creditData.creditNotes}
                          className="input p-2 input-bordered w-full bg-white text-sm font-medium focus:border-primary focus:outline-none sm:text-[1rem] h-24"
                          placeholder="Enter Something....."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center py-6">
                    <Button
                      type="submit"
                      isLoading={showLoader}
                      className={`w-48 h-12 px-7 py-3.5 bg-orange-600 hover:bg-[#EAEAEA] hover:!text-primary rounded-md justify-center items-center capitalize gap-2.5 inline-flex ${
                        showLoader && ''
                      }`}
                    >
                      <p className="text-base">Send Request</p>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
