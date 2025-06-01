import { create } from 'zustand'

export type useSideBarStoreType = {

}

export const useSideBarStore = create<useSideBarStoreType>((set) => ({
    equipmentItemsList: [],

}))