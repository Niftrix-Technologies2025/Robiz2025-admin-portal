import { AppConfig } from "../util/AppConfig";
import axios from "axios";

export const fetchUnverifiedUsers = (payload) => {
    return axios.post(
        `${AppConfig.api_url}users/fetch-unverified-users`,
        payload,
        {
            withCredentials: true,
        }
    );
};

export const setUserAsVerified = (userId) => {
    return axios.post(
        `${AppConfig.api_url}users/set-user-verified`,
        { userId },
        { withCredentials: true }
    );
};

export const searchProfileByAttribute = (searchQuery, searchAttribute) => {
    const formData = new FormData();
    formData.append("searchQuery", searchQuery);
    formData.append("searchAttribute", searchAttribute);
    return axios.post(`${AppConfig.api_url}users/search-profiles`, formData, {
        withCredentials: true,
    });
};

export const fetchUserDetails = (userId) => {
    return axios.get(`${AppConfig.api_url}users/fetch-user-detail`, {
        params: { userId },
        withCredentials: true,
    });
};

export const suspendUser = (userId) => {
    return axios.post(
        `${AppConfig.api_url}users/suspend-user`,
        { userId },
        { withCredentials: true }
    );
};

export const activateUser = (userId) => {
    return axios.post(
        `${AppConfig.api_url}users/activate-user`,
        { userId },
        { withCredentials: true }
    );
};

export const addUsersFromCSV = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(
        `${AppConfig.api_url}users/add-users-from-csv`,
        formData,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};

export const sendNotification = () => {
    return axios.post(`${AppConfig.api_url}users/send-notification`, {
        withCredentials: true,
    });
};
