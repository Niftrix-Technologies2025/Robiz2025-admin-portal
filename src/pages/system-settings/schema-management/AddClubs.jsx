import { useEffect, useState } from "react";
import ReusableButton from "../../../components/ReusableButton";
import CsvFileSelector from "../../../components/CsvFileSelector";
import SchemaInputField from "../components/SchemaInputField";
import { useAddClubStore } from "../../../store/settings.store";

const AddClubs = () => {
    const {
        districtId,
        clubName,
        clubId,
        zoneName,
        selectedFile,
        setDistrictId,
        setClubName,
        setClubId,
        setZoneName,
        setSelectedFile,
        loading,
        error,
        success,
        addClub,
        reset,
    } = useAddClubStore();
    const isFilled = districtId || clubName || clubId || zoneName;
    const isCompletelyFilled = districtId && clubName && clubId && zoneName;
    useEffect(() => {
        if (isFilled) {
            setSelectedFile(null);
        }
    }, [isFilled]);
    useEffect(() => {
        if (selectedFile) {
            setDistrictId("");
            setClubName("");
            setClubId("");
            setZoneName("");
        }
    }, [selectedFile]);
    const handleAddClub = async () => {
        try {
            const res = await addClub();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-full max-w-[800px] h-full flex flex-col gap-[15px] overflow-y-auto pr-[10px] pb-[50px]">
            <div className="flex flex-col bg-white p-4 rounded-[10px]">
                <p className="pl-[5px] font-dmSans w-full text-left text-[18px] mb-[10px]">
                    Add manually
                </p>
                <SchemaInputField
                    inputType={"number"}
                    label={"District id"}
                    value={districtId}
                    setValue={setDistrictId}
                    placeholder={"District id"}
                />
                <SchemaInputField
                    inputType={"text"}
                    label={"Club name"}
                    value={clubName}
                    setValue={setClubName}
                    placeholder={"Club name"}
                />
                <SchemaInputField
                    inputType={"number"}
                    label={"Club id"}
                    value={clubId}
                    setValue={setClubId}
                    placeholder={"Club id"}
                />
                <SchemaInputField
                    inputType={"text"}
                    label={"Zone name"}
                    value={zoneName}
                    setValue={setZoneName}
                    placeholder={"Zone name"}
                />
            </div>
            <p className="font-dmSans w-full text-center font-bold">OR</p>
            <div className="bg-white w-full h-full rounded-[10px] flex flex-col p-4">
                <p className="pl-[5px] font-dmSans w-full text-left text-[18px] mb-[10px]">
                    Add from csv
                </p>
                <CsvFileSelector
                    selectedFile={selectedFile}
                    onFileSelect={setSelectedFile}
                    className={"p-[20px]"}
                />
            </div>
            <div className="flex justify-center py-[10px]">
                <ReusableButton
                    btnText={"Add Club"}
                    onClick={handleAddClub}
                    classname={`!border-0 !rounded-[5px] w-[70%] !py-[10px] !bg-red-500 
                    disabled:!bg-red-400 disabled:!text-gray-200 disabled:font-light !text-white`}
                    btnActive={
                        isCompletelyFilled || selectedFile ? false : true
                    }
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default AddClubs;
