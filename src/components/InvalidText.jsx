import { IoIosWarning } from "react-icons/io";
const InvalidText = ({ displayText, className }) => {
    return (
        <div className={`${className}`}>
            {/* <img src={dangerIcon}></img> */}
            <IoIosWarning className="w-[20px] h-[18px]" />
            <p className="font-dmSans ml-[5.5px] text-center">
                {displayText || "Invalid"}
            </p>
        </div>
    );
};

export default InvalidText;
