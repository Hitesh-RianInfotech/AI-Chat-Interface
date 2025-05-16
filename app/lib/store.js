import { create } from 'zustand';

export const useChatStore = create((set) => ({
  messages: [],

  addMessage: (msg) =>
    set((state) => {
      const updated = [...state.messages, msg];
      if (typeof window !== "undefined") {
        localStorage.setItem("chatMessages", JSON.stringify(updated));
      }
      return { messages: updated };
    }), 

  loadMessages: () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatMessages");
      if (saved) {
        set({ messages: JSON.parse(saved) });
      }
    }
  },

  clearMessages: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatMessages");
    }
    set({ messages: [] });
  }
}));
