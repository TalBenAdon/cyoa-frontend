import { create } from 'zustand'

type History = {
    text: string;
    options: string[];
    chosenOption: string | null
    sceneNumber: number
}[]



type Adventure = {
    id: string,
    title: string,
    text: string,
    sceneNumber: number,
    options: string[],
    history: History
}


type AdventureCoreType = {
    adventure: Adventure | null;
    setAdventure: (adventure: Adventure) => void;
    updateAdventure:(partial: Partial<Adventure>) => void;
}

export const useAdventureCoreStore = create<AdventureCoreType>((set) => ({
    adventure: null,
    setAdventure: (adventure: Adventure) => set({adventure}),
    updateAdventure: (partial) => 
        set((state)=> {
            if(!state.adventure) return {};          
            return { adventure: {...state.adventure, ...partial}}})
}))



