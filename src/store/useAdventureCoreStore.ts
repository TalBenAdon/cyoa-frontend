import { create } from 'zustand'
import { AdventureInfoResponse } from '../context/AdventureContext'

type AdventureCoreType = {
    currentAdventureId: string | null
    currentAdventureInfo: AdventureInfoResponse | null
}

export const useAdventureCoreStore = create<AdventureCoreType>((set) => ({
    currentAdventureId: null,
    currentAdventureInfo: null,

    setCurrentAdventureId: (id: string) => set({ currentAdventureId: id }),
    setAdventureInfo: (adventureInfo: AdventureInfoResponse) => set({ currentAdventureInfo: adventureInfo })
}))