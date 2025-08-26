import { FaFileCsv } from "react-icons/fa";
import { useRef } from "react";
import ReusableButton from "../../components/ReusableButton";

const AddUsers = () => {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className="w-full h-full flex flex-col ">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv,text/csv"
            />
            <ReusableButton
                btnText={"Select File"}
                icon={<FaFileCsv className="size-[18px]" />}
                title={"Select CSV File"}
                onClick={handleButtonClick}
                classname={"w-[150px] h-[40px]"}
            />
        </div>
    );
};

export default AddUsers;
