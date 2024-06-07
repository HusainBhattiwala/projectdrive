  <div className="bg-[#11202D] text-white w-full min-h-screen">

    {/* Container with background image */}
    <div
      className="relative min-w-screen min-h-screen bg-no-repeat bg-cover bg-center mt-11"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(35, 54, 69, 0) 50.58%, #11202D 89.37%), linear-gradient(180deg, #11202D 10.63%, rgba(35, 54, 69, 0) 50.58%), url(/images/allServices/car.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <div className="block lg:hidden absolute w-full h-full bg-no-repeat bg-cover"
       style={{
         backgroundImage: 'url(/images/allServices/carmob.png)',
         opacity:'0.8' // Mobile image
       }}>
  </div> */}

      {/* Overlay to darken the background image */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-10" />

      {/* Text Container aligned to top left */}
      <div className="absolute left-20 pt-16 px-4 mb-8">
        <h1 className="text-4xl font-bold loading-none text-left hidden lg:block" style={{ lineHeight: '56px', fontFamily: "'Helvetica Neue', sans-serif" }}>
          Tailored Business
          <br />
          {' '}
          Transport Assistance
        </h1>

        <h1 className="text-3xl font-bold leading-none m text-left font-sans lg:hidden">
          Reliable Corporate Transportation
        </h1>

        <p className="mt-4 text-left text-customBlue hidden lg:block">
          Experience the epitome of luxury travel with RolDrive&apos;s personal
          {' '}
          <br />
          chauffeur services. From business trips to leisurely excursions,
          <br />
          {' '}
          we are dedicated to providing you with unparalleled comfort,
          <br />
          {' '}
          convenience, and sophistication.
        </p>
        <p className="mt-4 text-left lg:hidden">
          Your exclusive and dependable chauffeur service indulgence
        </p>
      </div>
    </div>
    <div className="absolute bottom-16 left-20">
      <p className="text-xl text-customGray">
        Do you want to customize your booking?
      </p>
      <p className="font-sans font-normal text-custom-lightGray">
        We offer customised bookings for any location, from bulk or intercity trips to monthly packages.
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-customGray">
          Contact us now
        </p>
        <img src="/images/allServices/Contact.png" alt="Contact Information" className="ml-4" />

      </div>
    </div>
    <div className="absolute top-28 right-20 backdrop-blur mx-auto " style={{ backdropFilter: 'blur(10px)' }}>
      <div className="bg-black bg-opacity-70 flex justify-center items-center p-6 rounded-xl">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Enter name" className="input-style" />
          <input type="text" placeholder="Enter company name" className="input-style" />
          <input type="email" placeholder="Enter company email" className="input-style" />
          <div className="flex space-x-4">
            <div className="input-style flex-1">Choose your country</div>
            <input type="text" placeholder="Enter zip code" className="input-style flex-1" />
          </div>
          <input type="text" placeholder="Enter city" className="input-style" />
          <input type="text" placeholder="Enter company address" className="input-style" />
          <button type="submit" className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300">
            Create Account
          </button>
        </form>
      </div>

    </div>
  </div>;
