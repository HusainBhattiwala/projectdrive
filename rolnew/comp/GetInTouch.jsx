import React, { useState } from "react";
import api from "components/utils/api";
import Input from 'rolnew/ui/Input';
import { Pic } from "components/ui/Pic";
import { Mail_Icon_OrangeCircle, Phone_Icon_OrangeCircle, Address_Icon_OrangeCircle } from 'rolnew/comp/IconSVG';
import { toast, ToastContainer } from "react-toastify";
import { Montserrat } from 'next/font/google';
import SocialLinks from "./SocialLinks";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const GetInTouch = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNo: "",
        query: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.firstname === "" || formData.email === "") {
            toast.error("Please Enter Name and Email", {
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        try {
            const res = await api.post("/contactus", {
                name: `${formData.firstname} ${formData.lastname}`,
                phoneNo: formData.phoneNo,
                email: formData.email,
                query: formData.query,
            });
            console.log(res);
            if (res?.data?.status === 1) {
                toast.success("Thanks for your query. We'll get back to you shortly!", {
                    autoClose: 3000,
                    theme: "colored",
                });
            }
            setFormData({
                firstname: "",
                lastname: "",
                phoneNo: "",
                email: "",
                query: "",
            });
        } catch (error) {
            toast.error("Server Error", {
                autoClose: 3000,
                theme: "colored",
            });
            console.error("Error occurred while sending form data:", error);
        }
    };

    return (
        <>
            <ToastContainer
                limit={1}
                position="top-right"
                hideProgressBar
                autoClose={3000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={`bg-[#0d0e13] text-white min-h-screen flex items-center justify-center ${montserrat.className}`}>
                <div className="mx-auto p-4 pt-16 pb-16 sm:p-8 md:p-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
                        {/* Left Side - Contact Info */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
                            <p className="mb-8 text-gray-400 text-sm md:text-base">
                                Feel free to get in touch with us regarding any query you may have. Our customer support team is available 24x7 via WhatsApp, Email and Phone to serve you best.
                            </p>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center bg-[#ff5722] text-white p-3 rounded-full">
                                        <Mail_Icon_OrangeCircle />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-md md:text-lg">Enquiries - Email Us</p>
                                        <p><a href="mailto:booking@roldrive.com" className="text-blue-500">booking@roldrive.com</a></p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center bg-[#ff5722] text-white p-3 rounded-full">
                                        <Phone_Icon_OrangeCircle />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-md md:text-lg">Give us call at</p>
                                        <p className="text-gray-400"><a href="tel:+442045920966" className="text-blue-500">+44 204 592 0966</a></p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center bg-[#ff5722] text-white p-3 rounded-full">
                                        <Address_Icon_OrangeCircle />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-md md:text-lg">Address</p>
                                        <p className="text-gray-400 text-sm md:text-base">
                                            134 Buckingham Palace Rd London SW1W 9SA, UK
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-8 mb-8" />

                            <div className="mt-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Social Media</h3>
                                <SocialLinks />
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-4 sm:p-8 rounded-lg" style={{ boxShadow: '0px 2px 10px 2px #2235447A' }}>
                            <h2 className="text-2xl md:text-3xl flex justify-center font-bold mb-4">Send Your Query</h2>
                            <form className="space-y-4">
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Input
                                        name="firstname"
                                        label="First Name*"
                                        placeholder="Enter your first name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Input
                                        name="lastname"
                                        label="Last Name*"
                                        placeholder="Enter your last name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Input
                                        name="phoneNo"
                                        leadingIcon="/rolnew/global/phone.svg"
                                        label="Phone*"
                                        placeholder="99 999 9999"
                                        value={formData.phoneNo}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        leadingIcon="/rolnew/global/email.svg"
                                        name="email"
                                        label="Email*"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Input
                                    rows={5}
                                    name="query"
                                    label="Message*"
                                    placeholder=""
                                    value={formData.query}
                                    onChange={handleChange}
                                />
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full py-3 bg-[#ff5722] text-white rounded-lg font-bold text-lg hover:bg-[#e64a19] transition-colors duration-300"
                                >
                                    Submit Query
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInTouch;
