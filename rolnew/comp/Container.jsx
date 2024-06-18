function Container({ children, className }) {
  return (
    <div className={className}>
      <div className='xl:px-[140px] lg:px-20 md:px-10 sm:px-8 px-4 w-full 2xl:container 2xl:px-[140px] mx-auto'>
        {children}
      </div>
    </div>
  );
}

export default Container;
