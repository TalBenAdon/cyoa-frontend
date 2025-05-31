import RemoveIcon from '../../../assets/icons/remove.svg?react'
import AddIcon from '../../../assets/icons/add.svg?react'
import { Item } from '../../../utils/equipmentSlotsDemo';
// import PlaceHolderIcon from "../../../assets/icons/StateWeapon.svg?react"
type ToolItemSlotProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    item: Item | null;
    onActionClick: (id: string) => void
    actionType: 'remove' | 'add' | null;
}

export default function ToolItemSlot({ item, Icon, onActionClick, actionType }: ToolItemSlotProps) {
    const isEmpty = !item

    const iconClass = "lg:w-[12px] lg:h-[12px] hover:opacity-50 cursor-pointer"

    const handleClick = () => {
        if (!isEmpty && !actionType) {
            onActionClick(item.id)
        }
    }

    return (
        <div className="flex items-center text-[12px] lg:text-sm justify-between py-2 border-white/50"
            onClick={actionType === null ? handleClick : undefined}>

            <div className="flex items-center gap-1">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p className={`${isEmpty ? 'text-text-base' : ''}`}>
                    {isEmpty ? '[empty slot]' : item.name}
                </p>
            </div>
            {!isEmpty && actionType && (<button onClick={() => onActionClick(item.id)}>
                {actionType === 'remove' ? (<RemoveIcon className={iconClass} />) :
                    actionType === 'add' ? <AddIcon className={iconClass} /> :
                        ''
                }
            </button>)}

        </div>
    )
}