function CorporateLoginToggle({ isEmailLogin, handelClick }) {
  return (
    <>
      <div className="flex items-center justify-center px-6 my-6 sm:flex-row gap-x-4 gap-y-4 lg:px-0">
        {isEmailLogin && (
        <button
          type="button"
          className="sm:max-w-full max-w-[260px] w-full mx-auto cursor-pointer !rounded-md bg-white flex items-center justify-center gap-2 py-4 px-3"
          onClick={() => {
            handelClick(!isEmailLogin);
          }}
        >
          <div className="flex-none">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 5.06445C3.5 3.95988 4.39543 3.06445 5.5 3.06445H8.77924C9.20967 3.06445 9.59181 3.33988 9.72792 3.74823L11.2257 8.24166C11.3831 8.71378 11.1694 9.22976 10.7243 9.45232L8.46701 10.581C9.56925 13.0257 11.5388 14.9952 13.9835 16.0974L15.1121 13.8402C15.3347 13.3951 15.8507 13.1813 16.3228 13.3387L20.8162 14.8365C21.2246 14.9726 21.5 15.3548 21.5 15.7852V19.0645C21.5 20.169 20.6046 21.0645 19.5 21.0645H18.5C10.2157 21.0645 3.5 14.3487 3.5 6.06445V5.06445Z" stroke="#3C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          <span className="text-[#3C3C3C] text-base not-italic font-medium leading-[22px]">Continue with Phone</span>
        </button>
        )}
        {!isEmailLogin && (
        <button
          type="button"
          className="sm:max-w-full max-w-[260px] w-full mx-auto cursor-pointer !rounded-md bg-white flex items-center justify-center gap-2 py-4 px-3"
          onClick={() => {
            handelClick(!isEmailLogin);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M3.5 8.06445L11.3906 13.3249C12.0624 13.7727 12.9376 13.7727 13.6094 13.3249L21.5 8.06445M5.5 19.0645H19.5C20.6046 19.0645 21.5 18.169 21.5 17.0645V7.06445C21.5 5.95988 20.6046 5.06445 19.5 5.06445H5.5C4.39543 5.06445 3.5 5.95988 3.5 7.06445V17.0645C3.5 18.169 4.39543 19.0645 5.5 19.0645Z" stroke="#3C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#3C3C3C] text-base not-italic font-medium leading-[22px]">Continue with Email</span>
        </button>

        )}
      </div>
      <div className="flex w-full justify-between mt-4 items-center py-4">
        <div className="basis-[45%] bg-[#828282] h-[1px]" />
        <p className="basis-[10%] text-center">OR</p>
        <div className="basis-[45%] bg-[#828282] h-[1px]" />
      </div>
    </>
  );
}

export default CorporateLoginToggle;
