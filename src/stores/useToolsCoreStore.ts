import { create } from 'zustand'
import { Item } from '../utils/equipmentSlotsDemo'

type equipmentSlot = {
    slotId: string,
    slotName: string,
    equippedItem: Item | null
}
type InventoryItemType = {
    id: string,
    name: string,
    type: 'equipment' | 'use',
    itemType: string,
    description: string,
    amount: number,
    stats?: {
        STR: number,
        CON: number,
        DEX: number,
    }
    // onEquip: (id: string, itemType: string) => void
}
export type useToolsCoreStoreType = {
    equipmentSlots: equipmentSlot[],
    removeEquippedItem: (slotId: string, itemId: string) => void
    inventoryItems: InventoryItemType[]
}

export const useToolsCoreStore = create<useToolsCoreStoreType>((set) => ({
    equipmentItemsList: ['a', 'hi', 'sup'],

    equipmentSlots: [{ slotId: 'hat', slotName: 'hat', equippedItem: { id: '123', name: 'hat of doom', description: 'doomie', type: 'hat' } }, { slotId: 'shirt', slotName: 'shirt', equippedItem: null }, { slotId: 'pants', slotName: 'pants', equippedItem: null }, { slotId: 'accessory', slotName: 'accessory', equippedItem: null }, { slotId: 'gloves', slotName: 'gloves', equippedItem: null }],

    inventoryItems: [{ id: 'glv1', name: 'Subjugation Glove', type: 'equipment', itemType: 'glove', description: 'an glove', amount: 1 }],


    removeEquippedItem: (slotId: string, itemId: string) => {
        set(state => {
            const updated = [...state.equipmentSlots]
            const index = updated.findIndex(slot => slot.slotId === slotId)
            console.log(`in the inventory item ${itemId}, change status to "unequipped"`);
            updated[index].equippedItem = null
            return { equipmentSlots: updated }
        })
    }
}))



