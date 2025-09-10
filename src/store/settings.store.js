import { create } from "zustand";
import { addClub, addIndustry } from "../services/settings.service";

export const useAddClubStore = create((set) => ({
    districtId: "",
    clubName: "",
    clubId: "",
    zoneName: "",
    selectedFile: null,
    loading: false,
    error: null,
    success: false,
    setDistrictId: (districtId) => set({ districtId }),
    setClubName: (clubName) => set({ clubName }),
    setClubId: (clubId) => set({ clubId }),
    setZoneName: (zoneName) => set({ zoneName }),
    setSelectedFile: (selectedFile) => set({ selectedFile }),

    reset: () =>
        set({
            districtId: "",
            clubName: "",
            clubId: "",
            zoneName: "",
            selectedFile: null,
            loading: false,
            error: null,
            success: false,
        }),

    addClub: async () => {
        set({ loading: true, error: null, success: false });
        try {
            const { districtId, clubName, clubId, zoneName, selectedFile } =
                useAddClubStore.getState();
            const res = await addClub(
                districtId,
                clubName,
                clubId,
                zoneName,
                selectedFile
            );
            if (res.status >= 200 && res.status < 300) {
                set({ success: true });
                useAddClubStore.getState().reset();
            }
            set({ loading: false });
            return res;
        } catch (err) {
            set({ error: err, loading: false, success: false });
            throw err;
        }
    },
}));

export const useAddIndustryStore = create((set) => ({
    industry: "",
    classification: "",
    selectedFile: null,
    loading: false,
    error: null,
    success: false,

    setIndustry: (industry) => set({ industry }),
    setClassification: (classification) => set({ classification }),
    setSelectedFile: (selectedFile) => set({ selectedFile }),

    reset: () =>
        set({
            industry: "",
            classification: "",
            selectedFile: null,
            loading: false,
            error: null,
            success: false,
        }),

    addIndustry: async () => {
        set({ loading: true, error: null, success: false });
        try {
            const { industry, classification, selectedFile } =
                useAddIndustryStore.getState();
            const res = await addIndustry(
                industry,
                classification,
                selectedFile
            );
            if (res.status >= 200 && res.status < 300) {
                set({ success: true });
                useAddIndustryStore.getState().reset();
            }
            set({ loading: false });
            return res;
        } catch (err) {
            set({ error: err, loading: false, success: false });
            throw err;
        }
    },
}));
