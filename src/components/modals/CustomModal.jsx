import Modal from "react-modal";
import { BeatLoader } from "react-spinners";

const CustomModal = ({
    primaryText,
    secondaryText,
    positiveText,
    negativeText,
    isOpen,
    onRequestClose,
    onClick,
    isLoading = false,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            className="w-[347px] h-[136px] max-sm:w-[318px] max-sm:h-[135px] flex flex-col items-center 
            rounded-[20px] bg-emailConfirmationModalGrey"
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="flex flex-col items-center justify-center font-dmSans w-full">
                <p className="text-btnGradient4 text-[18px] whitespace-nowrap mt-[17px]">
                    {primaryText}
                </p>
                <p className="text-white whitespace-nowrap mt-[7px]">
                    {secondaryText}
                </p>
            </div>
            <div className="flex items-center justify-evenly text-btnGradient4 text-[18px] w-full mt-[10px] h-full">
                <button
                    className="cursor-pointer border-emailConfirmationWindowHrGrey border-t-[1px] border-r-[1px] w-[50%] h-full"
                    onClick={() => {
                        onRequestClose();
                    }}
                >
                    {negativeText}
                </button>
                <button
                    className="flex justify-center items-center cursor-pointer border-emailConfirmationWindowHrGrey 
                    border-t-[1px] w-[50%] h-full"
                    onClick={onClick}
                >
                    {!isLoading ? (
                        positiveText
                    ) : (
                        <BeatLoader
                            loading={true}
                            size={10}
                            color="var(--color-secondary)"
                        />
                    )}
                </button>
            </div>
        </Modal>
    );
};

export default CustomModal;
