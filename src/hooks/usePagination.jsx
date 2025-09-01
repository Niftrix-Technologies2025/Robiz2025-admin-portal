import { useState } from "react";
export function usePagination(pageSize = 50) {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.ceil(total / pageSize);
    return { page, setPage, total, setTotal, totalPages };
}
