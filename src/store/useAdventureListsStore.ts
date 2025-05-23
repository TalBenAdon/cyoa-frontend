import { create } from 'zustand'

type adventuresListItem = {
    adventureId: string
    adventureName: string
}

export type adventuresListType = adventuresListItem[]

type useAdventureListsStoreType = {
    adventuresList: adventuresListType
    setAdventuresList: (list: adventuresListType) => void
}

export const useAdventureListsStore = create<useAdventureListsStoreType>((set) => ({
    adventuresList: [],
    setAdventuresList: (list: adventuresListType) => {
        console.log(">>> Setting adventuresList to:", list)
        set({ adventuresList: list })
    }
}))