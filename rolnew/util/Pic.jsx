import Image from 'next/image';

const QualityRangeCheck = (val) => val > 0 && val <= 100;

function Pic({ src, alt, objectFit = 'contain', quality, className }) {
  if (quality && !QualityRangeCheck(quality)) {
    throw new Error('wrong quality passed, should be in 0 to 100');
  }

  return (
    <div className='h-full overflow-hidden relative w-full'>
      <Image
        {...(quality && { quality })}
        src={src}
        placeholder='blur'
        blurDataURL='/rolnew/global/placeholder.png'
        alt={alt}
        fill
        style={{ objectFit }}
        className={`transition duration-500 ease-in-out ${className}`}
      />
    </div>
  );
}

export default Pic;
