import React from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const TermsAndConditions = () => {
    return (
        <div className={`bg-[#1b2b38] text-white min-h-screen flex items-center justify-center ${montserrat.className}`}>
            <style jsx>{`
                p {
                    font-size: 18px; /* text-md */
                    margin-bottom: 0.5rem; /* mb-2 */
                }
            `}</style>
            <div className="mx-auto p-16 md:p-16 lg:p-24">
                <h1 className="text-4xl font-bold mb-16 flex justify-center mt-8">RolDrive - Terms and Conditions</h1>

                <div className="space-y-6 text-gray-300">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Key Principles</h2>
                        <div className="ml-4">
                            <p className="mb-2">
                                These Terms delineate the parameters for utilizing RolDrive Transportation Services within the United Kingdom. Additional terms may be requisite for other RolDrive Products, explicitly governing service usage conditions.
                            </p>
                            <p className="mb-2">
                                RolDrive, acting as a private hire vehicle operator under the pertinent private hire vehicle operating license, aligns its operations with United Kingdom private hire legislation and regulations. Users engage in a direct contractual relationship with RolDrive for the provision of Transportation Services.
                            </p>
                            <p className="mb-2">
                                RolDrive reserves the prerogative to periodically update and amend these Terms. Users are urged to peruse the latest Terms before engaging with the App(s)/Website(s) Services or availing themselves of Transportation Services, as the most recent iteration will hold sway.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">About us</h2>
                        <div className="ml-4">
                            <p className="mb-2">
                                RolDrive Limited, a private limited liability company registered in London, England (Company No. 13950372), maintains its headquarters at 134 Buckingham Palace Road, London, England, SW1W 9SA. Correspondence is welcome through info@roldrive.com or +44 204 592 0966.
                            </p>
                            <p className="mb-2">
                                Note: RolDrive, in itself, does not furnish services directly to End Customers; instead, it orchestrates services arranged by Partners selected by RolDrive.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
                        <div className="ml-4">
                            <p className="mb-2">The subsequent terms are endowed with specific meanings in this document:</p>
                            <ul className="list-disc list-inside space-y-2 ml-6">
                                <li>"1998 Act": Denotes the Private Hire Vehicles (London) Act 1998.</li>
                                <li>"App(s)/Website(s) Services": Encompasses services provided by RolDrive, comprising access to mobile applications and/or websites enabling users to requisition and receive RolDrive Transportation Services, alongside payment processing services.</li>
                                <li>"Booking": Signifies a reservation for RolDrive Transportation Services.</li>
                                <li>"Legislation": Encompasses the 1998 Act and related regulations, including local government regulations governing PHV operations.</li>
                                <li>"PHV": Abbreviates private hire vehicle.</li>
                                <li>"RolDrive": Alludes to RolDrive Limited, a private limited liability company registered in London, England (Company No. 13950372).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">General Terms</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">1. Overview</h3>
                            <div className="ml-4">
                                <p className="mb-2">1.1 These Terms govern the access and utilization of RolDrive’s mobile applications, websites, and Transportation Services.</p>
                                <p className="mb-2">1.2 Users must meticulously peruse and assent to these Terms before accessing the aforementioned services. These Terms supersede antecedent agreements related to RolDrive’s services.</p>
                                <p className="mb-2">1.3 Any user-specific and supplemental terms germane to App(s)/Website(s) Services and Transportation Services shall hold precedence.</p>
                                <p className="mb-2">1.4 Utilization of App(s)/Website(s) Services affirms the acceptance of these Terms. Dissent warrants non-access to App(s)/Website(s) Services.</p>
                                <p className="mb-2">1.5 Communication may transpire through push notification, phone call, text message, or email, leveraging details provided during App(s)/Website(s) Services registration. The term "writing" or "written" encompasses emails, texts, and push notifications.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">2. RolDrive Provided Services</h3>
                            <div className="ml-4">
                                <p className="mb-2">2.1 Specific terms governing RolDrive Provided Services, excluding Transportation Services, may be explicated in additional terms or separate agreements. RolDrive, for Transportation Services, forges a direct contractual nexus with users.</p>
                                <p className="mb-2">2.2 The acceptance or repudiation of service requests by RolDrive is communicated through App(s)/Website(s) Services. Terms/agreements are specified when a direct contract crystallizes.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">3. Privacy Notice</h3>
                            <div className="ml-4">
                                <p className="mb-2">3.1 RolDrive processes user information in alignment with RolDrive’s Privacy Policy.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">4. Charges and Payment</h3>
                            <div className="ml-4">
                                <p className="mb-2">4.1 Charges for Transportation Services.</p>
                                <p className="mb-2">4.1.1 Upon making a request through App(s)/Website(s) Services, users undertake to remit the pertinent charges, as elucidated in App(s)/Website(s) Services, and assume responsibility for any charges or fees tethered to their account.</p>
                                <p className="mb-2">4.1.2 Depending on the Transportation Services, the charges, inclusive of location-based variables, may be exhibited on App(s)/Website(s) Services prior to a request being lodged. In alternative scenarios, charges hinge on the utilization of Transportation Services, with RolDrive potentially offering an estimate. It is imperative to acknowledge that the ultimate charge may deviate from the estimate.</p>
                                <p className="mb-2">4.1.3 Supplementary charges, costs, and/or fines may be levied for user-induced or misuse-related circumstances concerning Transportation Services (e.g., repair or cleaning fees).</p>
                                <p className="mb-2">4.1.4 In instances where Transportation Services cannot be executed due to user action or inaction (e.g., non-attendance at the pick-up or delivery location), all charges may apply.</p>
                                <p className="mb-2">4.1.5 Post the provision of RolDrive Transportation Services, users may receive an invoice from RolDrive, inclusive of applicable VAT.</p>
                                <p className="mb-2">4.1.6 The charges may undergo modification in App(s)/Website(s) Services periodically.</p>
                                <p className="mb-2">4.1.7 Gratuity is not encompassed within the charges. Where available, users can proffer tips in person or through App(s)/Website(s) Services, with RolDrive collecting and remitting tips paid through the latter.</p>
                                <p className="mb-2">4.1.8 Unless otherwise stipulated, all charges are immediately due upon a request being lodged. Payment will be facilitated by RolDrive utilizing the preferred payment method linked to the user's account, with an ensuing email receipt. If the primary payment method proves unviable, RolDrive may resort to a secondary method, if available. In cases where payment methods are inaccessible, efforts to procure payment may persist.</p>
                                <p className="mb-2">4.1.9 Charges include relevant taxes, such as VAT, unless expressly stated otherwise.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">5. Cancellation</h3>
                            <div className="ml-4">
                                <p className="mb-2">5.1 Discretion to cancel a Transportation Services request may not be universally conferred to users. In cases where cancellation is feasible, users may incur a cancellation fee.</p>
                                <p className="mb-2">5.2 Cancellation prior to the commencement of an accepted booking entails a "Cancellation Refund," delineated as follows for transfer services:</p>
                                <ul className="list-disc list-inside ml-6 space-y-2 mb-4">
                                    <li>100% of the booking charge if canceled more than 4 hours before the booking commences.</li>
                                    <li>No refund if canceled less than 4 hours before the booking commences.</li>
                                </ul>
                                <p className="mb-2">5.3 RolDrive reserves the right to decline requests and terminate Transportation Services in the presence of reasonable doubt concerning the accuracy or authenticity of the request or associated contact information. In such instances, a cancellation fee may be applicable, with the prospect of contract termination by RolDrive.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">6. Termination</h3>
                            <div className="ml-4">
                                <p className="mb-2">6.1 Users retain the autonomy to employ App(s)/Website(s) Services (where and when available) and possess the authority to terminate these Terms and App(s)/Website(s) Services by closing their account.</p>
                                <p className="mb-2">6.2 RolDrive reserves the prerogative to terminate these Terms and a user's access to App(s)/Website(s) Services forthwith, should a breach of these Terms or any other agreement between the user and RolDrive for the provision of Transportation Services be discerned.</p>
                                <p className="mb-2">6.3 RolDrive, at its sole discretion, may terminate these Terms or discontinue App(s)/Website(s) Services, affording users reasonable advance written notice and an opportunity to use App(s)/Website(s) Services.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">7. Governing Law and Dispute Resolution</h3>
                            <div className="ml-4">
                                <p className="mb-2">7.1 These Terms are governed by and construed in accordance with English law.</p>
                                <p className="mb-2">7.2 In the event of a dispute arising from or in connection with these Terms, the parties shall endeavor to amicably resolve the dispute through negotiations. Should negotiation prove fruitless within a reasonable period, the parties consent to the exclusive jurisdiction of the courts of England and Wales.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">8. Your Liability and Indemnity</h3>
                            <div className="ml-4">
                                <p className="mb-2">8.1 You are responsible for any damage suffered by us due to your violation of these Terms, misuse of the App(s)/Website(s) Services and Transportation Services, or violation of any laws. You are accountable for all activities conducted through your account unless you do not authorize such activities and are not otherwise negligent.</p>
                                <p className="mb-2">8.2 To access the App(s)/Website(s) Services, you agree to indemnify, defend (at our option), and hold us, along with our officers, directors, and employees, harmless from and against all claims, liabilities, expenses, damages, penalties, fines, social security contributions, and taxes arising from a breach of these Terms, violation of applicable law, or third-party claims related to your use of Transportation Services.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">9. Limitation of Liability</h3>
                            <div className="ml-4">
                                <p className="mb-2">9.1 Nothing in these Terms limits or excludes any liability that cannot legally be limited or excluded, including liability for death or personal injury caused by negligence and liability for fraud or fraudulent misrepresentation. This provision does not alter your rights as a consumer that cannot be excluded under applicable law.</p>
                                <p className="mb-2">9.2 RolDrive, its affiliates, directors, officers, employees, workers, agents, and/or subcontractors are not liable under or in relation to these Terms for any of the following:</p>
                                <ul className="list-disc list-inside ml-6 space-y-2 mb-4">
                                    <li>loss of profits;</li>
                                    <li>loss of sales or business;</li>
                                    <li>loss of agreements or contracts;</li>
                                    <li>loss of anticipated savings;</li>
                                    <li>loss of use or corruption of software, data, or information;</li>
                                    <li>loss of or damage to goodwill; and</li>
                                    <li>indirect or consequential loss.</li>
                                </ul>
                                <p className="mb-2">9.3 RolDrive, its affiliates, directors, officers, employees, workers, agents, and/or subcontractors are not liable for:</p>
                                <ul className="list-disc list-inside ml-6 space-y-2">
                                    <li>9.3.1 Any Booking not accepted or otherwise canceled by RolDrive in relation to Transportation Services.</li>
                                    <li>9.3.4 Delay or failure in performance resulting from causes beyond our reasonable control.</li>
                                    <li>9.3.5 Our total liability to you, arising from these Terms or their subject matter, or in connection with the provision of App(s)/Website(s) Services or Transportation Services, shall not exceed one hundred pounds sterling (£100), unless otherwise agreed for specific Transportation Services.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. General</h2>
                        <div className="ml-4">
                            <p className="mb-2">10.1 RolDrive may change these Terms, and you will be bound by such changes upon notification in RolDrive’s mobile applications, websites, or by email. If you disagree, you can close your account in accordance with Section 6.1. These Terms were most recently updated as of the outset of this document.</p>
                            <p className="mb-2">10.2 The invalidity of any provisions in these Terms does not affect the validity and enforceability of the rest of these Terms. Any such invalid, illegal, or unenforceable provisions shall be deemed deleted.</p>
                            <p className="mb-2">10.3 These Terms replace all previous agreements relating to your access and use of the App(s)/Website(s) Services. In case of conflict with any previous agreements, these Terms shall prevail.</p>
                            <p className="mb-2">10.4 You may be required to accept additional terms to access or use the App(s)/Website(s) Services and/or Transportation Services. If there is a conflict, the latter will have precedence unless specified otherwise.</p>
                            <p className="mb-2">10.5 There are no third-party beneficiaries to these Terms except as provided in these Terms.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution Process</h2>
                        <div className="ml-4">
                            <p className="mb-2">11.1 In case of a dispute, please raise a complaint using the contact details in the “About Us” section. If unresolved, we will work with you to discuss a resolution, which may include mediation. RolDrive reserves the right to refer the dispute to a court.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Jurisdiction</h2>
                        <div className="ml-4">
                            <p className="mb-2">12.1 These Terms and non-contractual obligations arising from them shall be governed by and construed in accordance with English law.</p>
                            <p className="mb-2">12.2 The courts of England shall have exclusive jurisdiction to adjudicate any dispute arising from these Terms, provided RolDrive may take proceedings in any other jurisdiction.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">13. App(s)/Website(s) Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">13.1 By accessing and using the App(s)/Website(s) Services, you accept these Terms.</p>
                            <p className="mb-2">13.2 If using the App(s)/Website(s) Services in another country, your access and use may be subject to country-specific terms.</p>
                            <p className="mb-2">13.3 RolDrive’s mobile applications and/or websites may be available under various branding depending on the Transportation Services.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">14. Your Access to and Use of the App(s)/Website(s) Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">14.1 App(s)/Website(s) Services can be downloaded or accessed on most modern mobile devices.</p>
                            <p className="mb-2">14.2 You are responsible for obtaining the necessary network access, compatible devices, and operating systems. We provide the App(s)/Website(s) Services “as is” and “as available.”</p>
                            <p className="mb-2">14.3 We may suspend, withdraw, or restrict the availability of all or part of the App(s)/Website(s) Services for operational reasons. RolDrive will give reasonable notice of any suspension or withdrawal.</p>
                            <p className="mb-2">14.4 To use the App(s)/Website(s) Services in the UK, you must register, set up an account, and be eighteen (18) or older. You may need to provide personal information, a valid payment method, and additional information for certain Transportation Services.</p>
                            <p className="mb-2">14.5 You are not obligated to use the App(s)/Website(s) Services, and if you choose to stop, you may do so without notice.</p>
                            <p className="mb-2">14.6 RolDrive may temporarily restrict your access if there is a suspected breach of your obligations or these Terms.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">15. Your Obligations when using the App(s)/Website(s) Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">15.1 Comply with all applicable laws. Use the App(s)/Website(s) Services for lawful purposes, and do not misuse RolDrive’s mobile applications and/or websites.</p>
                            <p className="mb-2">15.2 Provide accurate information when registering and using the App(s)/Website(s) Services.</p>
                            <p className="mb-2">15.3 Your account is personal. Do not register more than one account, share your account, keep information accurate, and keep login details confidential. Notify us immediately of any unauthorized use.</p>
                            <p className="mb-2">15.4 Pay any fees for Transportation Services.</p>
                            <p className="mb-2">15.5 Do not cause nuisance, annoyance, inconvenience, or property damage.</p>
                            <p className="mb-2">15.6 No charge for using the App(s)/Website(s) Services, but we reserve the right to introduce a charge with notice.</p>
                            <p className="mb-2">15.7 We may introduce fees for specific features with notice.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">16. What if there's a problem with my App(s)/Website(s) Services?</h2>
                        <div className="ml-4">
                            <p className="mb-2">16.1 If there is a problem or complaint, contact us using the details in the “About Us” section.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">17. Ownership of and Rights in the App(s)/Website(s) Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">17.1 RolDrive reserves all rights. The App(s)/Website(s) Services, devices, and data are RolDrive’s property.</p>
                            <p className="mb-2">17.2 You may not license, sublicense, copy, modify, distribute, create, sell, reverse engineer, launch programs for data mining, or use RolDrive Names, Marks, or Works in certain ways.</p>
                            <p className="mb-2">17.3 Subject to compliance with these Terms, we grant you a personal license to use RolDrive’s mobile applications and/or websites.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">18. RolDrive Transportation Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">18.1 For RolDrive Transportation Services in the UK, you contract with RolDrive Limited, the licensed private hire operator.</p>
                            <p className="mb-2">18.2 Contact the relevant entity using the details in the “About Us” section.</p>
                            <p className="mb-2">18.3 A booking request can only be accepted by a licensed private hire operator.</p>
                            <p className="mb-2">18.4 RolDrive Limited holds the relevant PHV operator's license under the 1998 Act.</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">19. RolDrive Contract with you for RolDrive Transportation Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">19.1  A Booking request is an offer, and acceptance forms a Contract. We are not obligated to accept. The Contract comes into existence upon written confirmation via email or push notification. If a driver becomes unavailable, we will attempt to find an alternative. If unsuccessful, we may terminate without compensation.</p>
                            <p className="mb-2">19.2  Estimated arrival and completion times are provided but are not guarantees.</p>
                            <p className="mb-2">19.3  The price for the Contract (including surcharges and tolls) will be provided before placing a Booking request. You may be charged a different amount in certain situations.</p>
                            <p className="mb-2">19.4  Accepted payment methods are set out on the App(s)/Website(s) Services. RolDrive may verify your payment method by issuing a temporary authorization hold.</p>
                            <p className="mb-2">19.5  Changes to your Contract can be made through the App(s)/Website(s) Services.</p>
                            <p className="mb-2">19.6  RolDrive may change its Transportation Services to reflect changes in laws.</p>
                            <p className="mb-2">19.7  Your right to cancel and RolDrive’s right to end the Contract are provided in these Terms.</p>
                            <p className="mb-2">19.8  RolDrive provides Booking Services.</p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">20. What if there's a problem with my RolDrive Transportation Services</h2>
                        <div className="ml-4">
                            <p className="mb-2">20.1   Contact us if there is a problem or complaint.</p>
                            <p className="mb-2">20.2   Note that drivers must hold and maintain PHV insurance.</p>
                            <p className="mb-2">20.3   RolDrive’s liability, if permitted by law, is limited to £100.</p>
                            <p className="mb-2">20.4   RolDrive is not liable for business losses if used for commercial purposes.</p>
                        </div>
                    </div>

                    {/* <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Effective Date - </h2>
                        <div className="ml-4">
                            <p className="mb-2">[Date]</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
