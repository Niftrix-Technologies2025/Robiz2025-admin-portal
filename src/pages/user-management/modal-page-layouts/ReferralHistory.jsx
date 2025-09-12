import TabbedIndexLayout from "../../../components/tabbed-index-layout/TabbedIndexLayout";

const tabs = [
    { label: "Referrals Given", index: 0 },
    { label: "Referrals Received", index: 1 },
];
const ReferralHistory = () => {
    return (
        <div className="flex flex-col">
            <TabbedIndexLayout items={tabs} />
        </div>
    );
};

export default ReferralHistory;
