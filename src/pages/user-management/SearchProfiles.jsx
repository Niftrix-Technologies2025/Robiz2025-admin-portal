import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { TbFileDownload } from "react-icons/tb";
import { CgSmileNone } from "react-icons/cg";
import { MdOutlinePersonSearch } from "react-icons/md";
import { searchProfileByAttribute } from "../../services/user.service";
import SearchListItem from "./components/SearchListItem";
import ReusableButton from "../../components/ReusableButton";
import LoadingItem from "../../components/LoadingItem";
import ReusableMessage from "../../components/ReusableMessage";
import PaginationNavbar from "../../components/PaginationNavbar";
import { usePagination } from "../../hooks/usePagination";
import { useLoading } from "../../hooks/useLoading";

const PAGE_SIZE = 100; //100 results per page

const searchAttributes = [
    { value: "email", label: "Email ID" },
    { value: "firstname", label: "First Name" },
    { value: "lastname", label: "Last Name" },
    { value: "mobile_number", label: "Phone Number" },
    { value: "district_id", label: "District ID" },
    { value: "club_name", label: "Club Name" },
];

const SearchProfiles = () => {
    const { page, setPage, total, setTotal, totalPages } =
        usePagination(PAGE_SIZE);
    const { isLoading, setIsLoading } = useLoading();
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAttribute, setSelectedAttribute] = useState(
        searchAttributes[0]
    );
    const btnActive = searchResults.length === 0;
    useEffect(() => {
        setSearchQuery("");
        setSearchResults([]);
        setPage(1);
    }, [selectedAttribute]);
    useEffect(() => {
        try {
            if (searchQuery.length > 2) {
                const fetchProfilesByAttribute = async () => {
                    setIsLoading(true);
                    const res = await searchProfileByAttribute(
                        searchQuery,
                        selectedAttribute.value,
                        page,
                        PAGE_SIZE
                    );
                    setSearchResults(res.data.users || []);
                    setTotal(res.data.total || 1);
                    setIsLoading(false);
                };
                fetchProfilesByAttribute();
            } else {
                setSearchResults([]);
                setTotal(1);
            }
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    }, [searchQuery, page]);

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

    const handleStatusChange = (user_id, newStatus) => {
        setSearchResults((prev) =>
            prev.map((user) =>
                user.user_id === user_id ? { ...user, status: newStatus } : user
            )
        );
    };

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
                            className={`w-[170px] max-sm:w-[110px] my-[2px]`}
                            classNamePrefix="react-select"
                            isSearchable={false}
                        />
                        <MdOutlinePersonSearch className="w-[24px] h-[24px] text-gray-500" />
                    </div>
                </div>
                <div className="flex flex-row max-md:flex-col items-center justify-center gap-[10px] max;sm:gap-[5px]">
                    <PaginationNavbar
                        pageNo={page}
                        totalPages={totalPages}
                        backwardAction={() => setPage(page - 1)}
                        skipBackwardAction={() => setPage(1)}
                        forwardAction={() => setPage(page + 1)}
                        skipForwardAction={() => setPage(totalPages)}
                    />
                    <ReusableButton
                        btnText={"Download CSV"}
                        icon={<TbFileDownload className="size-[18px]" />}
                        onClick={handleDownloadCSV}
                        btnActive={btnActive}
                        title={"Download search results as CSV File"}
                    />
                </div>
            </div>
            <div
                className="w-full h-[89%] bg-white flex flex-col rounded-[10px] border-[1px] 
            border-gray-500 mt-[10px] p-[10px] overflow-y-auto gap-[10px] mb-[20px]"
            >
                {isLoading ? (
                    <LoadingItem />
                ) : searchQuery.length <= 2 ? (
                    <ReusableMessage
                        displayText={
                            "Enter 3 or more characters in the Search Box to show results"
                        }
                        icon={<MdOutlinePersonSearch className="size-[40px]" />}
                    />
                ) : searchResults.length === 0 ? (
                    <ReusableMessage
                        displayText={"No Results Found"}
                        icon={<CgSmileNone className="size-[40px]" />}
                    />
                ) : (
                    searchResults.map((result, index) => (
                        <SearchListItem
                            key={index}
                            user={result}
                            onStatusChange={handleStatusChange}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchProfiles;
