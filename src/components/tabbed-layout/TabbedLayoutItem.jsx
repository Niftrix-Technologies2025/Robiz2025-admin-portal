import { useNavigate } from "react-router-dom";
const TabbedLayoutItem = ({ item }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(item.url);
    };
    return (
        <div
            className="flex items-center justify-center cursor-pointer 
            rounded-[5px] p-1 bg-neumorphicBg shadow-lg"
            onClick={handleClick}
        >
            <p className="text-textColorAlt font-dmSans max-sm:text-[12px] whitespace-nowrap">
                {item.label}
            </p>
        </div>
    );
};

export default TabbedLayoutItem;
