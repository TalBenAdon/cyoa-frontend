import { create } from 'zustand'

export type useSideBarStoreType = {
    equipmentItemsList: any[]
}

export const useSideBarStore = create<useSideBarStoreType>((set) => ({
    equipmentItemsList: ['a', 'hi', 'sup'],

}))