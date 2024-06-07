import Image from 'next/image';

export function BackgroundImage({ src, alt, className }) {
  return (
    <div className="overflow-hidden h-full" style={{ position: 'relative' }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        sizes=""
        className={`transition duration-500 ease-in-out ${className}`}
        quality={100}
      />
    </div>
  );
}
