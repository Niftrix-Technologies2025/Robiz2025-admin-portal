const columnTitleStyle = "font-medium text-[12px] text-gray-600";

const AllPaymentsListItem = ({ index, result, page, pageSize }) => {
    const serialNumber = (page - 1) * pageSize + index + 1;
    return (
        <div
            className="flex flex-row items-center justify-between
        bg-white rounded-[10px] border-[1.5px] border-gray-200 px-[15px] gap-[5px] py-[5px]
        font-dmSans flex-shrink-0"
        >
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[30px]">{serialNumber ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>ID</p>
                <p className="w-[40px]">{result.userId ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Name</p>
                <p className="w-[120px]">{result.username ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Service Type</p>
                <p className="w-[150px] truncate overflow-x-auto scrollbar-hide">
                    {result.serviceType ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Currency</p>
                <p className="w-[60px] truncate">{result.currency ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Amount</p>
                <p className="w-[100px] truncate">{result.amount ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Dates</p>
                {/* <p className="w-[250px] truncate">{result.dates ?? "-"}</p> */}
                <p className="w-[250px] overflow-x-auto scrollbar-hide">
                    {Array.isArray(result.dates)
                        ? result.dates
                              .map(
                                  (dateStr) =>
                                      new Date(dateStr).toLocaleDateString(
                                          "en-GB"
                                      ) // "YYYY-MM-DD"
                              )
                              .join(", ")
                        : result.dates ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Payment Status</p>
                <p
                    className={`w-[70px] truncate ${
                        result.isSuccessful ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {result.isSuccessful ? "Success" : "Failure"}
                </p>
            </div>
        </div>
    );
};

export default AllPaymentsListItem;
