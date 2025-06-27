import { create } from 'zustand'

type useAdventureUIStoreType = {
    storyTitle: string
    storyText: string
    optionsList: string[]
    reset: () => void
    streamTitleText: (textBuffer: string) => void
    streamStoryText: (textBuffer: string) => void
    streamOptions: (index: number, toAppend: string) => void
}

export const useAdventureUIStore = create<useAdventureUIStoreType>((set) => ({
    storyTitle:"",
    storyText: "",
    optionsList: [],


    reset: () => set({
        storyText: "",
        optionsList: []
    }),

    
    streamTitleText:(textBuffer: string) => set((state)=>{

        return{storyTitle: state.storyTitle + textBuffer}
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