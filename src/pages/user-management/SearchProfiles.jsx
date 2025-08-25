import { useEffect } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useState } from "react";
import Select from "react-select";

import { TbFileDownload } from "react-icons/tb";

import { searchProfileByAttribute } from "../../services/user.service";
import SearchListItem from "./components/SearchListItem";
import ReusableButton from "../../components/ReusableButton";

const searchAttributes = [
    { value: "email", label: "Email ID" },
    { value: "firstname", label: "First Name" },
    { value: "lastname", label: "Last Name" },
    { value: "mobile_number", label: "Phone Number" },
    { value: "district_id", label: "District ID" },
    { value: "club_name", label: "Club Name" },
];

const SearchProfiles = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAttribute, setSelectedAttribute] = useState(
        searchAttributes[0]
    );
    const btnActive = searchResults.length === 0;
    useEffect(() => {
        setSearchQuery("");
    }, [selectedAttribute]);
    useEffect(() => {
        try {
            if (searchQuery.length > 2) {
                const fetchProfilesByAttribute = async () => {
                    const res = await searchProfileByAttribute(
                        searchQuery,
                        selectedAttribute.value
                    );
                    setSearchResults(res.data);
                    // setSearchResults([
                    //     {
                    //         user_id: 1,
                    //         firstname: "John",
                    //         lastname: "Doe",
                    //         email: "john@example.com",
                    //         status: "NEW",
                    //     },
                    //     {
                    //         user_id: 2,
                    //         firstname: "Jane",
                    //         lastname: "Smith",
                    //         email: "jane@example.com",
                    //         status: "NEW",
                    //     },
                    // ]);
                };
                fetchProfilesByAttribute();
                // console.log("Search Results:", searchResults);
            } else {
                setSearchResults([]);
            }
            // console.log("Search Query:", searchQuery);
        } catch (err) {
            console.log(err);
        }
    }, [searchQuery]);

    const handleDownloadCSV = () => {
        const csv = convertToCSV(searchResults);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "robiz_users_search_results.csv";
        a.click();
        URL.revokeObjectURL(url);
    };
    function convertToCSV(data) {
        if (!data.length) return "";

        const headers = Object.keys(data[0]);
        const csvRows = [
            headers.join(","),
            ...data.map((row) =>
                headers
                    .map(
                        (field) => `"${String(row[field]).replace(/"/g, '""')}"`
                    )
                    .join(",")
            ),
        ];
        return csvRows.join("\n");
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="flex flex-row items-center justify-center gap-[10px]">
                <div
                    className="flex flex-row justify-center gap-[10px] font-dmSans border-[1.5px] 
                border-gray-500 rounded-[20px] px-[10px] bg-white"
                >
                    <input
                        type={
                            selectedAttribute.value === "mobile_number" ||
                            selectedAttribute.value === "district_id"
                                ? "number"
                                : "text"
                        }
                        className="w-[50%] p-[5px] flex items-center justify-center border-none outline-0"
                        placeholder={`Type to start searching`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="flex flex-row items-center justify-center gap-[5px]">
                        <Select
                            value={selectedAttribute}
                            onChange={setSelectedAttribute}
                            options={searchAttributes}
                            className={`w-[170px]`}
                            classNamePrefix="react-select"
                            isSearchable={false}
                        />
                        <MdOutlinePersonSearch className="w-[24px] h-[24px] text-gray-500" />
                    </div>
                </div>
                <ReusableButton
                    btnText={"Download CSV"}
                    icon={<TbFileDownload className="size-[18px]" />}
                    onClick={handleDownloadCSV}
                    btnActive={btnActive}
                    title={"Download search results as CSV File"}
                />
            </div>
            <div
                className="w-full h-[89%] bg-white flex flex-col rounded-[10px] border-[1px] 
            border-gray-500 mt-[10px] p-[10px] overflow-y-auto gap-[10px]"
            >
                {searchResults &&
                    searchResults.map((result, index) => (
                        <SearchListItem key={index} user={result} />
                    ))}
            </div>
        </div>
    );
};

export default SearchProfiles;
