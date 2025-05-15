import { create } from 'zustand'

type useAdventureUIStoreType = {
    storyText: string
    optionsList: string[]
    reset: () => void
    streamStoryText: (textBuffer: string) => void
    streamOptions: (index: number, toAppend: string) => void
}

export const useAdventureUIStore = create<useAdventureUIStoreType>((set) => ({
    storyText: "",
    optionsList: [],


    reset: () => set({
        storyText: "",
        optionsList: []
    }),

    streamStoryText: (textBuffer: string) => set((state) => {
        return { storyText: state.storyText + textBuffer }
    }),

    streamOptions: (index: number, toAppend: string) => set((state) => {
        const updated = [...state.optionsList]
        while (updated.length <= index) {
            updated.push("")
        }
        updated[index] = (updated[index] || "") + toAppend
        return { optionsList: updated };
    })
}))