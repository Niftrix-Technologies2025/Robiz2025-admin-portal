import TabbedLayout from "../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    { label: "Add Clubs", url: "/system-settings/modify-schema" },
    { label: "Add Industry", url: "/system-settings/manage-policies" },
];
const SchemaManagement = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} className={"!bg-transparent"}/>
            <div className="pt-[60px] px-[20px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default SchemaManagement;
