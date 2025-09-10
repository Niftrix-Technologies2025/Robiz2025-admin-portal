import { useRef, useEffect } from "react";
import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import ReusableButton from "./ReusableButton";

const FileSelector = ({
    selectedFile,
    onFileSelect,
    buttonText = "Select File",
    changeButtonText = "Change File",
    accept = ".csv,text/csv",
    disabled = false,
    className,
}) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        if (!disabled) fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;
        if (file && onFileSelect) onFileSelect(file);
        e.target.value = "";
    };
    useEffect(() => {
        if (!selectedFile && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [selectedFile]);

    return (
        <div
            className={`w-full h-full border-2 border-dashed ${
                selectedFile ? "border-black" : "border-gray-400"
            } rounded-[5px] flex flex-col items-center justify-center gap-[20px] ${
                disabled ? "!border-gray-300" : ""
            } bg-white ${className}`}
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
                <div className="relative flex flex-col items-center justify-center gap-[10px] w-full h-full">
                    <RiDeleteBin2Fill
                        className="absolute top-1 right-1 z-10 size-[24px] 
                        text-gray-500 cursor-pointer"
                        onClick={() => {}}
                        title="Remove file"
                    />
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
                        classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] !border-0 !bg-gray-600 !text-white`}
                        btnActive={disabled}
                        onClick={handleButtonClick}
                    />
                </div>
            ) : (
                <div
                    className={`flex flex-col items-center justify-center gap-[10px] ${
                        disabled ? "!text-gray-200" : "text-gray-700"
                    }`}
                >
                    <IoDocumentTextOutline className={`size-[52px]`} />
                    <p className="font-bold">Upload .csv file</p>
                    <ReusableButton
                        btnText={buttonText}
                        title={"Select CSV File"}
                        classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] !border-0 !bg-gray-400 !text-textColor`}
                        btnActive={disabled}
                        onClick={handleButtonClick}
                    />
                </div>
            )}
        </div>
    );
};

export default FileSelector;
