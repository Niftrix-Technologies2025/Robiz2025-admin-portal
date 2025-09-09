import TabbedLayoutItem from "./TabbedLayoutItem";
import { useLocation } from "react-router-dom";

const TabbedLayout = ({ items,className }) => {
    const location = useLocation();
    return (
        <div
            className={`fixed flex flex-row h-[35px] w-full items-center justify-start 
        gap-[10px] bg-white pl-[10px] overflow-x-auto scrollbar-hide z-10 ${className}`}
        >
            {items.map((item, index) => (
                <TabbedLayoutItem
                    key={index}
                    item={item}
                    isActive={location.pathname === item.url||location.pathname.startsWith(item.url + '/')}
                />
            ))}
        </div>
    );
};

export default TabbedLayout;
