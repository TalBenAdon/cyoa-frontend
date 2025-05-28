import RemoveIcon from '../../../assets/icons/remove.svg?react'
// import PlaceHolderIcon from "../../../assets/icons/StateWeapon.svg?react"
type ToolItemSlotProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    itemName?: string;
}

export default function ToolItemSlot({ itemName, Icon }: ToolItemSlotProps) {
    const isEmpty = !itemName




    return (
        <div className="flex items-center text-[12px] lg:text-sm justify-between">
            <div className="flex items-center">
                <Icon className="lg:w-[14px] lg:h-[14px]" />
                <p className={`${isEmpty ? 'text-text-base' : ''}`}>
                    {isEmpty ? '[empty slot]' : itemName}
                </p>
            </div>
            <button>
                <RemoveIcon className="lg:w-[12px] lg:h-[12px] hover:bg-add-remove-hover cursor-pointer" />
            </button>
        </div>
    )
}