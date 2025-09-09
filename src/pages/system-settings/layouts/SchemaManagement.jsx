import TabbedLayout from "../../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    { label: "Add Clubs", url: "/system-settings/modify-schema/add-clubs" },
    {
        label: "Add Industry",
        url: "/system-settings/modify-schema/add-industry",
    },
];
const SchemaManagement = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} className={"!bg-outletBg"} />
            <div className="pt-[50px] px-[20px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default SchemaManagement;
