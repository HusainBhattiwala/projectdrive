/* eslint-disable no-nested-ternary */

'use client';

import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FiCamera } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Image from 'next/image';
import ModalV3 from 'components/ui/ModalV3';
import H1 from 'components/typography/H1';
import Button from 'components/ui/Button';
import H4 from 'components/typography/H4';
import P from 'components/typography/P';
import api from 'components/utils/api';
import 'react-toastify/dist/ReactToastify.css';
import EditProfilePage from 'components/corporate/ui/EditProfilePage';
import EditPasswordPage from 'components/corporate/ui/EditPasswordPage';
import CreditApply from 'components/corporate/ui/CreditApply';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import H2 from 'components/typography/H2';
import Modal from 'components/ui/Modal';
import { MdClose } from 'react-icons/md';
import CancelledConfirmModal from './CancelledConfirmModal';
import AddnewCard from './AddnewCard';

function ViewProfile({ userDetails }) {
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const usertype = storedUser?.usertype;

  const cancelledConfirmModalBody = () => <CancelledConfirmModal />;
  const [cancelleConfirmdModal, setCancelleConfirmdModal] = useState();

  const divRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [addCardModal, setAddCardModal] = useState();
  const [cardDetails, setCardDetails] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [deleteProfile, setDeleteProfile] = useState(null);
  const [userEmailId, setUserEmailId] = useState('');
  const [showPasswordAlertModal, setShowPasswordAlertModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user?.useremailid) {
      setUserEmailId(user?.useremailid);
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setDeleteProfile(null);
  };

  // Use effect to fetch user profile details when the component mounts
  const fetchProfileDetails = useCallback(async () => {
    try {
      const response = await api.get('/corporate/profile');
      if (response.data) {
        setProfile(response.data[0]);
      }
    } catch (error) {
      console.error('Error fetching passengers:', error);
    }
  }, []);

  useEffect(() => {
    fetchProfileDetails();
  }, [fetchProfileDetails]);

  const handleUpdate = async (_profile) => {
    try {
      const response = await api.put('/corporate/profile', _profile);
      if (response.data.status === 1) {
        fetchProfileDetails();
        closeModal();
        toast.success(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      } else {
        toast.error(response.message || 'Profile update Failed.', {
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      // Handle any errors if the request fails
      toast.error(error, {
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  const handleCreditUpdate = async (_credit) => {
    try {
      const response = await api.put('/corporate/profile/credit', _credit);
      if (response.data.status === 1) {
        fetchProfileDetails();
        // Close modal
        closeModal();
        toast.success(response.message, {
          autoClose: 3000,
          theme: 'colored',
        });
      } else {
        toast.error(response.message || 'Credit update Failed.', {
          autoClose: 3000,
          theme: 'colored',
        });
      }
    } catch (error) {
      // Handle any errors if the request fails
      toast.error(error, {
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  const openCreditModal = () => {
    setCreditModalOpen(true);
  };

  const openPasswordModal = () => {
    setPasswordModalOpen(true);
  };

  const closeCreditModal = () => {
    setCreditModalOpen(false);
    setDeleteProfile(null);
  };

  const passwordCloseModal = () => {
    setPasswordModalOpen(false);
    setDeleteProfile(null);
  };

  useEffect(() => {
    async function getCards() {
      const response = await api.get('/card-details');
      if (response.data) {
        setCardDetails(response.data);
      }
    }
    getCards();
  }, [setCardDetails]);

  async function confirmDelete(card) {
    setCancelleConfirmdModal((prev) => ({
      ...prev,
      enabled: false,
    }));
    const deleted = await api.delete(`/card-details/${card.card_token}`);
    if (deleted.data.status === 1) {
      const response = await api.get('/card-details');
      if (response.data) {
        setCardDetails(() => response.data);
      }
      toast.success(deleted.message, {
        autoClose: 3000,
        theme: 'colored',
      });
      toast.clearWaitingQueue();
    }
  }

  function deleteCard(card) {
    setCancelleConfirmdModal(() => ({
      enabled: true,
      header: '',
      body: cancelledConfirmModalBody,
      noOutSideClose: true,
      footer: (
        <div className=" w-full flex justify-between">
          <Button
            className="btn-primary btn-outline"
            onClick={async () => {
              setCancelleConfirmdModal((prev) => ({
                ...prev,
                enabled: false,
              }));
            }}
          >
            Cancel
          </Button>

          <Button
            className="btn-primary"
            onClick={async () => {
              confirmDelete(card);
            }}
          >
            Delete Card
          </Button>
        </div>
      ),
    }));
    return false;
  }

  const handleFileChange = async (e) => {
    if (e.target.files.length === 1) {
      const uploadedFile = e.target.files && e.target.files[0];
      if (uploadedFile.size > 2 * 1024 * 1024) {
        toast.error('File size cannot exceed 2MB', {
          autoClose: 3000,
          theme: 'colored',
        });
        toast.clearWaitingQueue();
        e.target.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const token = sessionStorage.getItem('token');
      const user = JSON.parse(sessionStorage.getItem('user'));
      formData.append('useremailid', user.useremailid);
      const headers = {};
      headers.Authorization = `Bearer ${token}`;
      await fetch(`${process.env.NEXT_PUBLIC_ROOT_API}/corporate/users/image`, {
        headers,
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  async function handleClose() {
    setAddCardModal((prev) => ({
      ...prev,
      enabled: false,
    }));

    const response = await api.get('/card-details');
    if (response.data) {
      setCardDetails(response.data);
    }
  }

  const addCardModalBody = () => (
    <AddnewCard
      email={userEmailId}
      handleClose={handleClose}
      showToast={false}
    />
  );

  function openNewCardModal() {
    setAddCardModal(() => ({
      enabled: true,
      header: 'Add a new card',
      body: addCardModalBody,
      noOutSideClose: true,
      footer: '',
    }));
  }

  function getCardBackgroundImg(brand) {
    if (brand === 'visa') {
      return '/images/visabg.png';
    }
    if (brand === 'mastercard') {
      return '/images/mastercardbg.png';
    }
    return '/images/defaultcardbg.png';
  }

  const openPasswordAlert = () => {
    setShowPasswordAlertModal(true);
  };

  return (
    <>
      {showPasswordAlertModal && (
        <Modal>
          <div className="relative flex flex-col items-center justify-center py-5 bg-white rounded-lg shadow max-w-[450px] mx-auto">
            <div className="flex justify-between items-center w-full px-5">
              <H2 className="font-bold text-primary ">Change Password</H2>
              <MdClose
                className="text-2xl text-primary font-bold cursor-pointer"
                onClick={() => {
                  setShowPasswordAlertModal(false);
                }}
              />
            </div>
            <div className="py-4 px-4">
              <P className="text-[#4a4a4a]">
                If you want to change your password please contact admin.
              </P>
            </div>
            <button
              type="button"
              className="text-primary text-sm font-semibold flex items-center gap-x-2 ml-auto px-4"
              onClick={() => setShowPasswordAlertModal(false)}
            >
              OK
            </button>
          </div>
        </Modal>
      )}
      {profile && (
        <div className="p-5 bg-white rounded-md w-auto" ref={divRef}>
          <div className="flex items-center flex-col md:flex-row">
            <div className="relative w-[70px] h-[70px] ring-2 ring-primary rounded-full">
              <div className="w-[70px] h-[70px] overflow-hidden">
                {preview ? (
                  <Image
                    src={preview}
                    fill
                    alt="File preview"
                    className="!w-[70px] !h-[70px] rounded-full object-cover"
                  />
                ) : profile?.userImgUrl ? (
                  <Image
                    fill
                    src={profile?.userImgUrl}
                    alt="user"
                    className="rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src="/images/Avatar.svg"
                    fill
                    alt="File preview"
                    className="!w-[70px] !h-[70px] rounded-full object-cover"
                  />
                )}
              </div>
              <div className="absolute -bottom-5 right-0 px-2 py-2 rounded-full border border-primary bg-primary">
                <label
                  aria-label="camera"
                  htmlFor="fileInput"
                  className="cursor-pointer"
                >
                  <FiCamera className="text-white" />
                  <input
                    id="fileInput"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
            <div className="sm:pl-5 mt-5 md:mt-0 text-center sm:text-left flex-grow">
              <P className="text-[16px] text-black font-bold">
                {profile?.orgName}
              </P>
              <P className="text-neutral-700 text-sm font-normal">
                {usertype === 'CORPORATE_MASTER'
                  ? `${profile?.orgPocFname} ${profile?.orgPocLname}`
                  : `${storedUser?.userfname} ${storedUser?.userlname}`}
                {' '}
                (
                {usertype === 'CORPORATE_USER' ? 'Manager' : 'Admin'}
                )
              </P>
            </div>
            <div className="col-span-4 md:pt-0 pt-3 justify-center sm:justify-end flex">
              <div
                className={`grid  gap-2 ${
                  usertype === 'CORPORATE_MASTER'
                    ? 'sm:grid-cols-2 grid-cols-1'
                    : 'grid-cols-1'
                }`}
              >
                {usertype === 'CORPORATE_MASTER' && (
                  <Button
                    kind="primary"
                    className="w-44 !rounded-[5px] border border-primary bg-primary px-7 py-3.5 text-xs font-semibold capitalize text-white"
                    onClick={() => openModal({})}
                  >
                    <img
                      src="/images/icons/edit-details.svg"
                      alt="edit-details"
                    />
                    Edit Details
                  </Button>
                )}
                <Button
                  kind="primary"
                  className="w-full  !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white"
                  onClick={() => (usertype === 'CORPORATE_MASTER'
                    ? openPasswordModal({})
                    : openPasswordAlert())}
                >
                  <img src="/images/icons/edit-password.svg" alt="" />
                  Change Password
                </Button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 sm:mt-[80px] mt-6 items-start justify-start">
            <div className="col-span-1 mb-4">
              <div className="flex items-end">
                <div className="w-[22px]">
                  <img src="/images/icons/address.svg" alt="" />
                </div>
                <H4 className="pl-1 font-normal text-neutral-500 text-base">
                  Company Address
                </H4>
              </div>
              {profile?.orgAddressLine1 === profile?.billingAddressLine1
              && profile?.orgAddressLine2 === profile?.billingAddressLine2
              && profile?.orgCity === profile?.billingAddressTown
              && profile?.orgCountry === profile?.billingAddressCountry
              && profile?.orgPostalCode === profile?.billingAddressPostCode ? (
                <>
                  <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                    {profile?.orgAddressLine1}
                    {' '}
                    {profile?.orgAddressLine2}
                    {' '}
                    {profile?.orgCity}
                    {' '}
                    {profile?.orgCountry}
                    {' '}
                    {profile?.orgPostalCode}
                  </P>
                  <P className="ml-6 w-full mt-2 text-primary text-sm font-medium">
                    Billing address same as company address
                  </P>
                </>
                ) : (
                  <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                    {profile?.orgAddressLine1}
                    {' '}
                    {profile?.orgAddressLine2}
                    {' '}
                    {profile?.orgCity}
                    {' '}
                    {profile?.orgCountry}
                    {' '}
                    {profile?.orgPostalCode}
                  </P>
                )}
            </div>
            <div className="col-span-1 mb-4">
              <div className="flex items-center">
                <div className="w-[22px]">
                  <img src="/images/icons/contact.svg" alt="" />
                </div>
                <H4 className="pl-1 font-normal text-neutral-500 text-base">
                  Contact Number
                </H4>
              </div>
              {usertype === 'CORPORATE_MASTER' && (
                <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                  {profile?.orgCountryCode && profile?.orgPhone
                    ? `${profile?.orgCountryCode} ${profile?.orgPhone}`
                    : ''}
                </P>
              )}
              {usertype !== 'CORPORATE_MASTER' && (
                <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                  {storedUser?.usercountrycode}
                  {' '}
                  {storedUser?.usermobileno}
                </P>
              )}
            </div>
            <div className="col-span-1 mb-4">
              <div className="flex items-center">
                <div className="w-[22px]">
                  <img src="/images/icons/email.svg" alt="" />
                </div>
                <H4 className="pl-1 font-normal text-neutral-500 text-base">
                  Email ID
                </H4>
              </div>
              <P className="mt-1 ml-2 pl-5 text-neutral-700 text-sm font-medium break-all">
                {usertype === 'CORPORATE_MASTER'
                  ? profile?.orgEmail
                  : storedUser?.useremailid}
              </P>
            </div>
            <CreditApply
              isOpen={creditModalOpen}
              onRequestClose={closeCreditModal}
              userDetails={userDetails}
              onUpdate={handleCreditUpdate}
              cancelEdit={() => {}}
              deleteProfile={deleteProfile}
            />
            <div className="col-span-1 flex flex-col">
              <div className="flex items-start -mt-1">
                <div className="w-[22px]">
                  <img src="/images/icons/account.svg" alt="Account Type" />
                </div>
                <H4 className="pl-1 font-normal text-neutral-500 text-base">
                  Account Type
                </H4>
              </div>
              <p className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                {profile?.applicationStatus === 'APPROVED'
                  ? 'CREDIT'
                  : 'PREPAID'}
              </p>
              {usertype === 'CORPORATE_MASTER' && (
                <>
                  {profile?.applicationStatus
                    && profile?.applicationStatus !== 'APPROVED' && (
                      <div className="flex flex-row gap-1 mt-2 text-[#14B823] text-sm font-semibold max-w-[80%]">
                        <img
                          className="w-[16px] h-[16px] mt-0.5"
                          src="/images/icons/confirm.svg"
                          alt=""
                        />
                        <p className="leading-0.5">
                          Credit Application under Review!
                        </p>
                      </div>
                  )}
                  {profile?.applicationStatus === 'REJECTED' && (
                    <div className="flex flex-row gap-1 mt-2 text-[#EB1313] text-sm font-semibold items-center">
                      <p className="leading-0.5">Credit Rejected</p>
                      <div
                        className="tooltip custom-tooltip"
                        data-tip={profile?.adminNotes}
                      >
                        <IoMdInformationCircleOutline className="cursor-pointer" />
                      </div>
                    </div>
                  )}
                  {!profile?.applicationStatus && (
                    <button
                      type="button"
                      onClick={() => openCreditModal({})}
                      className="ml-4 mt-2 flex gap-2 text-primary text-sm font-semibold"
                    >
                      <img src="/images/icons/credit.svg" alt="Credit" />
                      <p>Apply for credit</p>
                    </button>
                  )}
                  {profile?.applicationStatus
                    && profile?.applicationStatus !== 'ON_HOLD'
                    && profile?.applicationStatus !== 'APPLIED' && (
                      <button
                        type="button"
                        onClick={() => openCreditModal({})}
                        className="ml-4 mt-2 flex gap-2 text-primary text-sm font-semibold"
                      >
                        <img src="/images/icons/credit.svg" alt="Credit" />
                        <p>Apply for credit</p>
                      </button>
                  )}
                </>
              )}
            </div>

            {profile?.orgAddressLine1 === profile?.billingAddressLine1
            && profile?.orgAddressLine2 === profile?.billingAddressLine2
            && profile?.orgCity === profile?.billingAddressTown
            && profile?.orgCountry === profile?.billingAddressCountry
            && profile?.orgPostalCode === profile?.billingAddressPostCode ? (
              <>
                {/* Existing UI */}
                {/* Existing UI */}
              </>
              ) // Check if any of the billing address fields are not empty
              : profile?.billingAddressLine1
              || profile?.billingAddressLine2
              || profile?.billingAddressTown
              || profile?.billingAddressCountry
              || profile?.billingAddressPostCode ? (
                <div className="col-span-1 mb-4">
                  <div className="flex items-center">
                    <div className="w-[22px]">
                      <img src="/images/icons/address.svg" alt="" />
                    </div>
                    <H4 className="pl-1 font-normal text-neutral-500 text-base">
                      Billing Address
                    </H4>
                  </div>
                  <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                    {profile?.billingAddressLine1}
                    {' '}
                    {profile?.billingAddressLine2}
                    {' '}
                    {profile?.billingAddressTown}
                    {' '}
                    {profile?.billingAddressCountry}
                    {' '}
                    {profile?.billingAddressPostCode}
                  </P>
                </div>
                ) : null}
            <div className="col-span-1 mb-4">
              <div className="flex items-end">
                <div className="w-[22px]">
                  <img src="/images/icons/cost.svg" alt="" />
                </div>
                <H4 className="pl-1 font-normal text-neutral-500 text-base">
                  Cost Center
                </H4>
              </div>
              <P className="mt-1 ml-2 md:max-w-[80%] pl-5 text-neutral-700 text-sm font-medium">
                {profile?.costCenter}
              </P>
            </div>

            <EditProfilePage
              isOpen={modalOpen}
              onRequestClose={closeModal}
              // userDetails={userDetails}
              onUpdate={handleUpdate}
              profile={profile}
              // cancelEdit={() => {
              //   setShowProfile(true);
              // }}
            />
            <EditPasswordPage
              isOpen={passwordModalOpen}
              onRequestClose={passwordCloseModal}
              // userDetails={userDetails}
              // cancelEdit={() => {
              //   setShowProfile(true);
              // }}
              // deleteProfile={deleteProfile}
            />
          </div>
        </div>
      )}

      <H1 className="py-6 leading-none font-bold text-primary md:!text-[32px] tracking-tight sm:pl-0 pl-[14px]">
        Saved Cards
      </H1>
      <div className="p-1 rounded-md w-auto relative">
        <div className="w-full md:block">
          <div className="px-2 py-8 bg-white p-5 rounded-md w-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
              {cardDetails
                && cardDetails.map((card) => (
                  <div className="col-span-1" key={card.last4}>
                    {/*   Card       */}
                    <div className="w-full max-w-[380px] sm:h-48 h-48 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">
                      <img
                        alt="a"
                        className="relative object-cover w-full h-full rounded-xl"
                        src={getCardBackgroundImg(card.brand)}
                      />
                      <div className="w-full sm:px-8 px-3 absolute top-0">
                        <div
                          className="flex justify-between items-center"
                          onClick={() => {
                            deleteCard(card);
                          }}
                        >
                          <span className="font-bold underline text-white cursor-pointer">
                            Delete
                          </span>
                          <img
                            alt="card"
                            className="w-14 h-14"
                            src={`/images/trip-details/cards/${card.brand}.svg`}
                          />
                        </div>
                        <div className="pt-1">
                          <p className="font-light">Card Number</p>
                          <p className="font-medium tracking-more-wider">
                            XXXX XXXX XXXX
                            {' '}
                            {card.last4}
                          </p>
                        </div>
                        <div className="sm:pt-6 pt-2 pr-6">
                          <div className="flex justify-between">
                            <div className="">
                              <p className="font-light text-xs">Valid</p>
                              <p className="font-medium tracking-wider text-sm">
                                XX/XX
                              </p>
                            </div>
                            <div className="">
                              <p className="font-light text-xs">Expiry</p>
                              <p className="font-medium tracking-wider text-sm">
                                XX/XX
                              </p>
                            </div>

                            <div className="">
                              <p className="font-light text-xs">CVV</p>
                              <p className="font-bold tracking-more-wider text-sm">
                                XXX
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="col-span-1">
                <div
                  className="w-full max-w-[380px] sm:h-48 h-48 mx-auto border-2 border-dashed bg-transparent rounded-xl relative text-white shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center flex-col"
                  onClick={openNewCardModal}
                >
                  <P>
                    <img
                      src="/images/icons/newcard.svg"
                      alt="add new card"
                      className="mb-2 text-gray-500"
                    />
                  </P>
                  <P className="text-gray-500 !text-[20px] text-center text-base font-bold">
                    Add a new card
                  </P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalV3 {...addCardModal} setModal={setAddCardModal} />
      <ModalV3 {...cancelleConfirmdModal} setModal={setCancelleConfirmdModal} />
    </>
  );
}

export default ViewProfile;
