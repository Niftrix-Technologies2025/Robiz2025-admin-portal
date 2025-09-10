import { AppConfig } from "../util/AppConfig";
import axios from "axios";

export const addClub = (
    districtId,
    clubName,
    clubId,
    zoneName,
    selectedFile
) => {
    const formData = new FormData();
    formData.append("districtId", districtId);
    formData.append("clubName", clubName);
    formData.append("clubId", clubId);
    formData.append("zoneName", zoneName);
    if (selectedFile) {
        formData.append("file", selectedFile);
    }
    return axios.post(`${AppConfig.api_url}settings/add-club`, formData, {
        withCredentials: true,
    });
};

export const addIndustry = (industry, classification, selectedFile) => {
    const formData = new FormData();
    formData.append("industry", industry);
    formData.append("classification", classification);
    if (selectedFile) {
        formData.append("file", selectedFile);
    }
    return axios.post(`${AppConfig.api_url}settings/add-industry`, formData, {
        withCredentials: true,
    });
};
