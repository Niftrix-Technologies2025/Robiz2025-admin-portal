import SchemaInputField from "../components/SchemaInputField";
import FileSelector from "../../../components/FileSelector";
import ReusableButton from "../../../components/ReusableButton";
import { useAddIndustryStore } from "../../../store/settings.store";
import { useEffect } from "react";
const AddIndustry = () => {
    const {
        industry,
        classification,
        selectedFile,
        setIndustry,
        setClassification,
        setSelectedFile,
        loading,
        error,
        success,
        addIndustry,
        reset,
    } = useAddIndustryStore();
    const isFilled = industry || classification;
    const isCompletelyFilled = industry && classification;
    useEffect(() => {
        if (isFilled) {
            setSelectedFile(null);
        }
    }, [isFilled]);
    useEffect(() => {
        if (selectedFile) {
            setIndustry("");
            setClassification("");
        }
    }, [selectedFile, setIndustry, setClassification]);
    const handleAddIndustry = async () => {
        try {
            await addIndustry();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-full max-w-[800px] h-full overflow-y-auto flex flex-col gap-[15px] pr-[10px] pb-[50px]">
            <div className="flex flex-col bg-white p-4 rounded-[10px]">
                <p className="pl-[5px] font-dmSans w-full text-left text-[18px] mb-[10px]">
                    Add manually
                </p>
                <SchemaInputField
                    inputType={"text"}
                    label={"Industry"}
                    value={industry}
                    setValue={setIndustry}
                    placeholder={"Industry"}
                />
                <SchemaInputField
                    inputType={"text"}
                    label={"Classification"}
                    value={classification}
                    setValue={setClassification}
                    placeholder={"Classification"}
                />
            </div>
            <p className="font-dmSans w-full text-center font-bold">OR</p>
            <div className="bg-white w-full h-full rounded-[10px] flex flex-col p-4">
                <p className="pl-[5px] font-dmSans w-full text-left text-[18px] mb-[10px]">
                    Add from csv
                </p>
                <FileSelector
                    selectedFile={selectedFile}
                    onFileSelect={setSelectedFile}
                    className={"p-[20px]"}
                />
            </div>
            <div className="flex justify-center">
                <ReusableButton
                    btnText={"Add Industry"}
                    classname={`!border-0 !rounded-[5px] w-[70%] !py-[10px] !bg-red-500 
                    disabled:!bg-red-400 disabled:!text-gray-200 disabled:font-light !text-white`}
                    onClick={handleAddIndustry}
                    btnActive={
                        isCompletelyFilled || selectedFile ? false : true
                    }
                    isLoading={loading}
                />
            </div>
        </div>
    );
};

export default AddIndustry;
