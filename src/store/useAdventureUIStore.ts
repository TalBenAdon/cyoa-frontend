import { create } from 'zustand'

type useAdventureUIStoreType = {
    storyText: string
    optionsList: string[]
    reset: () => void
    setStoryText: (text: string) => void
}

export const useAdventureUIStore = create<useAdventureUIStoreType>((set) => ({
    storyText: "",
    optionsList: [],


    reset: () => set({
        storyText: "",
        optionsList: []
    }),


    setStoryText: (text: string) => set({ storyText: text }),
    setOptions: (options: string[]) => set({ optionsList: options })
}))