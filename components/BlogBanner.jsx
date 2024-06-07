import { Pic } from './ui/Pic';

export default function BlogBanner() {
  return (
    <section>
      <div className="lg:h-[80vh] md:h-[60] sm:h-[50vh] object-cover overflow-hidden">
        <Pic
          src="/images/others/blog-inner-banner.webp"
          alt="RolDrive Blog Image"
        />
      </div>
    </section>
  );
}
