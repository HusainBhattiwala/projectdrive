function DownArrowBox() {
    return (
        <div className='sm:w-[74px] sm:h-[74px] w-12 h-12 absolute sm:-bottom-[36px] -bottom-6 left-2/4 -translate-x-2/4 z-10 bg-[#2F4456] flex items-center justify-center flex-col p-4 border border-[#FFFFFF] border-opacity-20 rounded-lg cursor-pointer'>
            <div className='animate-bounce'>
                <img
                    alt='arrow-down'
                    className='w-8 h-8 sm:w-8 sm:h-8 sm:mt-4'
                    src='/rolnew/global/icons/arrow-down.svg'
                />
                <img
                    alt='arrow-down'
                    className='w-8 h-8 -mt-10 sm:w-8 sm:h-8 sm:-mt-5'
                    src='/rolnew/global/icons/arrow-down.svg'
                />
                <img
                    alt='arrow-down'
                    className='w-8 h-8 -mt-10 sm:w-8 sm:h-8 sm:-mt-5'
                    src='/rolnew/global/icons/arrow-down.svg'
                />
            </div>
        </div>
    );
}

export default DownArrowBox;
