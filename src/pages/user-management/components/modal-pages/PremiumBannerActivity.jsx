import { useEffect, useState } from "react";
import PremiumBannerActivityListItem from "../list-items/PremiumBannerActivityListItem";
import { fetchPremiumBannerActivity } from "../../../../services/user.service";
const PremiumBannerActivity = ({ userId }) => {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await fetchPremiumBannerActivity(userId);
                if (response.status === 200) {
                    setBannerData(response.data.results);
                    console.log(
                        "Premium Banner Activity Data:",
                        response.data.results
                    );
                }
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        };
        fetchBannerData();
    }, [userId]);

    return (
        <div>
            {bannerData.map((banner, index) => {
                <PremiumBannerActivityListItem key={index} banner={banner} />;
            })}
        </div>
    );
};

export default PremiumBannerActivity;
