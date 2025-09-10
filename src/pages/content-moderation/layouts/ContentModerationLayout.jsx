import TabbedLayout from "../../../components/tabbed-layout/TabbedLayout";
import { Outlet } from "react-router-dom";

const tabs = [
    {
        label: "Manage Content",
        url: "/content-moderation/manage-content",
    },
    { label: "View Audit Log", url: "/content-moderation/audit-log" },
];
const ContentModerationLayout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <TabbedLayout items={tabs} />
            <div className="pt-[35px] bg-outletBg w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default ContentModerationLayout;
