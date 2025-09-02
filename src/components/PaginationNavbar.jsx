import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoPlaySkipBackCircleOutline } from "react-icons/io5";
import { IoPlaySkipForwardCircleOutline } from "react-icons/io5";
// import Select from "react-select";

const PaginationNavbar = ({
    pageNo,
    totalPages,
    backwardAction,
    skipBackwardAction,
    forwardAction,
    skipForwardAction,
}) => {
    const atBeginning = pageNo === 1;
    const atEnd = pageNo === totalPages;
    return (
        <div
            className="flex flex-row items-center justify-center gap-[5px] bg-white rounded-[10px] 
        border-gray-200 border-[1.5px] w-[200px] max-sm:w-[150px] py-[3px]"
        >
            <button
                disabled={atBeginning}
                title="Skip to first page"
                className="cursor-pointer disabled:opacity-50 disabled:cursor-default"
                onClick={skipBackwardAction}
            >
                <IoPlaySkipBackCircleOutline className="size-[25px] " />
            </button>

            <button
                disabled={atBeginning}
                onClick={backwardAction}
                className={`flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default`}
                title="Previous page"
            >
                <IoMdArrowRoundBack className="size-[22px]" />
            </button>
            <p className="font-dmSans text-[16px] max-sm:text-[12px] whitespace-nowrap px-[5px] truncate w-[75px] max-md:w-[40px] text-center">
                <span className="max-md:hidden">Page</span> {pageNo}/
                {totalPages}
            </p>
            <button
                disabled={atEnd}
                onClick={forwardAction}
                className={`flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default`}
                title="Next page"
            >
                <IoMdArrowRoundForward className="size-[22px]" />
            </button>
            <button
                disabled={atEnd}
                className="cursor-pointer disabled:opacity-50 disabled:cursor-default"
                title="Skip to last page"
                onClick={skipForwardAction}
            >
                <IoPlaySkipForwardCircleOutline className="size-[25px]" />
            </button>
        </div>
    );
};

export default PaginationNavbar;
