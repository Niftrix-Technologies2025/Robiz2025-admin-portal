import TabbedIndexLayout from "../../../components/tabbed-index-layout/TabbedIndexLayout";
import PremiumBannerActivity from "../components/modal-pages/PremiumBannerActivity";
import TrendingBannerActivity from "../components/modal-pages/TrendingBannerActivity";
import FeaturedProfileActivity from "../components/modal-pages/FeaturedProfileActivity";
import SearchPreferenceActivity from "../components/modal-pages/SearchPreferenceActivity";
import { useState } from "react";
const tabs = [
    { label: "Premium Banner", index: 0 },
    { label: "Trending Banner", index: 1 },
    { label: "Featured Profile", index: 2 },
    { label: "Search Preference", index: 3 },
];

const PremiumServices = ({ userId }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col">
            <TabbedIndexLayout
                items={tabs}
                activeIndex={activeTab}
                onChange={setActiveTab}
            />
            {activeTab === 0 ? (
                <PremiumBannerActivity userId={userId} />
            ) : activeTab === 1 ? (
                <TrendingBannerActivity userId={userId} />
            ) : activeTab === 2 ? (
                <FeaturedProfileActivity userId={userId} />
            ) : activeTab === 3 ? (
                <SearchPreferenceActivity userId={userId} />
            ) : (
                <div>Invalid Index</div>
            )}
        </div>
    );
};

export default PremiumServices;
