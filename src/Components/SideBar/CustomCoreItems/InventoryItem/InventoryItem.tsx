import { toolIconMap } from "../../../../utils/toolIconMap"
import FallBackIcon from '../../../../assets/icons/StateGloves.svg?react'
import AddIcon from '../../../../assets/icons/add.svg?react'
type InventoryItemType = {
    item: {
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
    }
    onEquip?: (id: string, itemType: string) => void
}

export default function InventoryItem({ item, onEquip }: InventoryItemType) {
    const { id, name, itemType } = item
    const Icon = toolIconMap[itemType] ?? FallBackIcon
    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"

    return (
        <>
            <button className="flex items-center gap-1">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p>{name}</p>
            </button>

            {onEquip && <button onClick={() => onEquip(id, itemType)}>
                <AddIcon className={iconClass} />
            </button>}
        </>
    )

}