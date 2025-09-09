import TabbedLayout from "../../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    { label: "Privacy Policy", url: "/system-settings/manage-policies/privacy-policy" },
    // { label: "Add Industry", url: "/system-settings/manage-policies" },
];
const PolicyManagement = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} className={"!bg-transparent"} />
            <div className="pt-[60px] px-[20px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default PolicyManagement;
