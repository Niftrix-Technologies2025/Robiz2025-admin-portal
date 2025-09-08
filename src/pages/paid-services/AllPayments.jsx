import { useEffect, useState } from "react";
import PaginationNavbar from "../../components/PaginationNavbar";
import { usePagination } from "../../hooks/usePagination";
import { useLoading } from "../../hooks/useLoading";
import { fetchPayments } from "../../services/premium.service";
import LoadingItem from "../../components/LoadingItem";
import AllPaymentsListItem from "./components/AllPaymentsListItem";
import Select from "react-select";

const criteria = [
    { value: "all", label: "All" },
    { value: "payment-success", label: "Successful Payments" },
    { value: "payment-failed", label: "Failed Payments" },
    { value: "premium-banner", label: "Premium Banner" },
    { value: "trending-banner", label: "Trending Banner" },
    { value: "search-preference", label: "Search Preference" },
    { value: "featured-profile", label: "Featured Profile" },
];
const PAGE_SIZE = 100; //100 results per page
const AllPayments = () => {
    const { page, setPage, total, setTotal, totalPages } =
        usePagination(PAGE_SIZE);
    const { isLoading, setIsLoading } = useLoading();
    const [selectedCriteria, setSelectedCriteria] = useState(criteria[0]);
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchAllPayments = async () => {
            setIsLoading(true);
            try {
                // console.log(selectedCriteria);
                const res = await fetchPayments(
                    selectedCriteria.value,
                    page,
                    PAGE_SIZE
                );
                setResults(res.data.results || []);
                setTotal(res.data.total || 0);
                // await console.log("Fetched all payments : ", results);
            } catch (err) {
                console.error("Failed to fetch all payments : ", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllPayments();
    }, [PAGE_SIZE, selectedCriteria, page]);
    useEffect(() => {
        setPage(1);
        setTotal(1);
        setResults([]);
    }, [selectedCriteria]);
    return (
        <div className="w-full h-full flex flex-col gap-[20px]">
            {/* <Select */}
            <div className="flex flex-row gap-[5px]">
                <Select
                    value={selectedCriteria}
                    onChange={setSelectedCriteria}
                    options={criteria}
                    className={`w-[200px] max-sm:w-[110px] my-[2px] font-dmSans`}
                    classNamePrefix="react-select"
                    isSearchable={false}
                />
                <PaginationNavbar
                    pageNo={page}
                    totalPages={totalPages}
                    backwardAction={() => setPage(page - 1)}
                    skipBackwardAction={() => setPage(1)}
                    forwardAction={() => setPage(page + 1)}
                    skipForwardAction={() => setPage(totalPages)}
                />
            </div>

            {isLoading ? (
                <LoadingItem size={15} />
            ) : results.length > 0 ? (
                <div className="flex flex-col overflow-y-auto gap-[5px] pr-[10px] mb-[15px]">
                    {results.map((result, index) => (
                        <AllPaymentsListItem
                            key={index}
                            index={index}
                            result={result}
                            page={page}
                            pageSize={PAGE_SIZE}
                        />
                    ))}
                </div>
            ) : (
                <div>Payments list empty</div>
            )}
        </div>
    );
};

export default AllPayments;
