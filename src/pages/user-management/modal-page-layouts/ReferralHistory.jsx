import TabbedIndexLayout from "../../../components/tabbed-index-layout/TabbedIndexLayout";
import ReferralsGivenActivity from "../components/modal-pages/ReferralsGivenActivity";
import ReferralsReceivedActivity from "../components/modal-pages/ReferralsReceivedActivity";
import { useState } from "react";
const tabs = [
    { label: "Referrals Given", index: 0 },
    { label: "Referrals Received", index: 1 },
];
const ReferralHistory = ({ userId }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col">
            <TabbedIndexLayout
                items={tabs}
                activeIndex={activeTab}
                onChange={setActiveTab}
            />
            {activeTab === 0 ? (
                <ReferralsGivenActivity userId={userId} />
            ) : activeTab === 1 ? (
                <ReferralsReceivedActivity userId={userId} />
            ) : (
                <div>Invalid Index</div>
            )}
        </div>
    );
};

export default ReferralHistory;
