import { FaBell } from "react-icons/fa";
import "./NotificationBell.css";

const NotificationBell = () => {
    return (
        <div className="flex justify-center items-center w-full h-full bg-[#faf4f8]">
        <div className="relative inline-block">
            <div className="bell-ring-once">
                <FaBell className="w-20 h-20 text-black" />
            </div>
            <div className="absolute top-1 right-2 w-7 h-7 flex items-center justify-center">
                <div className="absolute w-full h-full bg-pink-600 rounded-full badge-pulse"></div>
                    <div className="relative w-full h-full bg-pink-600 border-2 border-[#faf4f8] rounded-full flex items-center justify-center badge-pop">
                    <span className="text-sm text-white leading-none">1</span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NotificationBell;