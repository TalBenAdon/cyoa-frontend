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
    adventureId: string | null;
    // setAdventure: (adventure: Adventure) => void;
    updateAdventure: (id: string) => void;
    // updateAdventure:(partial: Partial<Adventure>) => void;
}

export const useAdventureCoreStore = create<AdventureCoreType>((set) => ({
    adventureId: null,
    // setAdventure: (adventure: Adventure) => set({ adventure }),
    updateAdventure: (id: string) =>
        set({ adventureId: id })
    // updateAdventure: (partial) => 
    //     set((state)=> {
    //         if(!state.adventure) return {};          
    //         return { adventure: {...state.adventure, ...partial}}})
}))



