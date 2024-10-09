import React from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const CookiePolicy = () => {
    return (
        <div className={`bg-[#1b2b38] text-white min-h-screen flex items-center justify-center ${montserrat.className}`}>
            <style jsx>{`
                p {
                    font-size: 18px; /* text-md */
                    margin-bottom: 0.5rem; /* mb-2 */
                }
            `}</style>
            <div className="mx-auto p-16 md:p-16 lg:p-24">
                <h1 className="text-4xl font-bold mb-16 flex justify-center mt-8">RolDrive - Cookie Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <div className="ml-4">
                            <p>
                                We use cookies and similar technologies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and how you can manage them.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
                        <div className="ml-4">
                            <p>
                                Cookies are small text files placed on your device by websites that you visit. They help websites work more efficiently, improve your browsing experience, and provide information to the website owners.
                            </p>
                            <p>
                                Cookies can be "persistent" (stored on your device for a set period) or "session" cookies (deleted once you close your browser).
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
                        <div className="ml-4">
                            <p>
                                We use cookies to provide services and functionality, analyze site performance, and deliver personalized content. The types of cookies we use include:
                            </p>
                            <div className="ml-4">
                                <p><strong>(a) Essential Cookies:</strong> These cookies are necessary for the website to function properly, such as logging in and remembering your preferences.</p>
                                <p><strong>(b) Performance Cookies:</strong> These cookies help us understand how visitors use our website, enabling us to improve it.</p>
                                <p><strong>(c) Personalization Cookies:</strong> These cookies remember your settings and choices to offer a personalized browsing experience.</p>
                                <p><strong>(d) Advertising Cookies:</strong> We use these cookies to deliver personalized ads and track the effectiveness of marketing campaigns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
                        <div className="ml-4">
                            <p>
                                You can control or delete cookies through your browser settings. However, disabling cookies may affect your ability to use certain features on our website.
                            </p>
                            <p>
                                Here's how to manage cookies in some popular browsers:
                            </p>
                            <div className="ml-4">
                                <p><strong>Google Chrome:</strong> Go to Settings - Privacy and Security - Cookies and other site data.</p>
                                <p><strong>Mozilla Firefox:</strong> Go to Preferences - Privacy & Security - Cookies and Site Data.</p>
                                <p><strong>Safari:</strong> Go to Preferences - Privacy - Manage Website Data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
                        <div className="ml-4">
                            <p>
                                We may also use third-party cookies provided by external services such as Google Analytics to analyze website traffic. These cookies collect information about how you use our website without identifying you personally.
                            </p>
                            <p>
                                For more information on Google Analytics and its cookies, visit the <a href="https://policies.google.com/privacy" className="text-blue-500 underline">Google Privacy Policy</a>.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
                        <div className="ml-4">
                            <p>
                                We may update this Cookie Policy from time to time to reflect changes in our use of cookies or for legal and regulatory reasons. Please check back periodically for updates.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                        <div className="ml-4">
                            <p>
                                If you have any questions about our Cookie Policy, please contact us at <a href="mailto:info@roldrive.com" className="text-blue-500 underline">info@roldrive.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
