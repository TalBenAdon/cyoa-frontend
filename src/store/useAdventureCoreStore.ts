import { create } from 'zustand'
import { AdventureInfoResponse } from '../context/AdventureContext'

type AdventureCoreType = {
    currentAdventureId: string | null
    currentAdventureInfo: AdventureInfoResponse | null
    setCurrentAdventureId: (id: string) => void
    setAdventureInfo: (adventureInfo: AdventureInfoResponse) => void
}

export const useAdventureCoreStore = create<AdventureCoreType>((set) => ({
    currentAdventureId: null,
    currentAdventureInfo: null,

    setCurrentAdventureId: (id: string) => set({ currentAdventureId: id }),
    setAdventureInfo: (adventureInfo: AdventureInfoResponse) => set({ currentAdventureInfo: adventureInfo })
}))