const CustomButton = ({ onClick, btnText, active, className, icon = null }) => {
    return (
        <button
            disabled={!active}
            className={`${
                active
                    ? "bg-gradient-to-r from-[#FBBD10] to-[#FAFC01] cursor-pointer"
                    : //   ?"bg-customButton1Gradient cursor-pointer"
                      "bg-inactiveBtngrey"
                //   "bg-white"
            } rounded-[10px] flex items-center justify-center 
            font-bold font-dmSans whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-150 ${className}`}
            onClick={onClick}
        >
            <div className="flex flex-row justify-around items-center max-sm:gap-1 gap-2 w-full">
                <p>{btnText}</p>
                {icon && <span>{icon}</span>}
            </div>
        </button>
    );
};

export default CustomButton;
