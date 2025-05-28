import ToolTitleButton from '../ToolTitleButton/ToolTitleButton'
import { useState } from 'react'
import { toolIconMap } from '../../utils/toolIconMap'
import ToolItemSlot from '../UI/ToolItemColumn/ToolItemColumn'
export default function EquipmentTable() {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => setIsToggled(!isToggled)

    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={"Equipment"} isToggled={isToggled} onClick={handleTitleClick} />
            <div className='p-1'>
                <ToolItemSlot />
            </div>
        </div>
    )
}