import { BeatLoader } from "react-spinners";
const LoadingItem = ({ classname = "", size = 5 }) => {
    return (
        <div
            className={`font-dmSans flex flex-col 
                items-center justify-center w-full h-full ${classname}`}
        >
            <BeatLoader
                loading={true}
                size={size}
                color="var(--color-textColorAlt)"
            />
        </div>
    );
};

export default LoadingItem;
