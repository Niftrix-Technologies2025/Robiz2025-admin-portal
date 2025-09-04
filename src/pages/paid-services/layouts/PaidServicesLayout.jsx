import TabbedLayout from "../../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    {
        label: "View All Payments",
        url: "/paid-services/all-payments",
    },
    { label: "Manage Plans", url: "/paid-services/manage-plans" },
    // { label: "Send Notifications", url: "/user-management/notifications" },
    // { label: "Add Users", url: "/user-management/add-users" },
];

const PaidServicesLayout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} />
            <div className="pt-[60px] px-[20px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default PaidServicesLayout;
