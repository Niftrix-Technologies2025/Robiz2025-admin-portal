import { useNavigate } from "react-router-dom";
const ItemTile = ({ displayTitle, url }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    };
    return (
        <div
            className="flex items-center justify-center border-[2px] 
        p-2 w-[200px] h-[80px] cursor-pointer rounded-[5px]"
            onClick={handleClick}
        >
            <p className="font-dmSans text-center">{displayTitle}</p>
        </div>
    );
};

export default ItemTile;
