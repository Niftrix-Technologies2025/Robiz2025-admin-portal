import { useState } from "react";
import ImageDetailModal from "../../../components/modals/ImageDetailModal";
const columnTitleStyle = "font-medium text-[12px] text-gray-600";
// import "../../../assets/images/banner-placeholder.svg" as BannerPlaceholder;
const BannerListItem = ({ index, banner, page, pageSize }) => {
    const serialNumber = (page - 1) * pageSize + index + 1;
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div
            className="flex flex-row justify-between items-start gap-[5px] bg-white rounded-[10px] border-[0.5px] border-gray-200 
            px-[8px] py-[10px] my-[5px] font-dmSans"
        >
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[40px]">{serialNumber ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>ID</p>
                <p className="w-[40px]">{banner.userId ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>UserName</p>
                <p className="w-[120px]">{banner.username ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>BannerType</p>
                <p className="w-[130px]">{banner.bannerType ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Slot No</p>
                <p className="w-[30px]">{banner.trendingBannerSlotNo ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Currency</p>
                <p className="w-[50px]">{banner.currency ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Amount</p>
                <p className="w-[100px]">{banner.amount ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Creation Date</p>
                <p className="w-[100px] overflow-x-auto scrollbar-hide">
                    {new Date(banner.createdAt).toLocaleDateString("en-GB") ??
                        "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Selected Dates</p>
                <p className="w-[100px] overflow-x-auto scrollbar-hide">
                    {Array.isArray(banner.selectedDates)
                        ? banner.selectedDates
                              .map((dateStr) =>
                                  new Date(dateStr).toLocaleDateString("en-GB")
                              )
                              .join(", ")
                        : banner.selectedDates ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Amount</p>
                <p className="w-[100px]">{banner.amount ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Payment Status</p>
                <p
                    className={`w-[100px] font-bold ${
                        banner?.isSuccessful ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {banner?.isSuccessful ? "Success" : "Failure"}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center truncate">
                <p className={`${columnTitleStyle}`}>Banner Image</p>
                {banner?.bannerImageUrl != null ? (
                    <img
                        src={banner.bannerImageUrl}
                        className={`${
                            banner?.bannerType == "trending-banner"
                                ? // ? "w-[52px] h-[80px]"
                                  // : "w-[76px] h-[40px]"
                                  "w-[20px] h-[32px]"
                                : "w-[38px] h-[20px]"
                        } cursor-pointer border-[1.5px] rounded-[5px] border-gray-300`}
                        loading="lazy"
                        // onError={(e) => {
                        //     e.target.onerror = null;
                        //     e.target.src =
                        //         "../../assets/images/banner-placeholder.svg";
                        // }}
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default BannerListItem;
