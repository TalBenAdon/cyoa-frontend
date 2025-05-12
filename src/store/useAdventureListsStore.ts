import { create } from 'zustand'

type adventuresListType = {
    adventureId: string
    adventureName: string
}[]

type useAdventureListsStoreType = {
    adventuresList: adventuresListType
}

export const useAdventureListsStore = create<useAdventureListsStoreType>((set) => ({
    adventuresList: [],
    setAdventuresList: (list: adventuresListType) => set({ adventuresList: list })
}))