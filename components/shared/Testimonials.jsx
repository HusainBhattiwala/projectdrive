export default function Testimonials() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center items-center px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 border border-neutral-300  p-8 rounded-md">
          <div className="boxes flex flex-row justify-between gap-20">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-neutral-900 text-xl font-semibold ml-2 sm:text-lg">
                Sayak Mallick
                <div className="flex flex-row gap-0.5 mt-1 text-primary">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </span>
              <br />
            </div>
            <div className="text-primary">
              <img src="/images/icons/quote.svg" className="w-10 h-10" alt="" />
            </div>
          </div>
          <p className="text-neutral-700 text-sm font-normal leading-snug mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae, qui blanditiis culpa unde dolorum.</p>
        </div>
        <div className="bg-gray-50 border border-neutral-300  p-8 rounded-md">
          <div className="boxes flex flex-row justify-between gap-20">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-neutral-900 text-xl font-semibold ml-2 sm:text-lg">
                Sayak Mallick

                <div className="flex flex-row gap-0.5 mt-1 text-primary">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </span>
              <br />
            </div>
            <div className="text-primary">
              <img src="/images/icons/quote.svg" className="w-10 h-10" alt="" />
            </div>
          </div>
          <p className="text-neutral-700 text-sm font-normal leading-snug mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae, qui blanditiis culpa unde dolorum.</p>
        </div>
        <div className="bg-gray-50 border border-neutral-300  p-8 rounded-md">
          <div className="boxes flex flex-row justify-between gap-20">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-neutral-900 text-xl font-semibold ml-2 sm:text-lg">
                Sayak Mallick

                <div className="flex flex-row gap-0.5 mt-1 text-primary">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </span>
              <br />
            </div>
            <div className="text-primary">
              <img src="/images/icons/quote.svg" className="w-10 h-10" alt="" />
            </div>
          </div>
          <p className="text-neutral-700 text-sm font-normal leading-snug mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae, qui blanditiis culpa unde dolorum.</p>
        </div>
      </div>
    </div>
  );
}
