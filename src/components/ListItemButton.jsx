import { BeatLoader } from "react-spinners";
const ListItemButton = ({ btnText, isLoading, onClick }) => {
    return (
        <button
            className={`flex items-center justify-center w-[100px] h-[30px] 
            cursor-pointer bg-btnGradient4 rounded-[10px] p-[5px] whitespace-nowrap`}
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
