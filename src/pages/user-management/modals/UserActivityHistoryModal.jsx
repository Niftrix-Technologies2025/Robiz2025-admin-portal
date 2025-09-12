import Modal from "react-modal";
import { useState } from "react";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
import PremiumServices from "../modal-page-layouts/PremiumServices";
import ReferralHistory from "../modal-page-layouts/ReferralHistory";
const dropDownValues = [
    { value: "premium", label: "Premium Services" },
    { value: "referral", label: "Referrals" },
];
const UserActivityHistoryModal = ({ userId, isOpen, onRequestClose }) => {
    const [selectedAttribute, setSelectedAttribute] = useState(
        dropDownValues[0]
    );
    return (
        <Modal
            isOpen={isOpen}
            className={`w-full h-full max-w-[1318.09px] max-h-[560.6px] flex flex-col items-center justify-center 
                rounded-[20px] bg-white`}
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="w-full h-full flex flex-col">
                <div className="flex flex-row items-center justify-between rounded-t-[20px] px-[45px] pt-[22px] pb-[12px] bg-btnGradient4">
                    <div className="flex flex-row gap-[16.44px] items-center">
                        <p className="font-dmSans text-[25px] font-semibold">
                            Activity History
                        </p>
                        <Select
                            value={selectedAttribute}
                            onChange={setSelectedAttribute}
                            options={dropDownValues}
                            className={`w-[218px] max-sm:w-[110px] my-[2px] font-dmSans bg-transparent`}
                            classNamePrefix="react-select"
                            isSearchable={false}
                        />
                    </div>
                    <IoClose
                        className="size-[24px] cursor-pointer"
                        onClick={onRequestClose}
                    />
                </div>
                {selectedAttribute.value === "premium" ? (
                    <PremiumServices userId={userId} />
                ) : (
                    <ReferralHistory userId={userId} />
                )}
            </div>
        </Modal>
    );
};

export default UserActivityHistoryModal;
