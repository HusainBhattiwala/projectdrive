import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';  // Updated import

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const AboutUsContent = () => {
    return (
        <div className="bg-[#091724] text-white min-h-screen flex flex-col items-center justify-center">
            <div className={`px-4 sm:px-8 md:px-16 lg:px-16 py-8 text-center ${montserrat.className}`}>
                <div className="flex justify-center mt-8 mb-4">
                    <Image src="/rolnew/global/RD-logo.png" alt="RolDrive Logo" width={150} height={50} />
                </div>
                <h2 className="text-md sm:text-lg mb-2">Who We Are</h2>
                <p className="text-xl sm:text-2xl mb-1">RolDrive - Your trusted travel partner</p>
                <p className="text-sm sm:text-md mb-8 sm:mb-16">
                    Embark on a journey of luxury and convenience with our global chauffeured car hire service.
                </p>

                <div className="space-y-8 sm:space-y-12 md:space-y-16 text-left ">
                    <section>
                        <h3 className="text-xl sm:text-2xl mb-4">The RolDrive Story</h3>
                        <p className="text-sm sm:text-base">
                            RolDrive is a London-based elite chauffeur service company, ranked as one of the best chauffeur service companies in the UK. Owned by Mehul Patodia and Santosh Sharma, both having more than a decade’s worth of experience in the ground transportation field, RolDrive strives to become one of the most trusted partners for our clients setting benchmarks in the chauffeur industry.
                        </p>
                        <p className="text-sm sm:text-base mb-4">
                            Mr. Patodia likes to believe, ‘We are on a mission to extend our exceptional chauffeur services across the globe making us the preferred choice for premier ground transfers. Be it a luxurious limousine or a sophisticated high-end 4x4, each ride is meticulously coordinated to guarantee your arrival not merely at your journey’s end, but within a domain characterised by elegance and unparalleled comfort.’
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl sm:text-2xl mb-4">The RolDrive Fleet</h3>
                        <p className="text-sm sm:text-base">
                            What sets RolDrive apart is not just our service, but our fleet. With a fleet of cars such as the Rolls Royce, Bentley, Mercedes Benz Maybach and Range Rover, RolDrive provides its clients with a smooth and comfortable journey that they will remember for days.
                        </p>
                        <p className="text-sm sm:text-base mb-4">
                            And to go that extra mile, RolDrive has handpicked its chauffeurs and vehicles for the job so the client receives the absolute best in class service like no other. All our chauffeurs have perfect knowledge of the cities they operate in and will be happy to take you to any location you might have in mind.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl sm:text-2xl mb-4">A Greener And More Sustainable Future</h3>
                        <p className="text-sm sm:text-base mb-4">
                            Furthermore, RolDrive is very conscious about the environment and wishes to protect the planet for future generations. For this reason, RolDrive, having mentioned itself as among the best chauffeur companies in the UK, has also promised to include electric vehicles in its fleet such as the Tesla. Teslas are not only environmentally friendly but also offer performance that can often outperform gasoline vehicles. Thus, making them an excellent choice for anyone looking for luxury and technology clubbed with sustainability. This also allows our clients to make a bold statement to the world saying they care about the future.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl sm:text-2xl mb-4">RolDrive’s Services</h3>
                        <p className="text-sm sm:text-base mb-4">
                            Among the many services provided by RolDrive, the most important ones are airport transfers, sightseeing tours, corporate transfers, wedding and event transfers and private jet transfers.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl sm:text-2xl mb-4">Our Promise To Our Clients</h3>
                        <p className="text-sm sm:text-base mb-4">
                            Another point worth noting is our standard of service. We take pride in informing all our clients that our standards remain global, no matter where you might be. This is one of the primary reasons our customers think of us. You can always be assured that our service quality will stay the same with competitive pricing, regardless of where you are.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUsContent;
