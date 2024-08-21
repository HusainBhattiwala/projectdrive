import Link from "next/link";
import React from "react";

const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return "Android";
    }

    return "unknown";
};

const AppDownloadLinks = () => {
    const os = getMobileOperatingSystem();

    return (
        <div>
            {os === "iOS" && (
                <Link
                    className="text-[#E1E1E1] w-[176px] h-[36px] text-md font-bold text-left items-center"
                    href="https://apps.apple.com/us/app/roldrive/id6470998693"
                >
                    <img
                        src="/rolnew/home/appstore.png"
                        className="w-[140px] h-[50px] mt-2"
                        alt="app store"
                    />
                </Link>
            )}

            {os === "Android" && (
                <Link
                    className="text-[#E1E1E1] w-[176px] h-[36px] text-md font-bold text-left items-center"
                    href="https://play.google.com/store/apps/details?id=com.roldrive.roldrive&hl=en&pli=1"
                >
                    <img
                        src="/rolnew/home/playstore.png"
                        className="w-[140px] h-[45px] mt-2"
                        alt="play store"
                    />
                </Link>
            )}
        </div>
    );
};

export default AppDownloadLinks;
