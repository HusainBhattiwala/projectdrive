'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Loader from 'components/shared/Loader';
import EditProfile from 'components/corporate/ProfileManagement/EditProfile';
import EditPassword from 'components/corporate/ProfileManagement/EditPassword';
import api from 'components/utils/api';
import ViewProfile from 'components/corporate/ProfileManagement/ViewProfile';

function FullPage() {
  const [showProfile, setShowProfile] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getUserProfile() {
      const response = await api.get('/corporate/profile');
      if (response.data) {
        setUserDetails(response.data);
      }
      setIsLoaded(true);
    }

    getUserProfile();
  }, [router, showEditProfile]);
  return (
    <div className="bg-[#FEF8F4] rounded-md w-auto relative">
      <div className="w-full md:block">
        {isLoaded ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {
              // eslint-disable-next-line no-nested-ternary
              showProfile && !showEditProfile ? (
                // eslint-disable-next-line max-len
                <ViewProfile
                  userDetails={userDetails}
                  showEditProfile={() => {
                    setShowEditProfile(true);
                    setShowProfile(false);
                  }}
                  changePassword={() => {
                    setShowEditProfile(false);
                    setShowProfile(false);
                    setShowEditPassword(true);
                  }}
                />
              ) // eslint-disable-next-line max-len
                : !showEditPassword ? (
                  <EditProfile
                    userDetails={userDetails}
                    cancelEdit={() => {
                      setShowEditProfile(false);
                      setShowProfile(true);
                    }}
                  />
                ) : (
                // eslint-disable-next-line max-len
                  <EditPassword
                    cancelEdit={() => {
                      setShowEditProfile(false);
                      setShowProfile(true);
                      setShowEditPassword(false);
                    }}
                  />
                )
            }
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default FullPage;
