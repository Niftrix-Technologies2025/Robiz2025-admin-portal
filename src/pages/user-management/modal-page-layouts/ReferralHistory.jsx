import TabbedIndexLayout from "../../../components/tabbed-index-layout/TabbedIndexLayout";
import { useState } from "react";
const tabs = [
    { label: "Referrals Given", index: 0 },
    { label: "Referrals Received", index: 1 },
];
const ReferralHistory = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col">
            <TabbedIndexLayout
                items={tabs}
                activeIndex={activeTab}
                onChange={setActiveTab}
            />
        </div>
    );
};

export default ReferralHistory;
