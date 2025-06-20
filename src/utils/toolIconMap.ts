import Hat from '../assets/icons/StateHat.svg?react'
import Shirt from '../assets/icons/StateShirt.svg?react'
import Pants from '../assets/icons/StatePants.svg?react'
import Shoes from '../assets/icons/StateShoes.svg?react'
import Weapon from '../assets/icons/StateWeapon.svg?react'
import Gloves from '../assets/icons/StateGloves.svg?react'
import Shield from '../assets/icons/StateShield.svg?react'
import Accessory from '../assets/icons/StateAccessory.svg?react'
import React from 'react'



export const toolIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    hat: Hat,
    shirt: Shirt,
    pants: Pants,
    shoes: Shoes,
    weapon: Weapon,
    gloves: Gloves,
    shield: Shield,
    accessory: Accessory
}
