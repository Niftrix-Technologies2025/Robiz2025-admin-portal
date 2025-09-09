import TabbedLayout from "../../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    { label: "Modify Schema", url: "/system-settings/modify-schema" },
    { label: "Manage Policies", url: "/system-settings/manage-policies" },
];

const SystemSettingsLayout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} />
            <div className="pt-[35px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default SystemSettingsLayout;
