import { IoIosCloseCircle } from "react-icons/io";
const CustomCloseButton = ({ ClickFn }) => {
    return (
        <div
            className="flex flex-row items-center justify-center absolute top-0 right-0 
            cursor-pointer bg-red-500 rounded-[10px] py-[3px] px-[5px] text-white gap-[2px] shadow-md hover:shadow-lg"
            onClick={ClickFn}
        >
            <p className="font-dmSans">Close</p>
            <IoIosCloseCircle className="size-[20px]" />
        </div>
    );
};

export default CustomCloseButton;
