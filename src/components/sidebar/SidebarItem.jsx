import { NavLink } from "react-router-dom";
const SidebarItem = ({ displayName, url, icon }) => {
    return (
        <NavLink
            to={url}
            className={`flex flex-col items-center justify-center font-dmSans text-white`}
        >
            {({ isActive }) => (
                <>
                    {icon && (
                        <div
                            className={`bg-sideBarIconBg w-[40px] h-[40px] flex items-center justify-center rounded-[5px] cursor-pointer ${
                                isActive ? "!bg-sideBarIconActiveBg" : ""
                            }`}
                        >
                            <div className={`w-[18px] h-[18px]`}>{icon}</div>
                        </div>
                    )}
                    {displayName && (
                        <p className="text-center wrap-anywhere text-[10px]">
                            {displayName}
                        </p>
                    )}
                </>
            )}
        </NavLink>
    );
};

export default SidebarItem;
