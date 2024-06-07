export default function P({ children, className }) {
  return (
    <p className={`${className} text-sm md:text-[14px]`}>{children}</p>
  );
}
