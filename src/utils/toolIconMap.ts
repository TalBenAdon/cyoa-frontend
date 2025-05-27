import Hat from '../assets/icons/StateHat.svg?react'
import Shirt from '../assets/icons/StateShirt.svg?react'
import Pants from '../assets/icons/StatePants.svg?react'
import Shoes from '../assets/icons/StatePants.svg?react'
import Weapon from '../assets/icons/StateWeapon.svg?react'
import Gloves from '../assets/icons/StateGloves.svg?react'
import Shield from '../assets/icons/StateShield.svg?react'
import Accessory from '../assets/icons/StateAccessory.svg?react'
import React from 'react'

export type Item = {
    name: string,
    description: string,
    type: ItemType
}

export type EquipmentSlot = {
    type: ItemType;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    item: Item | null;
};

export type ItemType = 'hat' | 'shirt' | 'pants' | 'shoes' | 'weapon' | 'gloves' | 'shield' | 'accessory'

export const toolIconMap: Record<ItemType, React.FC<React.SVGProps<SVGSVGElement>>> = {
    hat: Hat,
    shirt: Shirt,
    pants: Pants,
    shoes: Shoes,
    weapon: Weapon,
    gloves: Gloves,
    shield: Shield,
    accessory: Accessory
}
