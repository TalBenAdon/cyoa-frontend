
export type Item = {
    id: string;
    name: string,
    description: string,
    type: string
}

export type useItem = {
    id: string;
    name: string,
    description: string
}

export type StandardTypes = 'hat' | 'shirt' | 'pants' | 'shoes' | 'weapon' | 'gloves' | 'shield' | 'accessory'

export const demoItem: Item = {
    id: 'aex12',
    name: 'hat of doom',
    description: 'it is very doomissh',
    type: 'hat'

}


export const demoItem2: Item = {
    id: 'ae442',
    name: 'peashooter',
    description: 'very peashooter',
    type: 'weapon'

}

type EquipmentSlot = {
    id: string;
    type: StandardTypes | string;
    item: Item | null;
}

export const equipmentSlotsDemo: EquipmentSlot[] = [
    { id: 'hat', type: 'hat', item: null },
    { id: 'shirt', type: 'shirt', item: null },
    { id: 'pants', type: 'pants', item: null },
    { id: 'shoes', type: 'shoes', item: null },
    { id: 'weapon', type: 'weapon', item: null },
    { id: 'gloves', type: 'gloves', item: null },
    { id: 'shield', type: 'shield', item: null },
    { id: 'accessory', type: 'accessory', item: null },
]


export const equipmentList: Item[] = [
    demoItem, demoItem2
]


export const useItemsList: useItem[] = [
    { id: 'sxg', name: 'rope', description: 'a rope' },
    { id: 'sxg2', name: 'map', description: 'a map' },
    { id: 'sxg4', name: 'hose', description: 'a hose' },
]


