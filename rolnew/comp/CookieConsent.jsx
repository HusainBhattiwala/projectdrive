'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const rejectCookies = () => {
        Cookies.set('cookieConsent', 'false', { expires: 365 });
        setIsVisible(false);
    };

    const acceptCookies = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setIsVisible(false);
        trackVisit();
    };

    const trackVisit = () => {
        const deviceInfo = getDeviceInfo();
        const visitCount = getVisitCount();

        //Google Analytics tools using cookies to store user data and insights
        window.gtag('event', 'visit', {
            event_category: 'User Data',
            event_label: `Visit Count: ${visitCount}`,
            value: visitCount,
            userAgent: deviceInfo.userAgent,
            screenResolution: deviceInfo.screenResolution,
            browser: deviceInfo.browser,
            platform: deviceInfo.platform,
        });

        // // Send this data to your backend server
        // fetch('/api/track-visit', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         visitCount,
        //         deviceInfo,
        //     }),
        // })
        //     .then(response => response.json())
        //     .then(data => console.log('Visit tracked successfully:', data))
        //     .catch(error => console.error('Error tracking visit:', error));
    };

    // Function to get device details
    const getDeviceInfo = () => {
        const userAgent = window.navigator.userAgent;
        const screenResolution = `${window.screen.width}x${window.screen.height}`;
        const browser = window.navigator.appName;
        const platform = window.navigator.userAgentData?.platform;

        return {
            userAgent,
            screenResolution,
            browser,
            platform
        };
    };

    // Function to track the number of visits
    const getVisitCount = () => {
        let visits = parseInt(localStorage.getItem('visitCount')) || 0;
        visits += 1;
        localStorage.setItem('visitCount', visits);
        return visits;
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 p-4 bg-[#FEF8F4] shadow-md z-50">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex-1 pr-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">We value your privacy</h2>
                    <p className="text-gray-600">
                        Cookies are used to improve your browsing experience, serve personalised ads or content, and analyse traffic. By clicking "Accept All",
                        you agree to our <a href="/use-of-cookie" className="text-orange-500 hover:underline">use of cookies</a>.
                    </p>
                </div>
                <div className="flex-2 space-x-4">
                    <button
                        onClick={rejectCookies}
                        className="px-12 py-2 border border-gray-300 text-gray-400 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        Reject All
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-12 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                    >
                        Accept Cookies
                    </button>
                </div>
                {/* <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button> */}
            </div>
        </div>
    );
};

export default CookieConsent;