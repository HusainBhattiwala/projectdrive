'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Loader from '../shared/Loader';
import H1 from '../typography/H1';
import api from '../utils/api';
import EditPassword from './EditPassword';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';

function FullPage() {
  const [showProfile, setShowProfile] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function getUserProfile() {
      const responce = await api.get('/users');
      if (responce.data) {
        setUserDetails(responce.data);
      }
      setIsLoaded(true);
    }

    getUserProfile();
  }, [router, showEditProfile]);
  return (
    <div className="!bg-[#233b4d] min-h-[90vh] 2xl:px-[120px] lg:px-4 px-[14px] xl:py-10 pt-8 pb-2 md:pb-8 w-auto relative">
      <div className="lg:container mx-auto">
        <div className="mb-8">
          <H1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-none font-bold text-white md:!text-[32px] tracking-tight sm:pl-0 pl-[14px]">
            {
                  !showProfile && showEditProfile && !showEditPassword && 'Edit Profile'
                }
            {
                  showProfile && !showEditProfile && !showEditPassword && 'My Profile'
                }
            {
                  !showProfile && !showEditProfile && showEditPassword && 'Change Password'
                }
          </H1>
        </div>
        {
          isLoaded
            ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {
        // eslint-disable-next-line no-nested-ternary
        showProfile && !showEditProfile
          // eslint-disable-next-line max-len
          ? <ViewProfile userDetails={userDetails} showEditProfile={() => { setShowEditProfile(true); setShowProfile(false); }} changePassword={() => { setShowEditProfile(false); setShowProfile(false); setShowEditPassword(true); }} />
          // eslint-disable-next-line max-len
          : !showEditPassword ? <EditProfile userDetails={userDetails} cancelEdit={() => { setShowEditProfile(false); setShowProfile(true); }} />
            // eslint-disable-next-line max-len
            : <EditPassword cancelEdit={() => { setShowEditProfile(false); setShowProfile(true); setShowEditPassword(false); }} />
        }
              </>
            )
            : <Loader />
}
      </div>
    </div>
  );
}

export default FullPage;
