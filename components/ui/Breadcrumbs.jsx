function Breadcrumbs({ children }) {
  return (
    <div className="text-sm">
      <ul className="flex text-[13px] sm:text-[14px] font-semibold text-black text-opacity-[0.26]">
        {children}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
