import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div className="bg-[#223544] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h6 className="text-[#B2B2B2] text-lg">Our Service</h6>
          <h2 className="text-3xl font-bold mb-4 text-[#B2B2B2] mt-2">Why Choose Business Transfers with RolDrive</h2>
          <hr className="w-40 h-3 border-[#95978] mx-auto" />
          <p className="text-[#B2B2B2] px-4 mx-4">Embark on a journey of sophistication and convenience with RolDrive&apos;s premier personal chauffeur services. Whether you require a chauffeur for a single ride or long-term arrangements, we cater to your needs with professionalism and elegance.</p>
        </div>

        <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item */}
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">60 Mins Free Waiting</h3>
            <p className="text-[#B2B2B2]">With RolDrive, punctuality is paramount. Our meticulously planned routes and schedules guarantee on-time arrivals, eliminating any disruptions to your business itinerary.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">Zero Delays</h3>
            <p className="text-[#B2B2B2]">Benefit from complimentary waiting time of 60 minutes at airports and 15 minutes at other locations, ensuring seamless transitions for your business engagements.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">24/7 Customer Service</h3>
            <p className="text-[#B2B2B2]">Our dedicated customer support team operates round the clock to address queries instantly and facilitate efficient bookings for your corporate travels.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">Privacy Policy</h3>
            <p className="text-[#B2B2B2]">Your confidentiality is our priority. Our chauffeurs are bound by strict privacy policies, ensuring the utmost discretion and protection of your business affairs.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">Fixed Price</h3>
            <p className="text-[#B2B2B2]">Experience transparent pricing with RolDrive&apos;ss fixed rates, free from hidden charges or surprises, providing clarity and cost-efficiency for your corporate transportation needs.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#11202D] bg-opacity-50">
            <div className="flex items-start justify-start mb-4">

              <Image src="/images/allServices/Hug.png" alt="Image description" layout="" width={3} height={12} className="w-10 h-10" unoptimized />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#B2B2B2]">Flight Monitoring</h3>
            <p className="text-[#B2B2B2]">Enjoy peace of mind with our advanced flight monitoring technology, allowing seamless coordination for airport transfers and ensuring hassle-free journeys for your business trips.</p>
          </div>

        </div>

        <div className="text-center mt-12">
          <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white w-[250px] md:w-64 lg:w-72 font-bold py-3 px-4 rounded-md transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
