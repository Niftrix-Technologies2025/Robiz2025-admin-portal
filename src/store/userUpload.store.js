import { create } from "zustand";
import { addUsersFromCSV } from "../services/user.service";

export const useUploadStore = create((set) => ({
    isUploading: false,
    result: null,
    error: null,
    startUpload: async (file) => {
        set({ isUploading: true, error: null, result: null });
        try {
            // await new Promise(res => setTimeout(res, 5000));
            const res = await addUsersFromCSV(file);
            set({ result: res.data });
            return res;
        } catch (err) {
            set({ error: err });
            throw err;
        } finally {
            set({ isUploading: false });
        }
    },
    reset: () => set({ isUploading: false, result: null, error: null }),
}));
