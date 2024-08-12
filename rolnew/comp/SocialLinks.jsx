import Pic from "rolnew/util/Pic";

function SocialLinks() {
    return (
        <div className="flex gap-x-4">
            <a href="https://www.facebook.com/RolDrive" target="_blank" className="w-6 h-6 pop">
                <Pic
                    alt="location"
                    className="mx-auto pop"
                    src="/rolnew/global/icons/facebook.svg"
                    objectFit="cover"
                />
            </a>
            <a href="https://x.com/Rol_Drive" target="_blank" className="w-6 h-6 pop">
                <Pic
                    alt="location"
                    className="mx-auto pop"
                    src="/rolnew/global/icons/twitterx.svg"
                    objectFit="cover"
                />
            </a>
            <a href="https://www.instagram.com/rol_drive/" target="_blank" className="w-6 h-6 pop">
                <Pic
                    alt="location"
                    className="mx-auto pop"
                    src="/rolnew/global/icons/instagram.svg"
                    objectFit="cover"
                />
            </a>
            <a href="https://www.pinterest.co.uk/roldrive/" target="_blank" className="w-6 h-6 pop">
                <Pic
                    alt="location"
                    className="mx-auto pop"
                    src="/rolnew/global/icons/pinterest.svg"
                    objectFit="cover"
                />
            </a>
            <a href="https://www.linkedin.com/in/rol-drive-7a259b264/" target="_blank" className="w-6 h-6 pop">
                <Pic
                    alt="location"
                    className="mx-auto pop"
                    src="/rolnew/global/icons/linkedin.svg"
                    objectFit="cover"
                />
            </a>
        </div>
    )
}

export default SocialLinks;