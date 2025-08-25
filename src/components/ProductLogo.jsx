// import React from "react";
import { robizLogo } from "../assets/icons";

const ProductLogo = ({ classname }) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <img
                src={robizLogo}
                className={`mt-[76px] w-[198px] h-[118.53px] max-sm:w-[203px] max-sm:h-[101.5px] ${classname}`}
            ></img>
        </div>
    );
};

export default ProductLogo;
