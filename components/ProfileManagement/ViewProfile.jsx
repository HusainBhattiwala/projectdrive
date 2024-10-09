'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
import { HiPlus } from 'react-icons/hi';
import ModalV3 from 'components/ui/ModalV3';
import H1 from 'components/typography/H1';
import api from 'components/utils/api';
import Button from '../ui/Button';
import H4 from '../typography/H4';
import P from '../typography/P';
import { Pic } from '../ui/Pic';
import 'react-toastify/dist/ReactToastify.css';
import AddnewCard from './AddnewCard';
import CancelledConfirmModal from './CancelledConfirmModal';

function ViewProfile({ showEditProfile, userDetails, changePassword }) {
  const cancelledConfirmModalBody = () => <CancelledConfirmModal />;
  const [cancelleConfirmdModal, setCancelleConfirmdModal] = useState();

  console.log(userDetails);

  const divRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [addCardModal, setAddCardModal] = useState();
  const [cardDetails, setCardDetails] = useState(null);

  async function getCards() {
    const response = await api.get('/card-details');
    if (response?.data) {
      setCardDetails(response?.data);
    }
    return response;
  }

  useEffect(() => {
    const response = getCards();
    if (response.data) {
      setCardDetails(response.data);
    }
  }, [setCardDetails]);

  async function confirmDelete(card) {
    setCancelleConfirmdModal((prev) => ({
      ...prev,
      enabled: false,
    }));
    const deleted = await api.delete(`/card-details/${card.card_token}`);
    console.log(deleted);

    if (deleted.data.status === 1) {
      const response = getCards();
      if (response.data) {
        if (response.message === 'Card not found' || response.data === '') { setCardDetails(null); } else { setCardDetails(() => response.data); }
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
      await fetch(`${process.env.NEXT_PUBLIC_ROOT_API}/users/image`, {
        headers,
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };
  // useEffect(() => {
  //   divRef.current.scrollIntoView({
  //     behavior: 'smooth', block: 'start', inline: 'nearest',
  //   });
  // }, []);

  const src = userDetails.user_img_url
    ? userDetails.user_img_url
    : '/images/Avatar.svg';

  async function handleClose() {
    setAddCardModal((prev) => ({
      ...prev,
      enabled: false,
    }));

    const response = getCards();
    if (response.data) {
      setCardDetails(response.data);
      console.log(cardDetails);
    }
  }

  // eslint-disable-next-line max-len
  const addCardModalBody = () => (
    <AddnewCard email={userDetails?.user_email_id} handleClose={handleClose} getCards={getCards} />
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

  return (
    <>
      {!addCardModal?.enabled && (
        <ToastContainer
          limit={1}
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}

      <div
        className="xl:px-[70px] lg:px-12 px-4 xl:py-[40px] py-8 !text-black bg-white rounded-3xl"
        ref={divRef}
      >
        <div className="flex items-center flex-col sm:flex-row">
          <div className="relative w-[70px] h-[70px] border rounded-full">
            <div className="w-[70px] h-[70px] overflow-hidden">
              {/* <Pic src="/images/icons/user.png" alt="user" /> */}
              {preview ? (
                <Image
                  src={preview}
                  fill
                  alt="File preview"
                  className="!w-[70px] !h-[70px] rounded-full object-cover"
                />
              ) : (
                <Image
                  fill
                  src={src}
                  alt="user"
                  className="rounded-full object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-5 right-0 bg-gray-200 px-2 py-2 rounded-full border border-primary">
              <label
                aria-label="camera"
                htmlFor="fileInput"
                className="cursor-pointer"
              >
                <FiCamera className="text-primary" />
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
          <div className="sm:pl-5 mt-5 sm:mt-0 text-center sm:text-left">
            <P className="text-[16px] text-black font-bold">
              {userDetails.user_fname}
              {' '}
              {userDetails.user_lname}
            </P>
            <P className=" font-normal italic text-black">
              {userDetails.createdate
                && `Joined since ${userDetails.createdate}`}
            </P>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 sm:mt-[80px] mt-6">
          <div className="col-span-4 lg:col-span-2">
            <div className="flex items-end">
              <div className="w-[22px]">
                <Pic src="/images/icons/home.svg" alt="home" />
              </div>
              <H4 className="pl-1 font-bold text-black text-[16px]">Address</H4>
            </div>
            <P className="mt-1 md:max-w-[80%] pl-5 !text-black">
              {(userDetails.address_line_1 || userDetails.address_line_2)
                && (`${userDetails.address_line_1}, ${userDetails.address_line_2}`)}
            </P>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:mt-0 mt-4">
            <div className="flex items-center">
              <div className="w-[14px]">
                <Pic src="/images/icons/mobile.svg" alt="mobile" />
              </div>
              <H4 className="pl-1 font-bold text-black text-[16px]">Mobile</H4>
            </div>
            <P className="mt-1 pl-5 !text-black">
              {userDetails.user_country_code}
              {' '}
              {userDetails.user_mobile_no}
            </P>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:mt-0 mt-4">
            <div className="flex items-center">
              <div className="w-[20px]">
                <Pic src="/images/icons/telephone.svg" alt="telephone" />
              </div>
              <H4 className="pl-1 font-bold text-black text-[16px]">
                Telephone
              </H4>
            </div>
            <P className="mt-1 pl-5 !text-black">{userDetails.telephone}</P>
          </div>
          <div className="lg:col-span-2 col-span-4 sm:mt-10">
            <div className="grid grid-cols-3">
              <div className="sm:col-span-1 col-span-2 sm:mt-0 mt-4">
                <div className="flex items-center">
                  <div className="w-[14px]">
                    <Pic
                      src="/images/icons/locationprimary.svg"
                      alt="Primary location"
                    />
                  </div>
                  <H4 className="pl-1 font-bold text-black text-[16px]">
                    City
                  </H4>
                </div>
                <P className="mt-1 pl-5 !text-black">{userDetails.city}</P>
              </div>
              <div className="sm:col-span-1 col-span-2 sm:mt-0 mt-4">
                <div className="flex items-center">
                  <div className="w-[14px]">
                    <Pic
                      src="/images/icons/locationprimary.svg"
                      alt="Primary location"
                    />
                  </div>
                  <H4 className="pl-1 font-bold text-black text-[16px]">
                    State
                  </H4>
                </div>
                <P className="mt-1 pl-5 !text-black">{userDetails.city_state}</P>
              </div>
              <div className="sm:col-span-1 col-span-2 sm:mt-0 mt-4">
                <div className="flex items-center">
                  <div className="w-[14px]">
                    <Pic
                      src="/images/icons/locationprimary.svg"
                      alt="Primary location"
                    />
                  </div>
                  <H4 className="pl-1 font-bold text-black text-[16px]">Zip</H4>
                </div>
                <P className="mt-1 pl-5 !text-black">{userDetails.zip_code}</P>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 col-span-4 mt-4 sm:mt-10">
            <div className="flex items-center">
              <div className="w-[16px]">
                <Pic src="/images/icons/email.svg" alt="email" />
              </div>
              <H4 className="pl-1 font-bold text-black text-[16px]">
                Email Address
              </H4>
            </div>
            <P className="mt-1 pl-5 break-words pr-2 !text-black">
              {userDetails.user_email_id}
            </P>
          </div>
          <div className="sm:col-span-1 col-span-4 mt-4 sm:mt-10">
            <div className="flex items-center">
              <div className="w-[13px]">
                <Pic src="/images/icons/lock.svg" alt="lock" />
              </div>
              <H4 className="pl-1 font-bold text-black text-[16px]">
                Password
              </H4>
            </div>
            <div className="flex items-center">
              <P className="mt-1 pl-5 !text-black">xxxxxxxxxx</P>
            </div>
          </div>
          <div className="col-span-4 sm:mt-20 mt-8 justify-center sm:justify-end flex">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <Button
                className="btn-primary py-3 px-6 sm:mr-3"
                onClick={showEditProfile}
              >
                Edit Details
              </Button>
              <Button
                className="btn-primary py-3 px-6"
                onClick={changePassword}
              >
                Edit Password
              </Button>
            </div>
          </div>
        </div>
      </div>
      <H1 className="py-6 leading-none font-bold text-white md:!text-[32px] tracking-tight sm:pl-0 pl-[14px]">
        Saved Cards
      </H1>
      <div className="xl:px-[30px] lg:px-6 px-2 xl:py-[40px] py-8 bg-white rounded-3xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
          {cardDetails
            && cardDetails.map((card) => (
              <div className=" col-span-1" key={card.last4}>
                {/*   Card       */}
                <div className="w-full max-w-[380px] sm:h-56 h-48 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">
                  <img
                    alt="a"
                    className="relative object-cover w-full h-full rounded-xl"
                    src={getCardBackgroundImg(card.brand)}
                  />
                  <div className="w-full sm:px-8 px-3 absolute sm:top-8 top-0">
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
                {/*   Card       */}
              </div>
            ))}
          <div className="col-span-1">
            <div
              className="w-full max-w-[380px] sm:h-56 h-48 mx-auto bg-gray-300 rounded-xl relative text-white shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center flex-col"
              onClick={openNewCardModal}
            >
              <P>
                <HiPlus className=" text-gray-500 text-[60px]" />
              </P>
              <P className="text-gray-500 !text-[20px] font-semibold">
                Add a new card
              </P>
            </div>
          </div>
        </div>
        {/* grid */}
      </div>

      <ModalV3 {...addCardModal} setModal={setAddCardModal} />

      <ModalV3 {...cancelleConfirmdModal} setModal={setCancelleConfirmdModal} />
    </>
  );
}

export default ViewProfile;
