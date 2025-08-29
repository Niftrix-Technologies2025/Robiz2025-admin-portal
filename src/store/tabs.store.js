import { create } from "zustand";

export const useTabsStore = create((set, get) => ({
    lastTabs: {},
    setLastTab: (parentUrl, tabUrl) =>
        set((s) => ({ lastTabs: { ...s.lastTabs, [parentUrl]: tabUrl } })),
    getLastTab: (parentUrl) => get().lastTabs[parentUrl] || null,
}));
