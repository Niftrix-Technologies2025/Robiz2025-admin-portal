import { AppConfig } from "../util/AppConfig";
import axios from "axios";

export const loginService = (payload) => {
    return axios.post(`${AppConfig.api_url}auth/login`, payload, {
        withCredentials: true,
    });
};

export const logoutService = () => {
    return axios.post(
        `${AppConfig.api_url}auth/logout`,
        {},
        {
            withCredentials: true,
        }
    );
};

export const getProfile = () => {
    return axios.get(`${AppConfig.api_url}get-profile`, {
        withCredentials: true,
    });
};
