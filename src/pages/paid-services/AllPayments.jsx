import { useEffect, useState } from "react";
import PaginationNavbar from "../../components/PaginationNavbar";
import { usePagination } from "../../hooks/usePagination";
import { useLoading } from "../../hooks/useLoading";
import { fetchPayments } from "../../services/premium.service";
import LoadingItem from "../../components/LoadingItem";
import AllPaymentsListItem from "./components/AllPaymentsListItem";
const samplePayment = {
    user_id: "1",
    name: "John Doe",
    service: "Premium Banner",
};
const PAGE_SIZE = 100; //100 results per page
const AllPayments = () => {
    const { page, setPage, total, setTotal, totalPages } =
        usePagination(PAGE_SIZE);
    const { isLoading, setIsLoading } = useLoading();
    const [criteria, setCriteria] = useState("");
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchAllPayments = async () => {
            setIsLoading(true);
            try {
                // const res = await fetchAllPaymentsAPI({ page, limit: PAGE_SIZE });
                // const paymentsList = res.data.payments || [];
                // setAllPayments(paymentsList);
                // setTotal(res.data.total || 0)
                // const res = fetchPayments({ criteria, page, limit: PAGE_SIZE });
                // setResults(res.data || ["test"]);
                // setResults({"asd":"asdasd"});});
                // setResults(["1", "2"]);
                setResults([samplePayment, samplePayment, samplePayment]);
            } catch (err) {
                console.error("Failed to fetch all payments : ", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllPayments();
    }, [PAGE_SIZE]);
    return (
        <div className="w-full h-full flex flex-col gap-[20px]">
            <PaginationNavbar
                pageNo={page}
                totalPages={totalPages}
                backwardAction={() => setPage(page - 1)}
                skipBackwardAction={() => setPage(1)}
                forwardAction={() => setPage(page + 1)}
                skipForwardAction={() => setPage(totalPages)}
            />
            {isLoading ? (
                <LoadingItem size={15} />
            ) : results.length > 0 ? (
                <div className="flex flex-col overflow-y-auto gap-[5px]">
                    {results.map((result, index) => (
                        <AllPaymentsListItem result={result} />
                        // <div key={index}>{result}</div>
                    ))}
                </div>
            ) : (
                <div>Payments list empty</div>
            )}
        </div>
    );
};

export default AllPayments;
