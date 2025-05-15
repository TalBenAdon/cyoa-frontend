import { create } from 'zustand'

type useAdventureUIStoreType = {
    storyText: string
    optionsList: string[]
    reset: () => void
    setStoryText: (text: string) => void
    updateOptions: (index: number, toAppend: string) => void
}

export const useAdventureUIStore = create<useAdventureUIStoreType>((set) => ({
    storyText: "",
    optionsList: [],


    reset: () => set({
        storyText: "",
        optionsList: []
    }),


    setStoryText: (text: string) => set({ storyText: text }),

    updateOptions: (index: number, toAppend: string) => set((state) => {
        const updated = [...state.optionsList]
        while (updated.length <= index) {
            updated.push("")
        }
        updated[index] = (updated[index] || "") + toAppend
        return { optionsList: updated };
    })
}))