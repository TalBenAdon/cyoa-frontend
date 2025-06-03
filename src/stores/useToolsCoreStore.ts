import { create } from 'zustand'
type InventoryItemType = {
    name: string,
    type: 'equipment' | 'use',
    description: string,
    amount: number,
    stats?: {
        STR: number,
        CON: number,
        DEX: number,
    }
}

export type useToolsCoreStoreType = {
    equipmentSlots: object[]
}

export const useToolsCoreStore = create<useToolsCoreStoreType>((set) => ({
    equipmentItemsList: ['a', 'hi', 'sup'],

    equipmentSlots: [{ slotName: 'hat', equippedItem: null }, { slotName: 'shirt', equippedItem: null }, { slotName: 'pants', equippedItem: null }, { slotName: 'accessory', equippedItem: null }, { slotName: 'gloves', equippedItem: null }],

    inventoryItems: ['itemid1', 'itemid1', 'itemid1', 'itemid1', 'itemid1', 'itemid1']
}))



