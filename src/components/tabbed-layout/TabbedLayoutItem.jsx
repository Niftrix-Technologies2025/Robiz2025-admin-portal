import { useNavigate } from "react-router-dom";
const TabbedLayoutItem = ({ item, isActive }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(item.url);
    };
    return (
        <div
            className={`flex items-center justify-center cursor-pointer 
            rounded-[5px] p-1 ${
                isActive
                    ? "text-textColorAlt"
                    : "text-gray-600 hover:text-textColorAlt"
            }`}
            onClick={handleClick}
        >
            <p
                className={`font-dmSans max-sm:text-[12px] whitespace-nowrap ${
                    isActive
                        ? `underline decoration-sideBarIconActiveBg decoration-3 underline-offset-8`
                        : ""
                }`}
            >
                {item.label}
            </p>
        </div>
    );
};

export default TabbedLayoutItem;
