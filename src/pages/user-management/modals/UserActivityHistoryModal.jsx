import { Modal } from "react-modal";
const UserActivityHistoryModal = () => {
    return (
        <Modal
            isOpen={isOpen}
            className={`w-[820px] h-[500px] flex flex-col items-center justify-center 
                rounded-[20px] bg-neumorphicBg p-[20px]`}
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        ></Modal>
    );
};

export default UserActivityHistoryModal;
