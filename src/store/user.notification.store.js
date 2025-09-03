import { create } from "zustand";
import { sendNotification as sendNotificationApi } from "../services/user.service";

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
        set({ isLoading: true });
        try {
            const res = await sendNotificationApi(
                message,
                recipientType,
                attachments
            );
            if (res.status === 200) {
                set({ isLoading: false });
                get().reset();
            }
            return res;
        } catch (err) {
            set({ isLoading: false, error: err, isError: true });
            throw err;
        }
    },
    reset: () =>
        set({
            isLoading: false,
            message: "",
            recipientType: "all",
            attachments: [],
            error: null,
            isError: false,
        }),
}));
