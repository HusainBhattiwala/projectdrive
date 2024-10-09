import React from 'react';

const ContactUsDiv = () => {
    return (
        <>
            <h2 className="text-[#CED5E5] sm:text-xl text-md leading-tight z-[2]">
                Do you want to customise your booking?
            </h2>
            <p className="sm:py-1 text-[#CED5E5] font-normal sm:text-sm text-sm leading-tight w-full px-4 z-[2] sm:pt-1 pt-2">
                We offer customised bookings for any location, from bulk or
                intercity trips to monthly packages.
            </p>
            <div className='flex sm:flex-row flex-col items-center gap-x-4 sm:pt-0 pt-1 gap-y-2 flex-wrap justify-center z-[2]'>
                <p className='text-[#CED5E5] sm:text-sm text-sm'>Contact us now</p>
                <div className='flex sm:gap-x-[12px] gap-x-1.5 justify-between '>
                    <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium'>
                        <img
                            src='/rolnew/global/icons/phone-primary-gold.svg'
                            alt='phone-primary-gold'
                        />
                        <a href='tel:+442045920966' className="sm-text-md text-md">+44 204 592 0966</a>
                    </div>
                    <div className='flex items-center sm:gap-x-2 gap-x-1 text-[#FDC65C] sm:text-base text-xs font-medium sm:pl-0 pl-2'>
                        <img
                            src='/rolnew/global/icons/mail-primary-gold.svg'
                            alt='phone-primary-gold'
                        />
                        <a href="mailto:booking@roldrive.com" className="sm-text-md text-md">booking@roldrive.com</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUsDiv;
