import { toolIconMap } from "../../../../utils/toolIconMap"
import FallBackIcon from '../../../../assets/icons/StateGloves.svg?react'
import AddIcon from '../../../../assets/icons/add.svg?react'
import { InventoryItemType } from "../../../../stores/useToolsCoreStore"

type InventoryItemSlotType = {
    item: InventoryItemType,
    onEquip?: (id: string, itemType: string) => void
}

export default function InventoryItem({ item, onEquip }: InventoryItemSlotType) {
    const { id, name, itemType, type } = item
    let Icon = undefined

    if (itemType) {
        Icon = toolIconMap[itemType] ?? FallBackIcon
    }
    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"

    {

        return (
            <>
                <button className="flex items-center gap-1">
                    {type === 'equipment' && Icon && <Icon className="lg:w-[14px] lg:h-[14px]" />}
                    <p>{name}</p>
                </button>

                {onEquip && type === 'equipment' && itemType && <button onClick={() => onEquip(id, itemType)}>
                    <AddIcon className={iconClass} />
                </button>}
            </>
        )

    }
}