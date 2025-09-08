import SidebarItem from "./SidebarItem";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GoLog } from "react-icons/go";
// import { IoIosSettings } from "react-icons/io";
import { MdPaid } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
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
            <SidebarItem
                displayName="Paid Services"
                url="/paid-services"
                icon={<MdPaid className="size-[18px]" />}
            />
            <SidebarItem
                displayName="System Settings"
                url="/system-settings"
                icon={<RiListSettingsLine className="size-[18px]" />}
            />
        </div>
    );
};

export default Sidebar;
