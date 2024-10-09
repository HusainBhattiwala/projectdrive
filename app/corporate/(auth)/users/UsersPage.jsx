'use client';

import UserModalBody from 'components/corporate/ui/UserModalBody';
import Loader from 'components/shared/Loader';
import Button from 'components/ui/Button';
import PortalModal from 'components/ui/PortalModal';
import api from 'components/utils/api';
import P from 'components/typography/P';
import H2 from 'components/typography/H2';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from 'components/ui/Input';

function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [availableRoles, setAvailableRoles] = useState([]);

  // Function to handle input change in the search field
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    if (users.length > 0) {
      const filteredUsersList = users?.reverse().filter((item) => {
        const userName = `${item.user_fname} ${item.user_lname}`;
        const mobileinfo = `${item.usermobileno}`;
        const EmailAddress = `${item.useremailid}`;
        const isNameMatch = userName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const isMobileMatch = mobileinfo
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const isEmailMatch = EmailAddress.toLowerCase().includes(
          searchQuery.toLowerCase(),
        );
        return isNameMatch || isMobileMatch || isEmailMatch;
      });
      setFilteredUsers(filteredUsersList || users);
    }
  }, [searchQuery, users]);

  function getMobileNumber(phone, country) {
    const newPhone = phone.replace('+', '');
    const formattedCountry = country.replace('+', '');
    const formattedNumber = newPhone.replace(formattedCountry, '');
    return formattedNumber;
  }

  // Function to fetch the list of users from the server
  const fetchUsers = async () => {
    try {
      const response = await api.get('/corporate/users/summary');
      setUsers(response.data);
      setFilteredUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Use effect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesResponse = await api.get('/corporate/users/roles');
        setAvailableRoles(rolesResponse.data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    fetchRoles();
  }, []);

  const handleSubmit = async (passedData) => {
    const payload = {
      userFname: passedData.firstName,
      userLname: passedData.lastName,
      userEmailId: passedData.email,
      userCountryCode: passedData.phoneCountry
        ? `+${Number(passedData.phoneCountry)}`
        : '',
      userPhone: getMobileNumber(passedData.phone, passedData.phoneCountry),
      userId: passedData.userId,
      userType:
        passedData.activeRoleCategory === 'Admin'
          ? 'CORPORATE_ADMIN'
          : 'CORPORATE_USER',
      roles: passedData.roles,
    };
    try {
      const userResponse = await api.post('/corporate/users', payload);
      fetchUsers();
      if (userResponse?.data?.status !== 1) {
        toast.error(userResponse?.message, {
          autoClose: 3000,
          theme: 'colored',
        });
        return;
      }
      setCurrentUser(null);
      setModalOpen(false);
      toast.success(
        passedData.userId
          ? 'User updated successfully.'
          : 'User created successfully.',
        {
          autoClose: 3000,
          theme: 'colored',
        },
      );
    } catch (error) {
      console.error(
        passedData.userId ? 'Error updating user:' : 'Error creating user:',
        error,
      );
    }
  };

  const handleDelete = async (id) => {
    // const userConfirmation = confirm('Are you sure you want to delete user');
    try {
      const userDeleteResponse = await api.delete(`/corporate/users/${id}`);
      console.log('userDeleteResponse', userDeleteResponse);
      fetchUsers();
      // Use toast.success to display a success message
      if (userDeleteResponse?.data?.status) {
        toast.success('User deleted successfully');
        return;
      }
      toast.error('Failed to delete user');
    } catch (error) {
      console.log('error', error);
      toast.error('Failed to delete user');
    }
  };

  return (
    <div className="bg-white rounded-md mb-10">
      <div className="w-full hidden md:block">
        <div className="topbar m-5 flex flex-col md:flex-row gap-5 xl:gap-[25rem] lg:gap-[12rem]  justify-between items-center py-4">
          <div className="box flex-grow relative basis-[45%]">
            <Input
              type="text"
              className="block w-full rounded-lg border border-solid border-neutral-200 bg-white p-2.5 pl-4 text-sm text-gray-900"
              placeholder="Search by pick-up, drop-off, job ID and type..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {/* Conditional rendering for search/close icon */}
            {searchQuery && (
              <button
                aria-label="button"
                type="button"
                className="absolute inset-y-0 right-[1px] top-1/2 -translate-y-1/2 flex items-center w-9 h-9 place-content-center text-primary rounded-full bg-white hover:bg-pry-100"
                onClick={() => setSearchQuery('')}
              >
                <img
                  className="h-3 w-3"
                  src="/images/corporate/global/close.svg"
                  alt=""
                />
              </button>
            )}
            {!searchQuery && (
              <button
                aria-label="button"
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            )}
          </div>
          <Button
            kind="primary"
            className="!h-10 w-auto !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white"
            onClick={() => setModalOpen(true)}
          >
            <img
              className="relative h-[19px] w-4"
              src="/images/global/new-passenger.svg"
              alt="new passenger"
            />
            New User
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <div className="boxers relative w-full mb-2">
          <Input
            type="text"
            className="block w-full rounded-lg border border-solid border-neutral-200 bg-white p-2.5 pl-4 text-sm text-gray-900"
            placeholder="Search by pick-up, drop-off, job ID and type..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {/* Conditional rendering for search/close icon */}
          {searchQuery && (
            <button
              aria-label="button"
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
              onClick={() => setSearchQuery('')}
            >
              <img
                className="h-3 w-3"
                src="/images/corporate/global/close.svg"
                alt=""
              />
            </button>
          )}
          {!searchQuery && (
            <button
              aria-label="button"
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="boxers w-full mb-2">
          <Button
            kind="primary"
            className="!h-10 w-full !rounded-[5px] border border-primary bg-primary px-5 text-xs font-semibold capitalize text-white"
            onClick={() => setModalOpen(true)}
          >
            <img
              className="relative h-[19px] w-4"
              src="/images/global/new-passenger.svg"
              alt="new passenger"
            />
            New User
          </Button>
        </div>
      </div>
      <PortalModal
        theme="dark"
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setCurrentUser(null);
        }}
        title={currentUser?.userid ? 'Update User' : 'Add New User'}
      >
        <UserModalBody
          handleSubmit={handleSubmit}
          availableRoles={availableRoles}
          user={currentUser}
        />
      </PortalModal>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {users.length === 0 || filteredUsers.length === 0 ? (
            <div className="flex items-center justify-center flex-col min-h-[35vh] my-auto">
              <div className="w-28 h-28 relative">
                <Image
                  src="/images/global/empty-box.png"
                  fill
                  alt="empty-box"
                />
              </div>
              <H2>No Data Available</H2>
            </div>
          ) : (
            <>
              <div className="lg:grid hidden grid-cols-9 justify-between text-center bg-gray-100 text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-gray-700 py-4 items-center px-2">
                <div className="col-span-2">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    User Name
                  </h6>
                </div>
                <div className="col-span-1">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500 whitespace-nowrap">
                    Phone Number
                  </h6>
                </div>
                <div className="col-span-3">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Email Address
                  </h6>
                </div>
                <div className="col-span-2">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Role
                  </h6>
                </div>
                <div className="col-span-1">
                  <h6 className="text-center text-sm font-medium uppercase leading-[18px] text-neutral-500">
                    Actions
                  </h6>
                </div>
              </div>
              {filteredUsers.length > 0
                && filteredUsers.reverse().map((item) => (
                  <div
                    key={item.userid}
                    className="lg:grid hidden grid-cols-9 justify-between text-center bg-white border-b border-gray-200 hover:bg-gray-50 !font-medium py-6 gap-x-4 items-center"
                  >
                    <div className="col-span-2">
                      <P className="text-center text-sm font-medium leading-[18px] text-neutral-500">
                        {`${item.user_fname} ${item.user_lname}`}
                      </P>
                    </div>
                    <div className="col-span-1">
                      <P className="text-center text-sm font-medium leading-[18px] lg:!whitespace-pre text-primary">
                        {item.usermobileno
                          ? `${item?.usercountrycode} ${item.usermobileno}`
                          : ''}
                      </P>
                    </div>
                    <div className="col-span-3 whitespace-normal">
                      <P className="text-center text-sm font-medium leading-[18px] text-neutral-500 whitespace-normal">
                        {item.useremailid}
                      </P>
                    </div>
                    <div className="col-span-2 whitespace-normal">
                      <button
                        type="button"
                        className={`${item.usertype === 'CORPORATE_ADMIN'
                          ? 'bg-cyan-500 text-cyan-500'
                          : 'bg-yellow-500 text-yellow-500'
                        } !text-xs bg-opacity-20 !py-1 !h-auto rounded hover:bg-opacity-30 w-[60%]`}
                      >
                        {item.usertype === 'CORPORATE_ADMIN'
                          ? 'Admin'
                          : 'Manager'}
                      </button>
                    </div>
                    <div className="col-span-1">
                      <div className="flex gap-2 items-center justify-center">
                        <button
                          type="button"
                          className="cursor-pointer py-2"
                          onClick={() => {
                            setCurrentUser(item);
                            setModalOpen(true);
                          }}
                        >
                          <div className="h-4 w-4 relative">
                            <Image
                              src="/images/global/edit.svg"
                              fill
                              alt="EDIT"
                            />
                          </div>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer py-2"
                          onClick={() => handleDelete(item.userid)}
                        >
                          <div className="h-4 w-4 relative">
                            <Image
                              src="/images/global/delete.svg"
                              fill
                              alt="DELETE"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {filteredUsers.length > 0
          && filteredUsers.map((item) => (
            <div
              key={item?.userid}
              className="bg-white space-y-3 p-4 rounded-lg shadow"
            >
              <div className="flex justify-between gap-2 sm:gap-16 text-sm py-2">
                <div className="boxes w-full">
                  <span
                    className={`p-1.5 text-xs tracking-wider rounded-md ${item?.usertype === 'CORPORATE_ADMIN'
                      ? 'bg-cyan-500 text-cyan-700'
                      : 'bg-yellow-500 text-yellow-500'
                    } bg-opacity-20 px-3 font-semibold text-center !text-[12px] leading-normal`}
                  >
                    {item?.usertype === 'CORPORATE_ADMIN' ? 'Admin' : 'Manager'}
                  </span>
                </div>
                <div className="buttons w-full flex justify-end">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="btn-circle btn btn-ghost cursor-pointer relative"
                      onClick={() => {
                        setCurrentUser(item);
                        setModalOpen(true);
                      }}
                    >
                      <img
                        src="/images/global/edit.svg"
                        className="relative h-5 w-5"
                        alt="EDIT"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn-circle btn btn-ghost cursor-pointer relative"
                      onClick={() => handleDelete(item?.userid)}
                    >
                      <img
                        src="/images/global/delete.svg"
                        className="relative h-5 w-5"
                        alt="DELETE"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-black">
                {`${item?.user_fname} ${item?.user_lname}`}
              </div>
              <div className="text-sm font-medium text-primary">
                {item?.usercountrycode}
                {' '}
                {item?.usermobileno}
              </div>
              <div className="text-sm text-gray-700">{item?.useremailid}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default UsersPage;
