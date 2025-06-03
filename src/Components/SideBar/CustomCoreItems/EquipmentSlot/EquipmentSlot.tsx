import { Item } from "../../../../utils/equipmentSlotsDemo"
import FallBackIcon from '../../../../assets/icons/StateGloves.svg?react'
import RemoveIcon from '../../../../assets/icons/remove.svg?react'
import { toolIconMap } from "../../../../utils/toolIconMap"
type EquipmentSlotType = {
    item: {
        slotId: string,
        slotName: string,
        equippedItem: Item | null
    }
    onRemove?: (slotId: string, itemId: string) => void;
}

export default function EquipmentSlot({ item, onRemove }: EquipmentSlotType) {
    const { slotId, slotName, equippedItem } = item
    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"
    const Icon = toolIconMap[slotName] ?? FallBackIcon

    return (
        <>
            <button className="flex items-center gap-1">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p className={`${!equippedItem && 'text-text-base'}`}>{`${equippedItem ? equippedItem.name : '[empty slot]'}`}</p>
            </button>

            {equippedItem && onRemove && <button onClick={() => onRemove(slotId, equippedItem.id)}>
                <RemoveIcon className={iconClass} />
            </button>}
        </>

    )


}


