import { useEffect, useState } from "react";
import PaginationNavbar from "../../components/PaginationNavbar";
import { usePagination } from "../../hooks/usePagination";
import { useLoading } from "../../hooks/useLoading";
import { fetchAllBanners } from "../../services/content.service";
import BannerListItem from "./components/BannerListItem";
import LoadingItem from "../../components/LoadingItem";

const PAGE_SIZE = 100; //100 results per page

const ViewBanners = () => {
    const { isLoading, setIsLoading } = useLoading();
    const { page, setPage, total, setTotal, totalPages } =
        usePagination(PAGE_SIZE);
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        const fetchBanners = async () => {
            setIsLoading(true);
            try {
                const res = await fetchAllBanners({
                    page,
                    limit: PAGE_SIZE,
                });
                setBanners(res.data.results || []);
                setTotal(res.data.total || 0);
                setIsLoading(false);
                console.log(res.data.results);
            } catch {
                console.log("Error fetching banners");
                setIsLoading(false);
            }
        };
        fetchBanners();
    }, [page]);
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto ">
            <PaginationNavbar
                pageNo={page}
                totalPages={totalPages}
                backwardAction={() => setPage(page - 1)}
                skipBackwardAction={() => setPage(1)}
                forwardAction={() => setPage(page + 1)}
                skipForwardAction={() => setPage(totalPages)}
            />
            {isLoading ? (
                <LoadingItem size={10} />
            ) : banners.length > 0 ? (
                <div className="flex flex-col overflow-y-auto pr-[3px] w-full h-full gap-[5px] mb-[20px] mt-[10px]">
                    {banners.map((banner, index) => (
                        <BannerListItem
                            key={index}
                            index={index}
                            banner={banner}
                            page={page}
                            pageSize={PAGE_SIZE}
                        />
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default ViewBanners;
