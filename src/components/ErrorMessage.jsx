import { RiResetLeftFill } from "react-icons/ri";
const ErrorMessage = ({ title, errorMsg, resetMsg, resetFn, className }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-[10px] ${className}`}
        >
            <p className="font-bold text-red-500 text-[18px] max-md:text-[16px]">
                {title}
                <span className="w-[200px] text-black font-normal">
                    {" "}
                    : {errorMsg || "null"}
                </span>
            </p>
            <div className="flex flex-row items-center justify-center gap-[5px]">
                <p className="text-[16px] max-md:text-[14px] font-light">
                    {resetMsg}
                </p>
                <button
                    onClick={resetFn}
                    title="Reset"
                    className="flex items-center justify-center"
                >
                    <RiResetLeftFill className="size-[24px] cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default ErrorMessage;
