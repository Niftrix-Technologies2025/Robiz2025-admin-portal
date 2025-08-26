const UserProfileDetail = ({
    heading,
    mappings,
    labelClassname,
    valueClassname,
}) => {
    return (
        <div>
            <p className="font-bold text-center mb-[5px]">
                {heading ?? "HEADING"}
            </p>
            <div
                className="flex flex-col items-start border-[0.5px] 
        border-gray-400 rounded-[10px] bg-white p-2"
            >
                <div className="flex flex-row gap-2 justify-between items-center">
                    <div
                        className={`flex flex-col font-dmSans w-[120px] ${labelClassname}`}
                    >
                        {mappings.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between"
                            >
                                <p className="mb-1 font-semibold">
                                    {item.label}
                                </p>
                                <p className="mb-1 font-semibold">:</p>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`flex flex-col font-dmSans w-[220px] 
                    overflow-x-auto scrollbar-hide whitespace-nowrap ${valueClassname}`}
                    >
                        {mappings.map((item, index) => (
                            <p key={index} className="mb-1">
                                {item.value || "-"}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserProfileDetail;
