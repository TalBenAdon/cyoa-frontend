import { create } from 'zustand'
import { AdventureInfoResponse } from '../context/AdventureContext'

type AdventureCoreType = {
    currentAdventureId: string
    adventureInfo: AdventureInfoResponse
}

const useAdventureCoreStore = create((set) => ({
    currentAdventureId: null,
    currentAdventureInfo: null,
    setCurrentAdventureId: (id: string) => set({ currentAdventureId: id }),
    setAdventureInfo: (adventureInfo: AdventureInfoResponse) => ({ currentAdventureInfo: adventureInfo })
}))