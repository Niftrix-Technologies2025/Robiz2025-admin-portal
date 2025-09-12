import TabbedIndexLayout from "../../../components/tabbed-index-layout/TabbedIndexLayout";
import { useState } from "react";
const tabs = [
    { label: "Premium Banner", index: 0 },
    { label: "Trending Banner", index: 1 },
    { label: "Featured Profile", index: 2 },
    { label: "Search Preference", index: 3 },
];

const PremiumServices = () => {
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

export default PremiumServices;
