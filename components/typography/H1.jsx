function H1({ children, className }) {
  return (
    <h1
      className={`lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-none ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1;
