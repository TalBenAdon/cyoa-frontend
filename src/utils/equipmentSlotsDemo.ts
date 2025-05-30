
export type Item = {
    id: string;
    name: string,
    description: string,
    type: string
}

export type StandardTypes = 'hat' | 'shirt' | 'pants' | 'shoes' | 'weapon' | 'gloves' | 'shield' | 'accessory'

export const demoItem: Item = {
    id: 'aex12',
    name: 'hat of doom',
    description: 'it is very doomissh',
    type: 'hat'

}

type EquipmentSlot = {
    id: string;
    type: StandardTypes | string;
    item: Item | null;
}

export const equipmentSlotsDemo: EquipmentSlot[] = [
    { id: 'hat1', type: 'hat', item: null },
    { id: 'hat2', type: 'hat', item: null },
    { id: 'shirt', type: 'shirt', item: null },
    { id: 'pants', type: 'pants', item: null },
    { id: 'shoes', type: 'shoes', item: null },
    { id: 'weapon', type: 'weapon', item: null },
    { id: 'gloves', type: 'gloves', item: null },
    { id: 'shield', type: 'shield', item: null },
    { id: 'accessory', type: 'accessory', item: null },
]

