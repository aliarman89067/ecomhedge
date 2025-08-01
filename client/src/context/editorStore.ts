import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
import { type Editor } from "@tiptap/react";

interface Props {
  type: string;
  changeType: (type: string) => void;
  html: { key: string; value: string }[];
  addHtml: ({ key, value }: { key: string; value: string }) => void;
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  resetHtml: () => void;
}

export const useEditorStore = create<Props>((set, get) => ({
  type: "",
  changeType: (type) => set({ type }),
  html: [],
  addHtml: ({ key, value }) => {
    const isExist = get().html.find((item) => item.key === key);
    if (isExist) {
      set({
        html: get().html.map((item) =>
          item.key === key ? { ...item, value } : item
        ),
      });
    } else {
      set({
        html: [...get().html, { key, value }],
      });
    }
  },
  resetHtml: () => {
    set({
      html: get().html.map((item) => ({ key: item.key, value: "" })),
    });
  },
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
