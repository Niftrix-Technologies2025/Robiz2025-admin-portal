const columnTitleStyle = "font-medium text-[12px] text-gray-600";

const AllPaymentsListItem = ({ result }) => {
    return (
        <div
            className="flex flex-row items-center justify-between
        bg-white rounded-[10px] border-[1.5px] border-gray-200 px-[8px] gap-[5px] py-[5px]
        font-dmSans flex-shrink-0"
        >
            {/* <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[30px]">{serialNumber ?? "-"}</p>
            </div> */}
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>ID</p>
                <p className="w-[40px]">{result.user_id ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Name</p>
                <p className="w-[120px]">{result.name ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Service Type</p>
                <p className="w-[200px] truncate">{result.service ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Currency</p>
                <p className="w-[60px] truncate">{result.currency ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Amount</p>
                <p className="w-[150px] truncate">{result.amount ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Dates</p>
                <p className="w-[250px] truncate">{result.dates ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Payment Success</p>
                <p className="w-[60px] truncate">{result.dates ?? "-"}</p>
            </div>
        </div>
    );
};

export default AllPaymentsListItem;
