import { AppConfig } from "../util/AppConfig";
import axios from "axios";

export const fetchPayments = (criteria, page = 1, limit = 10) => {
    const formData = new FormData();
    formData.append("criteria", criteria);
    formData.append("page", page);
    formData.append("limit", limit);
    return axios.post(`${AppConfig.api_url}premium/fetch-payments`, formData, {
        withCredentials: true,
    });
};
