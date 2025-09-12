import { useEffect } from "react";

const columnTitleStyle = "font-medium text-[12px] text-gray-600";
const PremiumBannerActivityListItem = ({ banner }) => {
    //   const serialNumber = (page - 1) * pageSize + index + 1;
    useEffect(() => {
        console.log("banner", banner);
    }, []);
    return (
        <div className="flex flex-row bg-black w-full">
            {/* <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[30px]">{serialNumber ?? "-"}</p>
            </div> */}
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[30px]">{banner.premiumId}</p>
            </div>
        </div>
    );
};

export default PremiumBannerActivityListItem;
