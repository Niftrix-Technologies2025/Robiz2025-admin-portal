import { useRef } from "react";
import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ReusableButton from "./ReusableButton";

const CsvFileSelector = ({
    selectedFile,
    onFileSelect,
    buttonText = "Select File",
    changeButtonText = "Change File",
    accept = ".csv,text/csv",
    disabled = false,
    className
}) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        if (!disabled) fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (onFileSelect) onFileSelect(e.target.files[0]);
    };

    return (
        <div
            className={`w-full h-full border-2 border-dashed ${
                selectedFile ? "border-black" : "border-gray-400"
            } rounded-[5px] flex flex-col items-center justify-center gap-[20px] cursor-pointer bg-white ${className}`}
            onClick={handleButtonClick}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept={accept}
                onChange={handleFileChange}
                disabled={disabled}
            />
            {selectedFile ? (
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <div className="relative">
                        <IoDocumentText className="size-[54px]" />
                        <IoIosCheckmarkCircle className="text-green-500 size-[24px] absolute top-7/11 right-0.5" />
                    </div>
                    <span className="text-black text-sm truncate max-w-[300px]">
                        {selectedFile.name}
                    </span>
                    <ReusableButton
                        btnText={changeButtonText}
                        title={"Select CSV File"}
                        classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] !border-0 !bg-red-500 !text-white`}
                        // onClick={handleButtonClick}
                        disabled={disabled}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <IoDocumentTextOutline className="size-[52px] text-gray-700" />
                    <p className="font-bold text-gray-700">Upload .csv file</p>
                    <ReusableButton
                        btnText={buttonText}
                        title={"Select CSV File"}
                        classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] !border-0 !bg-gray-400 !text-textColor`}
                        // onClick={handleButtonClick}
                        disabled={disabled}
                    />
                </div>
            )}
        </div>
    );
};

export default CsvFileSelector;
