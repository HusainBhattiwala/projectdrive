import Pic from 'rolnew/util/Pic';

function Title({ subTitle, mainTitle, description, descClass }) {
  return (
    <>
      <h4 className='sm:text-lg text-base font-normal leading-7 text-[#B2B2B2] font-robo'>
        {subTitle}
      </h4>
      <div className='flex flex-col sm:gap-y-3 gap-y-1'>
        <h2 className='sm:text-3xl text-2xl font-medium sm:leading-9 leading-tight text-[#B2B2B2] capitalize'>
          {mainTitle}
        </h2>
        <div className='w-20 md:h-[2px] h-[1px] mx-auto'>
          <Pic
            src='/rolnew/global/underline.svg'
            alt='underline'
            objectFit='cover'
          />
        </div>
      </div>
      {description && (
        <div className={`${descClass}`}>
          <p className='text-sm text-[#B2B2B2]  font-normal leading-5 hidden sm:block'>
            {description}
          </p>
        </div>
      )}
    </>
  );
}

export default Title;
