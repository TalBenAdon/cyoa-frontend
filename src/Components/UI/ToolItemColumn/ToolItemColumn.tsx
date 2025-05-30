import RemoveIcon from '../../../assets/icons/remove.svg?react'
import AddIcon from '../../../assets/icons/add.svg?react'
import { Item } from '../../../utils/equipmentSlotsDemo';
// import PlaceHolderIcon from "../../../assets/icons/StateWeapon.svg?react"
type ToolItemSlotProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    item: Item | null;
    onActionClick: (id: string) => void
    actionType: 'remove' | 'add';
}

export default function ToolItemSlot({ item, Icon, onActionClick, actionType = 'remove' }: ToolItemSlotProps) {
    const isEmpty = !item

    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"



    return (
        <div className="flex items-center text-[12px] lg:text-sm justify-between py-2 border-white/50">
            <div className="flex items-center gap-1">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p className={`${isEmpty ? 'text-text-base' : ''}`}>
                    {isEmpty ? '[empty slot]' : item.name}
                </p>
            </div>
            {!isEmpty && (<button onClick={() => onActionClick(item.id)}>
                {actionType === 'remove' ? (<RemoveIcon className={iconClass} />) : <AddIcon className={iconClass} />}
            </button>)}
        </div>
    )
}