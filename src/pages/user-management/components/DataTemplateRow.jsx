const DataTemplateRow = ({ data }) => {
    return (
        <div
            className="w-full flex flex-row justify-around items-center
            font-dmSans bg-white px-3 py-2 border-gray-400 rounded-t-[10px]  
            gap-[10px] text-[14px] max-lg:text-[10px] max-lg:gap-[5px]"
        >
            {data.map((item, index) => (
                <div key={index} className="flex flex-col w-[100px] max-lg:w-[50px]">
                    <p className="whitespace-nowrap truncate font-bold">{item.label}</p>
                    <p className="whitespace-nowrap truncate font-normal text-gray-700">{item.value}</p>
                    {/* <p>{item.value}</p> */}
                </div>
            ))}
        </div>
    );
};

export default DataTemplateRow;
