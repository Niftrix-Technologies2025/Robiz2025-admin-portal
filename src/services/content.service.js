import { AppConfig } from "../util/AppConfig";
import axios from "axios";

export const fetchAllBanners = ({ page = 1, limit = 10 } = {}) => {
    return axios.post(
        `${AppConfig.api_url}content/fetch-all-banners`,
        { page, limit },
        { withCredentials: true }
    );
};
