
export type Item = {
    name: string,
    description: string,
    type: string
}

export type StandardTypes = 'hat' | 'shirt' | 'pants' | 'shoes' | 'weapon' | 'gloves' | 'shield' | 'accessory'

export const equipmentSlotsDemo: Record<StandardTypes | string, Item | null> = {
    hat: null,
    shirt: null,
    pants: null,
    shoes: null,
    weapon: null,
    gloves: null,
    shield: null,
    accessory: null,
}