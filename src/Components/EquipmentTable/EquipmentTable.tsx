import ToolTitleButton from '../ToolTitleButton/ToolTitleButton'
import fallBackIcon from '../../assets/icons/StateGloves.svg?react'
import { useState } from 'react'
import { toolIconMap } from '../../utils/toolIconMap'
import ToolItemSlot from '../UI/ToolItemColumn/ToolItemColumn'
import { equipmentSlotsDemo } from '../../utils/equipmentSlotsDemo'

export default function EquipmentTable() {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => setIsToggled(!isToggled)



    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={"Equipment"} isToggled={isToggled} onClick={handleTitleClick} />
            <div className='flex flex-col gap-2 p-1'>
                {
                    Object.entries(equipmentSlotsDemo).map(([type, item]) => {
                        const Icon = toolIconMap[type] ?? fallBackIcon
                        return (
                            <ToolItemSlot Icon={Icon} itemName={item?.name} />
                        )
                    })
                }

            </div>
        </div>
    )
}