import { BeatLoader } from "react-spinners";
const ListItemButton = ({ btnText, isLoading, onClick ,classname}) => {
    return (
        <button
            className={`flex items-center justify-center h-[30px] 
            cursor-pointer bg-btnGradient4 rounded-[30px] py-[5px] px-[8px] whitespace-nowrap
            shadow-sm hover:shadow-md transition-all duration-150 ${classname}`}
            disabled={isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <BeatLoader
                    loading={true}
                    size={10}
                    color="var(--color-secondary)"
                />
            ) : (
                <p>{btnText}</p>
            )}
        </button>
    );
};

export default ListItemButton;
