import SidebarItem from "./SidebarItem";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GoLog } from "react-icons/go";
import { robizLogo } from "../../assets/icons";

const Sidebar = () => {
    return (
        <div
            className="fixed flex flex-col bg-sideBarBg w-[70px] h-[100%]
            mr-[5px] pt-[10px] gap-[10px] z-20"
        >
            <img
                src={robizLogo}
                className="w-[40px] h-[40px] mx-auto"
                alt="Robiz Logo"
            />
            <SidebarItem
                displayName="Dashboard"
                url="/main-dashboard"
                icon={<MdOutlineSpaceDashboard />}
            />
            <SidebarItem
                displayName="Manage Users"
                url="/user-management"
                icon={<FaUsers />}
            />
            <SidebarItem
                displayName="Action Log"
                url="/action-log"
                icon={<GoLog />}
            />
        </div>
    );
};

export default Sidebar;
