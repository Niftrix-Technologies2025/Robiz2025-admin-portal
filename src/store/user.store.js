import { create } from "zustand";
import {
    sendNotification as sendNotificationApi,
    addUsersFromCSV,
} from "../services/user.service";

export const useNotificationStore = create((set, get) => ({
    isLoading: false,
    message: "",
    recipientType: "all",
    attachments: [],
    setIsLoading: (isLoading) => set({ isLoading }),
    setMessage: (message) => set({ message }),
    setRecipientType: (recipientType) => set({ recipientType }),
    setAttachments: (attachments) => set({ attachments }),
    error: null,
    isError: false,
    sendNotification: async () => {
        const { message, recipientType, attachments } = get();
        set({ isLoading: true, error: null, isError: false });
        try {
            const res = await sendNotificationApi(
                message,
                recipientType,
                attachments
            );
            if (res.status === 200) {
                set({ isLoading: false, error: null, isError: false });
                get().resetNotification();
            }
            return res;
        } catch (err) {
            set({ isLoading: false, error: err, isError: true });
            throw err;
        }
    },
    resetNotification: () =>
        set({
            isLoading: false,
            message: "",
            recipientType: "all",
            attachments: [],
            error: null,
            isError: false,
        }),
}));

export const useUploadStore = create((set) => ({
    isUploading: false,
    result: null,
    error: null,
    isError: false,
    startUpload: async (file) => {
        set({ isUploading: true, error: null, result: null });
        try {
            const res = await addUsersFromCSV(file);
            set({ result: res.data });
            return res;
        } catch (err) {
            set({ error: err, isError: true });
            throw err;
        } finally {
            set({ isUploading: false });
        }
    },
    resetUpload: () =>
        set({ isUploading: false, result: null, error: null, isError: false }),
}));
