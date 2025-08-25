import TabbedLayout from "../../../components/tabbed-layout/Tabbedlayout";
import { Outlet } from "react-router-dom";

const tabs = [
    { label: "Verify New Users", url: "/user-management/user-verification" },
    { label: "Search Profiles", url: "/user-management/search-profiles" },
    { label: "Send Notifications", url: "/user-management/notifications" },
    { label: "Add Users", url: "/user-management/add-users" },
];

const UserManagementLayout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} />
            <div className="pt-[60px] px-[20px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default UserManagementLayout;
