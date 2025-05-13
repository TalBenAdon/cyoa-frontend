import { create } from 'zustand'

type adventuresListType = {
    adventureId: string
    adventureName: string
}[]

type useAdventureListsStoreType = {
    adventuresList: adventuresListType
    setAdventuresList: (list: adventuresListType) => void
}

export const useAdventureListsStore = create<useAdventureListsStoreType>((set) => ({
    adventuresList: [],
    setAdventuresList: (list: adventuresListType) => set({ adventuresList: list })
}))