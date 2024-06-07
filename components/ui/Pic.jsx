import Image from 'next/image';

export function Pic({
  src, alt = 'image', className, onClick,
}) {
  return (
    <div
      className={`image-container ${
        onClick && 'cursor-pointer'
      }`}
      onClick={onClick}
    >
      <Image
        src={src}
        fill
        alt={alt || 'image'}
        priority={false}
        className={`image transition ease-in-out ${className}`}
      />
    </div>
  );
}
