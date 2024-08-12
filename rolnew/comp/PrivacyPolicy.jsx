import React from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const PrivacyPolicy = () => {
    return (
        <div className={`bg-[#1b2b38] text-white min-h-screen flex items-center justify-center ${montserrat.className}`}>
            <style jsx>{`
                p {
                    font-size: 18px; /* text-md */
                    margin-bottom: 0.5rem; /* mb-2 */
                }
            `}</style>
            <div className="mx-auto p-16 md:p-16 lg:p-24">
                <h1 className="text-4xl font-bold mb-16 flex justify-center mt-8">RolDrive - Privacy and Cookies Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <div className="ml-4">
                            <p>
                                1.1 We are committed to safeguarding the privacy of our website visitors; in this policy, we explain how we will treat your personal information.
                            </p>
                            <p>
                                1.2 We ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Collecting Personal Information</h2>
                        <div className="ml-4">
                            <p>
                                2.1 We may collect, store, and use the following kinds of personal information:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) Information about your computer and your visits to and use of this website, including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths.
                                </p>
                                <p>
                                    (b) Information that you provide to us when applying for an account through our website, including your name, gender, date of birth, address details, and any other relevant personal and financial data.
                                </p>
                                <p>
                                    (c) Information that you provide to us when using the services on our website, or that is generated in the course of the use of those services, including the timing, frequency, and pattern of service use.
                                </p>
                                <p>
                                    (d) Information contained in or relating to any communication that you send to us or send through our website, including the communication content and metadata associated with the communication.
                                </p>
                                <p>
                                    (e) Any other personal information that you choose to send to us; and provide details of other personal information collected.
                                </p>
                            </div>
                            <p>
                                2.2 Before you disclose to us the personal information of another person, you must obtain that person's consent to both the disclosure and the processing of that personal information in accordance with this policy.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Using Personal Information</h2>
                        <div className="ml-4">
                            <p>
                                3.1 Personal information submitted to us through our website will be used for the purposes specified in this policy.
                            </p>
                            <p>
                                3.2 We may use your personal information to:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) Administer our website and business.
                                </p>
                                <p>
                                    (b) Enable your use of the services available on our website.
                                </p>
                                <p>
                                    (c) Send you email notifications that you have specifically requested.
                                </p>
                                <p>
                                    (d) Send you communications relating to our business, where you have specifically agreed to this, by email or similar technology. You can inform us at any time if you no longer require communications.
                                </p>
                                <p>
                                    (e) Provide third parties with statistical information about our users, but those third parties will not be able to identify any individual user from that information.
                                </p>
                                <p>
                                    (f) Deal with inquiries and complaints made by or about you relating to our website.
                                </p>
                                <p>
                                    (g) Keep our website secure and prevent fraud.
                                </p>
                            </div>
                            <p>
                                3.3 We will not, without your express consent, supply your personal information to any third party for the purpose of their or any other third party's direct marketing.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Disclosing Personal Information</h2>
                        <div className="ml-4">
                            <p>
                                4.1 We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers, or subcontractors insofar as reasonably necessary for the purposes set out in this policy.
                            </p>
                            <p>
                                4.2 We may disclose your personal information:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) To the extent that we are required to do so by law.
                                </p>
                                <p>
                                    (b) In connection with any ongoing or prospective legal proceedings.
                                </p>
                                <p>
                                    (c) In order to establish, exercise, or defend our legal rights, including providing information to others for the purposes of fraud prevention.
                                </p>
                                <p>
                                    (d) To any person whom we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information.
                                </p>
                            </div>
                            <p>
                                4.3 Except as provided in this policy, we will not provide your personal information to third parties.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Retaining Personal Information</h2>
                        <div className="ml-4">
                            <p>
                                5.1 This Section 5 sets out our data retention policies and procedures, designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal information.
                            </p>
                            <p>
                                5.2 Personal information that we process for any purpose or purposes in connection with our business operations and service delivery shall not be kept for longer than is necessary for that purpose or those purposes.
                            </p>
                            <p>
                                5.3 Notwithstanding the other provisions of this Section 5, we will retain documents (including electronic documents) containing personal data:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) To the extent that we are required to do so by law.
                                </p>
                                <p>
                                    (b) If we believe that the documents may be relevant to any ongoing or prospective legal proceedings.
                                </p>
                                <p>
                                    (c) In order to establish, exercise, or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Security of Personal Information</h2>
                        <div className="ml-4">
                            <p>
                                6.1 We will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information.
                            </p>
                            <p>
                                6.2 We will store all the personal information you provide on our secure, password- and firewall-protected servers.
                            </p>
                            <p>
                                6.3 All electronic financial transactions entered into through our website will be protected by encryption technology.
                            </p>
                            <p>
                                6.4 You acknowledge that the transmission of information over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.
                            </p>
                            <p>
                                6.5 You are responsible for keeping the password you use for accessing our corporate or private account confidential; we will not ask you for your password except when you log in to our website.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Amendments</h2>
                        <div className="ml-4">
                            <p>
                                7.1 We may update this policy from time to time by publishing a new version on our website.
                            </p>
                            <p>
                                7.2 You should check this page occasionally to ensure you are happy with any changes to this policy.
                            </p>
                            <p>
                                7.3 We may notify you of changes to this policy by email.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
                        <div className="ml-4">
                            <p>
                                8.1 You may instruct us to provide you with any personal information we hold about you; provision of such information will be subject to:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) The supply of appropriate evidence of your identity. For this purpose, we will usually accept a photocopy of your passport certified by a solicitor or bank plus an original copy of a utility bill showing your current address.
                                </p>
                            </div>
                            <p>
                                8.2 We may withhold personal information that you request to the extent permitted by law.
                            </p>
                            <p>
                                8.3 You may instruct us at any time not to process your personal information for marketing purposes.
                            </p>
                            <p>
                                8.4 In practice, you will usually either expressly agree in advance to our use of your personal information for marketing purposes, or we will provide you with an opportunity to opt out of the use of your personal information for marketing purposes.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Websites</h2>
                        <div className="ml-4">
                            <p>
                                9.1 Our website includes hyperlinks to, and details of, third-party websites.
                            </p>
                            <p>
                                9.2 We have no control over, and are not responsible for, the privacy policies and practices of third parties.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Updating Information</h2>
                        <div className="ml-4">
                            <p>
                                10.1 Please let us know if the personal information that we hold about you needs to be corrected or updated.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">11. About Cookies</h2>
                        <div className="ml-4">
                            <p>
                                11.1 A cookie is a file containing an identifier—a string of letters and numbers—that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
                            </p>
                            <p>
                                11.2 Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
                            </p>
                            <p>
                                11.3 Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
                            </p>
                            <p>
                                11.4 Cookies can be used by web servers to identify and track users as they navigate different pages on a website and identify users returning to a website.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">12. Our Cookies</h2>
                        <div className="ml-4">
                            <p>
                                12.1 We use both session and persistent cookies on our website.
                            </p>
                            <p>
                                12.2 The names of the cookies that we use on our website, and the purposes for which they are used, are set out below:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) We use cookies on our website to recognise a computer when a user visits the website, track users as they navigate the website, improve the website's usability, analyse the use of the website, administer the website, prevent fraud, and improve the security of the website, personalise the website for each user.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">13. Analytics Cookies</h2>
                        <div className="ml-4">
                            <p>
                                13.1 We use Google Analytics Universal to analyse the use of our website.
                            </p>
                            <p>
                                13.2 Our analytics service provider generates statistical and other information about website use by means of cookies.
                            </p>
                            <p>
                                13.3 The information generated relating to our website is used to create reports about the use of our website.
                            </p>
                            <p>
                                13.4 Our analytics service provider's privacy policy is available at: <a href="http://www.google.com/policies/privacy" className="text-blue-500 underline">http://www.google.com/policies/privacy</a>.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">14. Blocking Cookies</h2>
                        <div className="ml-4">
                            <p>
                                14.1 Most browsers allow you to refuse to accept cookies; for example:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) In Internet Explorer, you can block cookies using the cookie handling override settings available by clicking "Tools," "Internet Options," "Privacy," and then "Advanced."
                                </p>
                                <p>
                                    (b) In Firefox, you can block all cookies by clicking "Tools," "Options," "Privacy," selecting "Use custom settings for history" from the drop-down menu, and unticking "Accept cookies from sites."
                                </p>
                                <p>
                                    (c) In Chrome, you can block all cookies by accessing the "Customize and control" menu, clicking "Settings," "Show advanced settings," and "Content settings," and then selecting "Block sites from setting any data" under the "Cookies" heading.
                                </p>
                            </div>
                            <p>
                                14.2 Blocking all cookies will have a negative impact upon the usability of many websites.
                            </p>
                            <p>
                                14.3 If you block cookies, you will not be able to use all the features on our website.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">15. Deleting Cookies</h2>
                        <div className="ml-4">
                            <p>
                                15.1 You can delete cookies already stored on your computer; for example:
                            </p>
                            <div className="ml-4">
                                <p>
                                    (a) In Internet Explorer, you must manually delete cookie files. You can find instructions for doing so at <a href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11" className="text-blue-500 underline">http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11</a>.
                                </p>
                                <p>
                                    (b) In Firefox, you can delete cookies by clicking "Tools," "Options," and "Privacy," then selecting "Use custom settings for history" from the drop-down menu, clicking "Show Cookies," and then clicking "Remove All Cookies."
                                </p>
                                <p>
                                    (c) In Chrome, you can delete all cookies by accessing the "Customize and control" menu, and clicking "Settings," "Show advanced settings," and "Clear browsing data," and then selecting "Cookies and other site and plug-in data" before clicking "Clear browsing data."
                                </p>
                            </div>
                            <p>
                                15.2 Deleting cookies will have a negative impact on the usability of many websites.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">16. Data Protection Registration Number</h2>
                        <div className="ml-4">
                            <p>
                                16.1 We are registered as a data controller with the UK Information Commissioner's Office under registration number C1415369.
                            </p>
                            <p>
                                16.2 This website is owned and operated by RolDrive Ltd. RolDrive Ltd is a company registered in the UK (number 13950372). Our head office is located at 134 Buckingham Palace Road, London, England, SW1W 9SA. If you have any other questions about this policy, you can write to us at our head office or email <a href="mailto:info@roldrive.com" className="text-blue-500 underline">info@roldrive.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
