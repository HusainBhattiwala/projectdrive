import { useState } from 'react';
import Button from '../../ui/Button';
import 'react-toastify/dist/ReactToastify.css';
import P from '../../typography/P';

export default function AddNewUser() {
  const [userManagementChecked, setUserManagementChecked] = useState(false);
  const [passengerManagementChecked, setPassengerManagementChecked] = useState(false);
  const [companyPaymentMethodChecked, setCompanyPaymentMethodChecked] = useState(false);
  const [invoicesChecked, setInvoicesChecked] = useState(false);
  const [personalUserManagementChecked, setPersonalUserManagementChecked] = useState(false);
  const [
    personalPassengerManagementChecked,
    setPersonalPassengerManagementChecked,
  ] = useState(false);
  const [
    companyDefaultPaymentMethodChecked,
    setCompanyDefaultPaymentMethodChecked,
  ] = useState(false);
  const [accessToPersonalInvoicesChecked, setAccessToPersonalInvoicesChecked] = useState(false);
  const [bookingsMadeByManagerChecked, setBookingsMadeByManagerChecked] = useState(false);

  return (
    <div className="px-6">
      <form method="POST" className="w-full rounded-lg">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-4 rounded-md">
              <div className="col-span-2 rounded-md">
                <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  First Name
                  <span className="text-red-600 text-base font-medium"> *</span>
                </P>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  maxLength="20"
                  id="firstname"
                  name="firstname"
                  className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
              </div>
              <div className="col-span-2 rounded-md text-sm">
                {/* Last Name input */}
                <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  Last Name
                  <span className="text-red-600 text-base font-medium"> *</span>
                </P>
                <input
                  maxLength="20"
                  placeholder="Enter your last name"
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-4 rounded-md">
              <div className="col-span-2 rounded-md">
                <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  Mobile Number
                  {/* <span className="text-red-600 text-base font-medium"> *</span> */}
                </P>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  maxLength="20"
                  id="firstname"
                  name="firstname"
                  className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
              </div>
              <div className="col-span-2 rounded-md text-sm">
                <P className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
                  Email Address
                  <span className="text-red-600 text-base font-medium"> *</span>
                </P>
                <input
                  maxLength="20"
                  placeholder="Enter your last name"
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="w-full text-start input input-bordered font-medium focus:outline-none pr-0 text-sm sm:text-[1rem]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className="py-2 text-neutral-500 text-[14px] !font-medium capitalize">
              Select Role
            </p>
            <div className="flex items-center space-x-2">
              <input
                className="box-border border-[1px] border-solid w-3 h-3 rounded-full bg-pink-500"
                type="radio"
                name="accountType"
              />
              <img
                src="/images/icons/admin.svg"
                className="w-4 h-4 relative"
                alt=""
              />
              <h3 className="text-neutral-700 text-[15px] font-semibold">
                Admin
              </h3>
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={userManagementChecked}
                  onChange={() => setUserManagementChecked(!userManagementChecked)}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  User Management
                </span>
              </div>
              <div className="flex-grow" />
              {userManagementChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={passengerManagementChecked}
                  onChange={() => setPassengerManagementChecked(!passengerManagementChecked)}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Passenger Management
                </span>
              </div>
              <div className="flex-grow" />
              {passengerManagementChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={companyPaymentMethodChecked}
                  onChange={() => setCompanyPaymentMethodChecked(!companyPaymentMethodChecked)}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Company payment method
                </span>
              </div>
              <div className="flex-grow" />
              {companyPaymentMethodChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={invoicesChecked}
                  onChange={() => setInvoicesChecked(!invoicesChecked)}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Invoices
                </span>
              </div>
              <div className="flex-grow" />
              {invoicesChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="box-border border-[1px] border-solid w-3 h-3 rounded-full bg-pink-500"
                type="radio"
                name="accountType"
              />
              <img
                src="/images/icons/manager.svg"
                className="w-4 h-4 relative"
                alt=""
              />
              <h3 className="text-neutral-700 text-[15px] font-semibold">
                Personal Manager
              </h3>
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={personalUserManagementChecked}
                  onChange={() => setPersonalUserManagementChecked(
                    !personalUserManagementChecked,
                  )}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  User Management
                </span>
              </div>
              <div className="flex-grow" />
              {personalUserManagementChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={personalPassengerManagementChecked}
                  onChange={() => setPersonalPassengerManagementChecked(
                    !personalPassengerManagementChecked,
                  )}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Passenger Management
                </span>
              </div>
              <div className="flex-grow" />
              {personalPassengerManagementChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={companyDefaultPaymentMethodChecked}
                  onChange={() => setCompanyDefaultPaymentMethodChecked(
                    !companyDefaultPaymentMethodChecked,
                  )}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Company default payment method
                </span>
              </div>
              <div className="flex-grow" />
              {companyDefaultPaymentMethodChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={accessToPersonalInvoicesChecked}
                  onChange={() => setAccessToPersonalInvoicesChecked(
                    !accessToPersonalInvoicesChecked,
                  )}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Access to personal invoices
                </span>
              </div>
              <div className="flex-grow" />
              {accessToPersonalInvoicesChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
            <div className="pl-[20px] flex items-center mb-2">
              <div className="">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={bookingsMadeByManagerChecked}
                  onChange={() => setBookingsMadeByManagerChecked(
                    !bookingsMadeByManagerChecked,
                  )}
                />
                <span className="ml-2 text-gray-700 text-xs font-medium mt-[5px]">
                  Bookings made by manager
                </span>
              </div>
              <div className="flex-grow" />
              {bookingsMadeByManagerChecked ? (
                <div className="w-36 h-7 bg-green-200 rounded">
                  <div className="text-green-600 text-center text-sm font-semibold leading-[30px]">
                    Access Granted
                  </div>
                </div>
              ) : (
                <div className="w-36 h-7 bg-red-700 bg-opacity-25 rounded">
                  <div className="text-red-700 text-center text-sm font-semibold leading-[30px]">
                    Access Denied
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 flex justify-center py-6">
            <Button
              type="submit"
              className="w-48 h-12 px-7 py-3.5 bg-orange-600 hover:bg-[#EAEAEA] hover:!text-primary rounded-md justify-center items-center gap-2.5 inline-flex"
            >
              Add User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
