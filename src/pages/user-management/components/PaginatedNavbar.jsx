import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoPlaySkipForwardCircle } from "react-icons/io5";
import { IoPlaySkipBackCircle } from "react-icons/io5";

const PaginatedNavbar = ({
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
        border-gray-200 border-[1.5px] w-[200px] p-[3px]"
        >
            <button
                disabled={atBeginning}
                title="Skip to first page"
                className="cursor-pointer disabled:opacity-50 disabled:cursor-default"
                onClick={skipBackwardAction}
            >
                <IoPlaySkipBackCircle className="size-[28px] " />
            </button>

            <button
                disabled={atBeginning}
                onClick={backwardAction}
                className={`flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default`}
                title="Previous page"
            >
                <FaCircleArrowLeft className="size-[22px]" />
            </button>
            <p className="font-dmSans text-[16px] max-sm:text-[12px] whitespace-nowrap px-[5px]">
                Page {pageNo}/{totalPages}
            </p>
            <button
                disabled={atEnd}
                onClick={forwardAction}
                className={`flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default`}
                title="Next page"
            >
                <FaCircleArrowRight className="size-[22px]" />
            </button>
            <button
                disabled={atEnd}
                className="cursor-pointer disabled:opacity-50 disabled:cursor-default"
                title="Skip to last page"
                onClick={skipForwardAction}
            >
                <IoPlaySkipForwardCircle className="size-[28px]" />
            </button>
        </div>
    );
};

export default PaginatedNavbar;
