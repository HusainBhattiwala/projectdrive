function H2({ children, className }) {
  return (
    <h2 className={`${className} md:text-xl text-lg leading-tight`}>{children}</h2>
  );
}

export default H2;
