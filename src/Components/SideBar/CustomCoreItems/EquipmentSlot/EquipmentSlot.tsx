import { Item } from "../../../../utils/equipmentSlotsDemo"
import FallBackIcon from '../../../../assets/icons/StateGloves.svg?react'
import RemoveIcon from '../../../../assets/icons/remove.svg?react'
import { toolIconMap } from "../../../../utils/toolIconMap"
type EquipmentSlotType = {
    item: {
        slotName: string,
        equippedItem: Item | null
    }
}

export default function EquipmentSlot({ item }: EquipmentSlotType) {
    const { slotName, equippedItem } = item
    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"
    const Icon = toolIconMap[slotName] ?? FallBackIcon

    // const handleOnClick = () => {
    //     console.log('slot clicked');
    // }

    return (
        <>
            <button className="flex items-center gap-1">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p className={`${!equippedItem && 'text-text-base'}`}>{`${equippedItem ? equippedItem.name : '[empty slot]'}`}</p>
            </button>

            {equippedItem && <button>
                <RemoveIcon className={iconClass} />
            </button>}
        </>

    )


}


